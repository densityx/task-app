import taskSlice from "./redux/taskSlice";
import userReducer from './redux/userSlice'
import dashboardReducer from './redux/dashboardSlice'
import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit'
import {loadFromLocalStorage, saveToLocalStorage} from "../services/localStorage";

export function makeStore() {
    return configureStore({
        reducer: {
            task: taskSlice,
            user: userReducer,
            dashboard: dashboardReducer,
        },
        preloadedState: loadFromLocalStorage()
    })
}

const store = makeStore()

store.subscribe(() => saveToLocalStorage(store.getState()));

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action<string>>

export default store