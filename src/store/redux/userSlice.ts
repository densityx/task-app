import {AppState} from "../store";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface AuthUserState {
    name: string;
    image: string;
    token: string;
}

export interface UserState {
    user: AuthUserState
}

const initialState: UserState = {
    user: {
        name: '',
        image: '',
        token: '',
    },
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<AuthUserState>) => {
            state.user = action.payload;
        },

        clearUserData: (state) => {
            state.user = {
                name: '',
                image: '',
                token: '',
            };
        }
    }
});

export const {
    setUser,
    clearUserData,
} = userSlice.actions;

export const selectAuthUser = (state: AppState) => state.user.user;

export default userSlice.reducer;
