import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TaskState} from "./taskSlice";
import {AppState} from "../store";
import {userSlice} from "./userSlice";

export interface DashboardState {
    stats: {
        tasksCompleted: number;
        totalTasks: number;
        latestTasks: TaskState[];
    }
}

const initialState: DashboardState = {
    stats: {
        tasksCompleted: 0,
        totalTasks: 0,
        latestTasks: []
    }
};

export const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        setDashboardStats: (state, action: PayloadAction<DashboardState>) => {
            state.stats = action.payload.stats;
        },

        clearDashboardData: (state) => {
            state.stats = {
                tasksCompleted: 0,
                totalTasks: 0,
                latestTasks: []
            };
        }
    }
});

export const {
    setDashboardStats,
    clearDashboardData
} = dashboardSlice.actions;

export const selectDashboardStats = (state: AppState) => state.dashboard.stats;

export default dashboardSlice.reducer;