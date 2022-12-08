import {Button, Card, Heading, SearchInput} from "../Common";
import {useEffect, useState} from "react";
import {deleteTask, updateTask} from "../../services/api";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {removeTask, selectHasTasks, toggleTaskComplete} from "../../store/redux/taskSlice";

interface AllTaskProps {
    handleOpenModal: (open: boolean, id?: string | undefined) => void;
    retrieveDashboardData: () => void;
}

export default function AllTasks({handleOpenModal, retrieveDashboardData}: AllTaskProps) {
    const dispatch = useAppDispatch();
    const [searchQuery, setSearchQuery] = useState('');
    const tasks = useAppSelector((state) => {
        return searchQuery
            ? state.task.tasks.filter(task => task.name.toLowerCase().includes(searchQuery.toLowerCase()))
            : state.task.tasks
    });

    const hasTasks = useAppSelector(selectHasTasks);

    const handleToggleTaskComplete = async (id: string, completed: boolean) => {
        // @ts-ignore
        let {data: {task}} = await updateTask({id, completed});

        dispatch(toggleTaskComplete(task))
    }

    const handleEditTask = async (id: string) => {
        handleOpenModal(true, id);
    }

    const handleDeleteTask = async (id: string) => {
        // @ts-ignore
        const {data: {task: {_id}}} = await deleteTask(id);

        dispatch(removeTask(_id));
    }

    useEffect(() => {
        retrieveDashboardData()
    }, [handleToggleTaskComplete, handleEditTask, handleDeleteTask]);

    return (
        <div className={'my-34'}>
            <div className={'flex flex-column md:flex-row items-center justify-between p-16 sm:p-0'}>
                <Heading>
                    Tasks
                </Heading>

                <div className={'flex flex-column md:flex-row items-center w-full sm:w-auto'}>
                    <div className={'search-input-container mt-8 sm:mt-0'}>
                        <img className={'search-icon'} src="/search-icon.png" alt="Search Icon"/>

                        <SearchInput
                            placeholder={'Search by task name'}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    <Button
                        className={'sm:ml-12 mt-8 sm:mt-0 block'}
                        onClick={() => handleOpenModal(true)}
                    >
                        + New Task
                    </Button>
                </div>
            </div>

            <Card smBorder shadow={'md'} className={'task-list mt-10 px-24'}>
                {hasTasks ? tasks.map((task) => (
                    <div
                        className={'task-item flex justify-between items-start py-24'}
                        key={task._id}
                    >
                        <div className={'flex'}>
                            <label className={'checkbox-container'}>
                                <input
                                    type={'checkbox'}
                                    checked={task?.completed}
                                    onChange={() => handleToggleTaskComplete(task?._id, !task?.completed)}
                                />
                                <span className={'checkmark'}></span>
                            </label>

                            <p className={`ml-12 my-0 ${task?.completed ? 'text-color' : 'text-primary'}`}>
                                {task?.completed ? (<s>{task?.name}</s>) : task?.name}
                            </p>
                        </div>

                        <div className={'flex items-center'}>
                            <span
                                className={'inline-flex cursor-pointer'}
                                onClick={() => handleEditTask(task?._id)}
                            >
                                <img src="/pen-icon.png" alt="Pen Icon"/>
                            </span>

                            <span
                                className={'inline-flex cursor-pointer ml-16'}
                                onClick={() => handleDeleteTask(task?._id)}
                            >
                                <img src="/trash-icon.png" alt="Trash Icon"/>
                            </span>
                        </div>
                    </div>
                )) : (
                    <div className={'py-24'}>
                        <Heading className={'text-center'}>
                            The task you are searching could not be found
                        </Heading>
                    </div>
                )}
            </Card>
        </div>
    )
}