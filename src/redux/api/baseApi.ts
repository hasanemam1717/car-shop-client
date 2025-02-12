import {
    BaseQueryApi,
    BaseQueryFn,
    DefinitionType,
    FetchArgs,
    createApi,
    fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { RootState } from "../store";
import { logOut, setUser } from "../feature/auth/authSlice";

const baseQuery = fetchBaseQuery(
    {
        baseUrl: 'https://car-store-backend-six.vercel.app/api',
        credentials: 'include',
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).auth.token
            if (token) {
                headers.set('authorization', `${token}`)
            }
            return headers
        }
    }
)
const baseQueryWithRefreshToken: BaseQueryFn<
    FetchArgs,
    BaseQueryApi,
    DefinitionType
> = async (args: any, api, extraOptions): Promise<any> => {
    let result = await baseQuery(args, api, extraOptions)
    if (result?.error?.status === 401) {
        const res = await fetch('https://car-store-backend-six.vercel.app/api/auth/refresh-token', { method: "POST", credentials: "include" })
        const data = await res.json()
        if (data?.data?.accessToken) {
            const user = (api.getState() as RootState).auth.user
            // console.log(data, "Refresh");
            api.dispatch(setUser({ user, token: data?.data?.accessToken }))
        } else {
            api.dispatch(logOut())
        }


        result = await baseQuery(args, api, extraOptions)

    }
    return result
}
export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: baseQueryWithRefreshToken,
    endpoints: () => ({})
})