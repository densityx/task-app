import {AppState} from "../store";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface TaskState {
    _id: string;
    name: string;
    completed: boolean;
}

export interface TaskListState {
    tasks: TaskState[];
}

const initialState: TaskListState = {
    tasks: [],
};

export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        toggleTaskComplete: (state, action: PayloadAction<TaskState>) => {
            state.tasks.map(task => {
                if (task._id === action.payload._id) {
                    task.completed = action.payload.completed
                }

                return task;
            });
        },

        addOrUpdateTask: (state, action: PayloadAction<{ type: string, task: TaskState }>) => {
            if (action.payload.type === 'create') {
                state.tasks.push(action.payload.task)
            } else {
                state.tasks.map(task => {
                    if (task._id === action.payload.task._id) {
                        task.name = action.payload.task.name
                    }

                    return task;
                });
            }
        },

        addTasks: (state, action: PayloadAction<TaskState[]>) => {
            state.tasks = action.payload;
        },

        removeTask: (state, action: PayloadAction<string>) => {
            state.tasks = state.tasks.filter(task => task._id !== action.payload)
        },

        clearTasksData: (state) => {
            state.tasks = [];
        }
    },
});

export const {
    toggleTaskComplete,
    addOrUpdateTask,
    addTasks,
    removeTask,
    clearTasksData
} = taskSlice.actions;

export const selectHasTasks = (state: AppState) => state.task.tasks.length > 0;

export default taskSlice.reducer;