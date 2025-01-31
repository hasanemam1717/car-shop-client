import { baseApi } from "../../api/baseApi";

const orderApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getDetails: builder.query({
            query: () => ({
                url: "/orders/details",
                method: "GET",
            }),
            transformResponse: (response: any) => {
                // Transform the response if needed
                return { data: response.data };
            },
        }),
        createOrder: builder.mutation({
            query: (data) => ({
                url: '/orders',
                method: 'POST',
                body: data,
            }),
        }),
    }),
});

export const { useGetDetailsQuery, useCreateOrderMutation } = orderApi;