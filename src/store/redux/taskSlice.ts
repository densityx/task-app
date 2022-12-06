import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface TaskState {
    name: string;
    completed: boolean;
}

export interface TaskListState {
    tasks: TaskState[]
}

const initialState: TaskListState = {
    tasks: []
};

export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTasks: (state, action: PayloadAction<TaskState>) => {
            state.tasks.push(action.payload)
        },
    }
});

export default taskSlice.reducer;