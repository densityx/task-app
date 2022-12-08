import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit'
import taskSlice from "./redux/taskSlice";
import userReducer from './redux/userSlice'
import dashboardReducer from './redux/dashboardSlice'

// import commonReducer from './redux/commonSlice'

// convert object to string and store in sessionStorage
function saveToLocalStorage(state: any) {
    try {
        const serialisedState = JSON.stringify(state);
        sessionStorage.setItem("persistantState", serialisedState);
    } catch (e) {
        console.warn(e);
    }
}

// load string from localStarage and convert into an Object
// invalid output must be undefined
function loadFromLocalStorage() {
    try {
        const serialisedState = sessionStorage.getItem("persistantState");
        if (serialisedState === null) return undefined;
        return JSON.parse(serialisedState);
    } catch (e) {
        console.warn(e);
        return undefined;
    }
}

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