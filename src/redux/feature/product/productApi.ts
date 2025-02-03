import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllCar: builder.query({
            query: (params: Record<string, unknown> = {}) => ({ // Default to an empty object
                url: "/cars",
                method: "GET",
                params: params, // Ensures it always receives an object
            }),
            transformResponse: (response: any) => {
                return { response: response.data };
            },
        }),
        createCar: builder.mutation({
            query: (data) => ({
                url: "/cars",
                method: "POST",
                body: data,
            }),
        }),
    }),
});

export const { useGetAllCarQuery, useCreateCarMutation } = productApi;
