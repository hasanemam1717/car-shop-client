import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authSlice from './feature/auth/authSlice'
import { baseApi } from './api/baseApi'
import storage from 'redux-persist/lib/storage'

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import { cartSlice } from './feature/product/productCartSlice'



// new
export const rootReducer = combineReducers({
    [baseApi.reducerPath]: baseApi.reducer,
    auth: authSlice.reducer,
    cart: cartSlice.reducer,
});
const persistConfig = {
    key: "root",
    storage
}
//   end

const persistedAuthReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({

    reducer: persistedAuthReducer,
    // {
    //     [baseApi.reducerPath]: baseApi.reducer,
    //     auth: persistedAuthReducer
    // },
    middleware: getDefaultMiddlewares => getDefaultMiddlewares({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }).concat(baseApi.middleware)

})
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const persistor = persistStore(store)

