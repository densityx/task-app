import {Container, Main,} from "../components/Common";
import {useCallback, useEffect, useState} from "react";
import {getDashboard, getTasks} from "../services/api";
import NoTask from "../components/tasks/NoTask";
import CreateTask from "../components/tasks/CreateTask";
import {addTasks, selectHasTasks} from "../store/redux/taskSlice";
import {useAppDispatch, useAppSelector} from "../store/hooks";
import Skeleton from "../components/Skeleton";
import {setDashboardStats} from "../store/redux/dashboardSlice";
import {selectAuthUser} from "../store/redux/userSlice";
import {useNavigate} from "react-router-dom";
import DashboardStats from "../components/DashboardStats";
import AllTasks from "../components/tasks/AllTasks";
import Header from "../components/Header";

export interface ModalState {
    open: boolean;
    id?: string | undefined;
}

export default function Dashboard() {
    const dispatch = useAppDispatch();
    const hasTasks = useAppSelector(selectHasTasks);
    const [loading, setLoading] = useState(false);
    const authUser = useAppSelector(selectAuthUser);
    let navigate = useNavigate();

    const [modal, setModal] = useState<ModalState>({
        open: false,
        id: '',
    });

    const retrieveDashboardData = useCallback(async () => {
        // @ts-ignore
        let {data: {latestTasks, tasksCompleted, totalTasks}} = await getDashboard();

        dispatch(setDashboardStats({
            stats: {
                latestTasks,
                tasksCompleted,
                totalTasks,
            }
        }))
    }, [authUser]);

    const retrieveTasksData = useCallback(async () => {
        // @ts-ignore
        const {data: {tasks}} = await getTasks();

        dispatch(addTasks(tasks))
    }, [authUser]);

    useEffect(() => {
        setLoading(true);

        Promise
            .all([retrieveDashboardData(), retrieveTasksData()])
            .then(() => setLoading(false))
    }, [retrieveDashboardData, retrieveTasksData]);

    useEffect(() => {
        document.title = 'All Tasks | Task App';

        if (authUser?.token === '') {
            navigate('/');
        }
    }, [])

    return (
        <>
            <Header/>

            {modal.open && (
                <CreateTask
                    modal={modal}
                    handleOpenModal={(open: boolean) => setModal({open})}
                />
            )}

            <Main>
                {loading ? (<Skeleton/>) : (
                    hasTasks ? (
                        <Container>
                            <DashboardStats/>

                            <AllTasks
                                handleOpenModal={(open: boolean, id?: string | undefined) => setModal({open, id})}
                                retrieveDashboardData={retrieveDashboardData}
                            />
                        </Container>
                    ) : (
                        <NoTask handleOpenModal={(open: boolean) => setModal({open})}/>
                    )
                )}
            </Main>
        </>
    )
}