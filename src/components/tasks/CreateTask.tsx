import {Button, Heading, Input, Modal, ModalContainer} from "../Common";
import {useCallback, useEffect, useState} from "react";
import {createTask} from "../../services/api";

export default function CreateTask({modalOpen, handleOpenModal}) {
    const [task, setTask] = useState('');
    const [modal, setModal] = useState(false);

    useEffect(() => {
        setModal(modalOpen)
    }, [modalOpen]);

    const handleCreateTask = useCallback(async () => {
        console.log(task, 'task name');

        let {data, status} = await createTask({
            name: task,
            completed: false,
        });
        
        if (status === 200) {
            setTask('');

            setModal(false);
        }
    }, []);

    return (
        modal && <ModalContainer>
            <Modal className={'relative w-296 p-24'}>
                <Heading className={'text-left'}>
                    + New Task
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
                    onClick={handleCreateTask}
                >
                    + New Task
                </Button>
            </Modal>
        </ModalContainer>
    )
}