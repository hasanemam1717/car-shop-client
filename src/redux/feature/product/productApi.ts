import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllCar: builder.query({
            query: (params: Record<string, unknown>) => ({
                url: "/cars",
                method: "GET",
                params: params, // Pass query parameters here
            }),
            transformResponse: (response: any) => {
                // Transform the response if needed
                return { response: response.data };
            },
        }),
    }),
});

export const { useGetAllCarQuery } = productApi;