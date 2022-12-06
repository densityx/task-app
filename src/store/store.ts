import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit'
import taskSlice from "./redux/taskSlice";
import userReducer from './redux/userSlice'
import dashboardReducer from './redux/dashboardSlice'

// import commonReducer from './redux/commonSlice'

export function makeStore() {
    return configureStore({
        reducer: {
            task: taskSlice,
            user: userReducer,
            dashboard: dashboardReducer,
        },
    })
}

const store = makeStore()

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action<string>>

export default store