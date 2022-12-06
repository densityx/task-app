import {Button, Card, Heading, SearchInput} from "../Common";
import {useCallback, useEffect, useState} from "react";
import {deleteTask, getDashboard, getTasks} from "../../services/api";
import Skeleton from "../Skeleton";

export default function AllTasks({handleOpenModal}) {
    const [loading, setLoading] = useState(false);
    const [tasks, setTasks] = useState([]);

    const retrieveData = useCallback(async () => {
        setLoading(true);

        /** get tasks data */
        const {data: {tasks}, status} = await getTasks();
        setTasks(tasks);

        console.log('tasks:', tasks);
        setLoading(false);
    }, []);

    useEffect(() => {
        retrieveData();
    }, [retrieveData]);

    const handleMarkTaskComplete = () => {

    }

    const handleEditTask = () => {

    }

    const handleDeleteTask = async (id) => {
        await deleteTask({id});
    }

    return (
        <div className={'mt-34'}>
            <div className={'flex flex-column md:flex-row items-center justify-between p-16 sm:p-0'}>
                <Heading>
                    Tasks
                </Heading>

                <div className={'flex flex-column md:flex-row items-center w-full sm:w-auto'}>
                    <div className={'search-input-container mt-8 sm:mt-0'}>
                        <img className={'search-icon'} src="/src/assets/search-icon.png" alt="Search Icon"/>

                        <SearchInput placeholder={'Search by task name'}/>
                    </div>

                    <Button
                        className={'sm:ml-12 mt-8 sm:mt-0 block'}
                        onClick={handleOpenModal}
                    >
                        + New Task
                    </Button>
                </div>
            </div>

            {loading ? (<Skeleton className={'mt-10'}/>) : (
                <Card smBorder shadow={'md'} className={'task-list mt-10 px-24'}>
                    {tasks && tasks.map((task, index) => (
                        <div className={'task-item flex justify-between items-start py-24'} key={task._id}>
                            <div className={'flex'}>
                                <label className={'checkbox-container'}>
                                    <input
                                        type={'checkbox'}
                                        checked={task?.completed}
                                        onChange={() => {
                                        }}
                                    />
                                    <span className={'checkmark'}></span>
                                </label>

                                <p className={`ml-12 my-0 ${task?.completed ? 'text-color' : 'text-primary'}`}>
                                    {index === 2 ? (<s>{task?.name}</s>) : task?.name}
                                </p>
                            </div>

                            <div className={'flex items-center'}>
                                <span className={'inline-flex'}>
                                    <img src="/src/assets/pen-icon.png" alt="Pen Icon"/>
                                </span>

                                <span
                                    className={'inline-flex ml-16'}
                                    onClick={() => handleDeleteTask(task._id)}
                                >
                                    <img src="/src/assets/trash-icon.png" alt="Trash Icon"/>
                                </span>
                            </div>
                        </div>
                    ))}
                </Card>
            )}
        </div>
    )
}