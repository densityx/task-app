import {useEffect} from "react";
import {useAppDispatch} from "../store/hooks";
import {clearDashboardData} from "../store/redux/dashboardSlice";
import {clearUserData} from "../store/redux/userSlice";
import {clearTasksData} from "../store/redux/taskSlice";
import {useNavigate} from "react-router-dom";

export default function Logout() {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(clearUserData());
        dispatch(clearTasksData());
        dispatch(clearDashboardData());
        sessionStorage.clear();

        setTimeout(() => {
            navigate('/');
        }, 500)
    }, []);

    return <></>
}