import {useNavigate} from "react-router-dom";
import {Container, Navbar, NavbarMenu} from "./Common";
import {useAppDispatch, useAppSelector} from "../store/hooks";
import {clearUserData, selectAuthUser} from "../store/redux/userSlice";
import {clearTasksData} from "../store/redux/taskSlice";
import {clearDashboardData} from "../store/redux/dashboardSlice";

export default function Header() {
    const navigate = useNavigate();
    const authUser = useAppSelector(selectAuthUser);

    const handleLogout = () => {
        navigate('/logout');
    };

    return (
        <Navbar>
            <Container className={'flex justify-between items-center'}>
                <div className={'flex items-center'}>
                    <div className={'profile-picture-container'}>
                        <img
                            src={`https://dev-dl.tdcx.com:3092/${authUser?.image}`}
                            className={'profile-picture'}
                            alt={authUser?.name + ' profile picture'}
                        />
                    </div>

                    <NavbarMenu className={'ml-16'}>
                        {authUser?.name}
                    </NavbarMenu>
                </div>

                <NavbarMenu className={'cursor-pointer'} onClick={handleLogout}>
                    Logout
                </NavbarMenu>
            </Container>
        </Navbar>
    )
}