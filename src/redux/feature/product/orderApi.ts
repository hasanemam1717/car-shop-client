import { baseApi } from "../../api/baseApi";

const orderApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getRevenues: builder.query({
            query: () => ({
                url: "/orders/revenue",
                method: "GET",
            }),
            transformResponse: (response: any) => {
                // Transform the response if needed
                return { data: response.data };
            },
        }),
        getOrders: builder.query({
            query: () => ({
                url: "/orders",
                method: "GET"
            }),
        }),
        createOrder: builder.mutation({
            query: (data) => ({
                url: '/orders',
                method: 'POST',
                body: data,
            }),
        }),
        verifyOrder: builder.query({
            query: (order_id) => ({
                url: "/orders/verify",
                params: { order_id },
                method: "GET",
            }),
        }),
    }),
});

export const { useGetRevenuesQuery, useCreateOrderMutation, useVerifyOrderQuery, useGetOrdersQuery } = orderApi;