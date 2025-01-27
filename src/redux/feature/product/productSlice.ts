import { createSlice } from "@reduxjs/toolkit";

type TProduct = {
    name: string
    brand: string
    model: string
    year: number
    price: number
    category: string
    description: string
    quantity: number
    image: string
    inStock: boolean
}

const initialState: TProduct = {
    user: null,
    token: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            const { user, token } = action.payload
            state.user = user
            state.token = token
        },
        logOut: (state) => {
            state.user = null;
            state.token = null
        }
    }

})

export const { logOut, setUser } = authSlice.actions
export default authSlice