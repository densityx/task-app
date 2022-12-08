import './styles/normalize.css'
import './styles/app.css'

import React from 'react'
import store from './store/store'
import Login from "./pages/Login";
import {Provider} from 'react-redux'
import ReactDOM from 'react-dom/client'
import Dashboard from "./pages/Dashboard";
import PageNotFound from "./pages/PageNotFound";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Logout from "./pages/Logout";

const router = createBrowserRouter([
    {path: '/', element: <Login/>},
    {path: '/dashboard', element: <Dashboard/>},
    {path: '/logout', element: <Logout/>},
    {path: '*', element: <PageNotFound/>},
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    </React.StrictMode>,
)
