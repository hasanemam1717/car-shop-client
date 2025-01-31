import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export type TUser = {
    email: string;
    role: string;
    id?: string;
    iat: number;
    exp: number
}

type TAuthState = {
    user: null | object;
    token: null | string;
    id: null | string
}

const initialState: TAuthState = {
    user: null,
    token: null,
    id: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            // console.log(action.payload);
            // console.log(state);
            const { user, token, id } = action.payload
            state.user = user
            state.token = token
            state.id = id
        },
        logOut: (state) => {
            console.log(state);
            state.user = null;
            state.token = null;
            state.id = null
        }
    }

})

export const { logOut, setUser } = authSlice.actions
export default authSlice
export const useCurrentToken = (state: RootState) => state.auth.token;
export const useCurrentUser = (state: RootState) => state.auth.user;
export const useCurrentUserId = (state: RootState) => state.auth.id;