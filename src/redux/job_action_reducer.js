import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { instance } from "../configs/axiosConfig";

// infinite scroll till < response.totalcount

const initialState = {
    status: 'idle',
    error : null,
    data:[],
    offset: 0,
}



export const fetchData = createAsyncThunk(
    'data/fetchData',
    async (payload, thunkAPI) => {
        try {
            const newState = thunkAPI.getState().job_action_reducer;
            const state = {...newState}
            state.offset = state.offset+10;
            console.log("state after setting", state);
            data = null;
            return [data, state];
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }

)

const jobSlice = createSlice({
    name: "jobSlice",
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending,(state) => {

            })

            .addCase(fetchData.rejected,(state) => {

            })

            .addCase(fetchData.fulfilled,(state) => {

            })
    }
})

export default jobSlice.reducer;