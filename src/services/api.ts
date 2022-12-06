import axios from "axios";

import {
    TDCX_BASE_API,
    DELETE_TASKS_API,
    GET_DASHBOARD_API,
    GET_TASKS_API,
    POST_LOGIN_API,
    POST_TASKS_API,
    PUT_TASKS_API,
} from "../constants/urls";

/**
 * Axios Instance
 */
const axiosProvider = axios.create({
    baseURL: TDCX_BASE_API,
    // timeout: 1000,
    headers: {'Accept': 'application/json'}
});


/**
 * Login API
 *
 * @param name
 * @param key
 */
export const performLogin = async ({name, key}: { name: string, key: string }) => {
    return await axiosProvider.post(POST_LOGIN_API, {
        "name": name,
        "apiKey": key,
    }).catch(error => {
        console.log(error.message)
    });
};

/**
 * Get dashboard data
 */
export const getDashboard = async () => {
    return await axiosProvider.get(GET_DASHBOARD_API, {
        headers: {
            'Authorization': sessionStorage.getItem('token')
        }
    })
        .catch(error => {
            console.log(error.message)
        });
};

/**
 * Get all tasks
 */
export const getTasks = async () => {
    return await axiosProvider.get(GET_TASKS_API, {
        headers: {
            'Authorization': sessionStorage.getItem('token')
        }
    })
        .catch(error => {
            console.log(error.message)
        });
};

/**
 * Create new task
 */
export const createTask = async (data: any) => {
    return await axiosProvider.post(POST_TASKS_API, {
        name: data.name,
        completed: data.completed
    }, {
        headers: {
            'Authorization': sessionStorage.getItem('token')
        }
    })
        .catch(error => {
            console.log(error.message)
        });
};

/**
 * Update existing task
 */
export const updateTask = async (data: any) => {
    return await axiosProvider.put(`${PUT_TASKS_API}/${data.id}`, {
        name: data.name,
        completed: data.completed
    }, {
        headers: {
            'Authorization': sessionStorage.getItem('token')
        }
    })
        .catch(error => {
            console.log(error.message)
        });
};

/**
 * Delete existing task
 */
export const deleteTask = async (data: any) => {
    return await axiosProvider.delete(`${DELETE_TASKS_API}/${data.id}`, {
        headers: {
            'Authorization': sessionStorage.getItem('token')
        }
    })
        .catch(error => {
            console.log(error.message)
        });
};