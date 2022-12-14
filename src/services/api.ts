import axios, {AxiosRequestConfig} from "axios";

/**
 * Configure custom axios Instance
 */
const axiosInstance = axios.create({
    baseURL: `https://dev-dl.tdcx.com:3092`,
    headers: {
        'Accept': 'application/json'
    }
});

/**
 * Interceptors the axios request
 */
axiosInstance.interceptors.request.use((requestConfig: AxiosRequestConfig) => {
    if (sessionStorage.getItem('persistantState')) {
        // @ts-ignore
        const {user: {user: {token}}} = JSON.parse(sessionStorage.getItem('persistantState'));

        // @ts-ignore
        requestConfig.headers.Authorization = token;
    }

    return requestConfig;
});

/**
 * Login API
 *
 * @param name
 * @param key
 */
export const performLogin = async ({name, key}: { name: string, key: string }) => {
    return await axiosInstance.post(`/login`, {
        "name": name,
        "apiKey": key,
    }).catch(error => {
        console.log(error.message)
    });
};

/**
 * Get dashboard data from API
 */
export const getDashboard = async () => {
    return await axiosInstance.get(`/dashboard`)
        .catch(error => {
            console.log(error.message)
        });
};

/**
 * Get all tasks from API
 */
export const getTasks = async () => {
    return await axiosInstance.get(`/tasks`)
        .catch(error => {
            console.log(error.message)
        });
};

/**
 * Create new task with API
 *
 * @param data
 */
export const createTask = async (data: any) => {
    return await axiosInstance.post(`/tasks`, {
        name: data.name,
        completed: data.completed
    })
        .catch(error => {
            console.log(error.message)
        });
};

/**
 * Update existing task with API
 *
 * @param data
 */
export const updateTask = async (data: any) => {
    return await axiosInstance.put(`/tasks/${data.id}`, {
        name: data.name,
        completed: data.completed
    })
        .catch(error => {
            console.log(error.message)
        });
};

/**
 * Delete existing task from API
 *
 * @param id
 */
export const deleteTask = async (id: string) => {
    return await axiosInstance.delete(`/tasks/${id}`)
        .catch(error => {
            console.log(error.message)
        });
};