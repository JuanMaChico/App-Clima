import { createSlice } from "@reduxjs/toolkit";

export const weatherSlice = createSlice({
    name: "weather",
    initialState:{
        weather: null
    },
    reducers:{
        updateWeather: ( state, action ) => {
            //actualizar el clima...
            state.weather = {
                ...state.weather,
                ...action.payload
            }
        }
    }
});

export default weatherSlice.reducer;
export const { updateWeather }  = weatherSlice.actions;