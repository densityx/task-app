import {Button, Heading, Input, Modal, ModalContainer} from "../Common";
import {useCallback, useEffect, useState} from "react";
import {createTask, updateTask} from "../../services/api";
import {useClickOutside} from "@mantine/hooks";
import {addOrUpdateTask, TaskState} from "../../store/redux/taskSlice";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {ModalState} from "../../pages/Dashboard";

interface CreateTaskProps {
    modal: ModalState;
    handleOpenModal: (open: boolean) => void;
}

export default function CreateTask({modal, handleOpenModal}: CreateTaskProps) {
    const dispatch = useAppDispatch();
    const [task, setTask] = useState('');
    const ref = useClickOutside(() => handleOpenModal(false));
    const taskToBeEdited: TaskState | undefined = useAppSelector(state => state.task.tasks.find(task => task._id === modal.id));

    const handleUpdateOrCreate = useCallback(async () => {
        // @ts-ignore
        let {data, status} = taskToBeEdited?._id
            ? await updateTask({
                id: taskToBeEdited?._id,
                name: task,
            })
            : await createTask({
                name: task,
                completed: false,
            });

        if (status === 200) {
            dispatch(addOrUpdateTask({
                type: taskToBeEdited?._id ? 'update' : 'create',
                task: data.task,
            }));

            setTask('');

            handleOpenModal(false);
        }
    }, [task]);

    useEffect(() => {
        if (modal.id) {
            // @ts-ignore
            setTask(taskToBeEdited.name)
        }

        document.body
            .classList
            .add('modal-open');

        return () => {
            document.body
                .classList
                .remove('modal-open');
        }
    }, []);

    return (
        <ModalContainer>
            <Modal className={'relative w-296 p-24'} ref={ref}>
                <Heading className={'text-left'}>
                    {taskToBeEdited?._id ? 'Edit Task' : '+ New Task'}
                </Heading>

                <Input
                    className={'mt-24 w-full'}
                    placeholder={'Task Name'}
                    type={'text'}
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />

                <Button
                    className={'mt-12 mb-9 block'}
                    onClick={handleUpdateOrCreate}
                    disabled={task.length === 0}
                >
                    {taskToBeEdited?._id ? 'Update Task' : '+ New Task'}
                </Button>
            </Modal>
        </ModalContainer>
    )
}