/**
 * Dependencias
 */
import { configureStore } from "@reduxjs/toolkit"
import weatherSlice from "./slices/index";


export default configureStore({
    reducer:{
        weather: weatherSlice
    }
});

