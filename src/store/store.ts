import {combineReducers, configureStore} from "@reduxjs/toolkit"
import authReducer from './authSlice'
import imageReducer from './imageSlice'
import { loadingReduser } from "./loading/loading.reducers"

export const reducers = combineReducers({
    auth: authReducer,
    loading: loadingReduser,
    images: imageReducer,
})

export const store = configureStore({
    reducer:reducers
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch