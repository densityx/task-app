import './normalize.css'
import './app.css'

// import './App.css'
// import App from './App'

import React, {useCallback, useEffect} from 'react'
import ReactDOM from 'react-dom/client'
import {Provider, useSelector} from 'react-redux'
import store from './store/store'

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import PageNotFound from "./pages/PageNotFound";
import {performLogin} from "./services/api";
import {useAppDispatch, useAppSelector} from "./store/hooks";
import {selectAuthUser, setUser} from "./store/redux/userSlice";
import {Card, Container, LoadingBar} from "./components/Common";

const Api = () => {
    // const dispatch = useAppDispatch();
    //
    // const loginData = useCallback(async () => {
    //     let {data} = await performLogin({
    //         name: 'John Doe',
    //         key: '038fde7691289d58'
    //     });
    //
    //     dispatch(setUser({
    //         name: data.token.name,
    //         token: data.token.token,
    //         image: data.image,
    //     }));
    // }, []);
    //
    // useEffect(() => {
    //     loginData();
    // }, [loginData]);
    //
    // const user = useAppSelector(selectAuthUser);
    // console.log('users: ', user)

    return (
        <Container>
            Hello World
        </Container>
    )
}

const router = createBrowserRouter([
    // {path: 'api', element: <Api/>},
    {path: '/', element: <Login/>},
    {path: '/dashboard', element: <Dashboard/>},
    {path: '*', element: <PageNotFound/>},
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    </React.StrictMode>,
)
