import {configureStore} from "@reduxjs/toolkit"
import authReducer from "../features/authSlice"
import newsReducer from "../features/newsSlice"

// configure store method creates a store meanwhile combining other reducers
const store= configureStore({
    reducer:{
        auth: authReducer,
        news: newsReducer,
    },
    devTools: process.env.NODE_ENV !== 'production'
})

export default store