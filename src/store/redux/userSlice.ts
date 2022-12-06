// import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
// import {AppState} from '../store';
// import axios from "axios";

import {AppState} from "../store";

export interface AuthUserState {
    name: string;
    image: string;
    token: string;
}

// export interface UsersState {
//     id: number;
//     first_name: string;
//     last_name: string;
//     avatar: string;
//     email: string;
// }
//
//
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface UserState {
    user: AuthUserState
//     authUser: AuthUserState;
//     filter: {
//         nameStartsWith: string;
//         nameEndsWith: string;
//         page: number;
//     },
//     users: UsersState[];
}

const initialState: UserState = {
    user: {
        name: '',
        image: '',
        token: '',
    },
//     authUser: {
//         name: '',
//         picture: '',
//         email: '',
//     },
//     filter: {
//         nameStartsWith: 'G',
//         nameEndsWith: 'W',
//         page: 1,
//     },
//     users: [],
};

// export const fetchAllUsers = createAsyncThunk(
//     'user/fetchAll',
//     async (filter: { nameStartsWith: string, nameEndsWith: string, page: number }) => {
//         try {
//             const {data: {data: users}} = await axios.get(`https://reqres.in/api/users?page=${filter.page}`);
//
//             return users?.filter((user: { first_name: string, last_name: string }) => {
//                 if (!filter.nameStartsWith || !filter.nameEndsWith) {
//                     return user;
//                 }
//
//                 return (user.first_name[0] === filter.nameStartsWith || user.last_name[0] === filter.nameEndsWith);
//             });
//         } catch (e) {
//             if (process.env.NEXT_PUBLIC_ENV === 'development') {
//                 console.log(e.message, 'The\'s an error while requesting the API');
//             }
//         }
//     }
// );
//
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<AuthUserState>) => {
            state.user = action.payload;
            sessionStorage.setItem('token', action.payload.token);
        }
    }
//         addAuthUser: (state, action: PayloadAction<AuthUserState>) => {
//             state.authUser = action.payload;
//         },
//         resetFilter: (state) => {
//             state.filter = {
//                 page: state.filter.page,
//                 nameStartsWith: '',
//                 nameEndsWith: '',
//             }
//         },
//         updateNameStartsWith: (state, action) => {
//             state.filter.nameStartsWith = action.payload
//         },
//         updateNameEndsWith: (state, action) => {
//             state.filter.nameEndsWith = action.payload
//         },
//         navigatePagination: (state, action) => {
//             state.filter.page = action.payload
//         },
//         logoutUser: (state) => {
//             /** logout google oauth 2 */
//             googleLogout();
//
//             /** clear and reset state */
//             window.localStorage.removeItem('credential');
//
//             state.authUser = {
//                 name: "",
//                 picture: "",
//                 email: "",
//             }
//         }
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(fetchAllUsers.fulfilled, (state, action) => {
//                 state.users = action.payload;
//             })
//     },
});

export const {
    setUser,
} = userSlice.actions;

export const selectAuthUser = (state: AppState) => state.user.user;

export default userSlice.reducer;
