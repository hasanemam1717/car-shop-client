import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllCar: builder.query({
            query: () => ({
                url: '/cars',
                method: 'GET',

            })
            ,
            transformResponse: (response) => {
                // console.log(response.data, "Inside redux");
                return { response: response.data }
            }
        }),

    })
})

export const { useGetAllCarQuery } = productApi


// Normal api endpoints
// endpoints: (builder) => ({
//     getAllCar: builder.query({
//         query: () => ({
//             url: '/cars',
//             method: 'GET',
//         })
//     })
// })