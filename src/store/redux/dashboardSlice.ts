import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TaskState} from "./taskSlice";
import {AppState} from "../store";
import {userSlice} from "./userSlice";

export interface DashboardState {
    tasks: {
        tasksCompleted: number;
        totalTasks: number;
        latestTasks: TaskState[];
    }
}

const initialState: DashboardState = {
    tasks: {
        tasksCompleted: 10,
        totalTasks: 19,
        latestTasks: [
            {
                name: "Refactor something",
                completed: false
            }
        ]
    }
};

export const dashboardSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        setDashboardData: (state, action: PayloadAction<DashboardState>) => {
            state.tasks = action.payload.tasks
        },
    }
});

export const {
    setDashboardData,
} = dashboardSlice.actions;

export const selectDashboardData = (state: AppState) => state.dashboard.tasks;

export default dashboardSlice.reducer;