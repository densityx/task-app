import {describe, expect, it} from "vitest";
import axios from "axios";
import * as https from "https";

/**
 * Default config for testing suite
 */
const apiKey = '038fde7691289d58';
const authCode = 'add1a5935d3698742c8e83ca';
let taskId = '';

const httpsAgent = new https.Agent({
    rejectUnauthorized: false
})

const axiosInstance = axios.create({
    baseURL: `https://dev-dl.tdcx.com:3092`,
    headers: {
        'Accept': 'application/json',
        'Authorization': authCode,
    },
    httpsAgent
});

describe('test api resource', () => {
    it('login api return status code 200', async () => {
        const {status} = await axiosInstance.post(`/login`, {
            "name": 'John Doe',
            "apiKey": apiKey,
        });

        expect(status).toBe(200)
    });

    it('getting dashboard api return status code 200', async () => {
        const {status} = await axiosInstance.get(`/dashboard`);

        expect(status).toBe(200)
    });

    it('getting task api return status code 200', async () => {
        const {status} = await axiosInstance.get(`/tasks`);

        expect(status).toBe(200)
    });

    it('creating new task api return status code 200', async () => {
        const {data, status} = await axiosInstance.post(`/tasks`, {
            name: 'Created from test',
            completed: false
        });

        taskId = data.task._id;

        expect(status).toBe(200)
    });

    it('updating task api return status code 200', async () => {
        const {status} = await axiosInstance.put(`/tasks/${taskId}`, {
            name: 'Updated from test',
            completed: false
        });

        expect(status).toBe(200)
    });

    it('deleting task api return status code 200', async () => {
        const {status} = await axiosInstance.delete(`/tasks/${taskId}`);

        expect(status).toBe(200);
    });
});