import { configureStore } from "@reduxjs/toolkit"
import MovieReducer from './MovieSlice'

const store=configureStore({
    reducer:{
        movies:MovieReducer

    }
});

export default store;