import Header from "../components/Header";
import {
    Button,
    Card,
    Container,
    Grid,
    Heading,
    Input,
    Main,
    Modal,
    ModalContainer,
    Pie,
    SearchInput
} from "../components/Common";
import {useCallback, useEffect, useState} from "react";
import {getDashboard, getTasks} from "../services/api";
import NoTask from "../components/tasks/NoTask";
import CreateTask from "../components/tasks/CreateTask";
import DashboardStats from "../components/DashboardStats";
import AllTasks from "../components/tasks/AllTasks";

export default function Dashboard() {
    const [modal, setModal] = useState(false);
    const [dashboard, setDashboard] = useState({
        latestTasks: [],
        tasksCompleted: 0,
        totalTasks: 0,
    });

    const retrieveData = useCallback(async () => {
        /** get dashboard data */
        let {data} = await getDashboard();
        setDashboard((prev) => ({
            latestTasks: data.latestTasks,
            tasksCompleted: data.tasksCompleted,
            totalTasks: data.totalTasks,
        }))
    }, []);

    useEffect(() => {
        retrieveData();
    }, [retrieveData])

    return (
        <>
            <Header/>

            <Main>
                <CreateTask
                    modalOpen={modal}
                    handleOpenModal={() => setModal(false)}
                />

                {dashboard.totalTasks ? (
                    <Container>
                        <DashboardStats stats={dashboard}/>

                        <AllTasks
                            handleOpenModal={() => setModal(!modal)}
                        />
                    </Container>
                ) : (
                    <NoTask
                        handleOpenModal={() => setModal(!modal)}
                    />
                )}
            </Main>
        </>
    )
}