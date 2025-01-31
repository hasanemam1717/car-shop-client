import { baseApi } from "../../api/baseApi";


const adminApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllUser: builder.query({
            query: () => ({
                // params: Record<string, unknown>
                url: "/user",
                method: "GET",
                // params: params, // Pass query parameters here
            }),
            transformResponse: (response: any) => {
                // Transform the response if needed
                return { userData: response?.data };
            },
        }),
    }),
});

export const { useGetAllUserQuery } = adminApi;