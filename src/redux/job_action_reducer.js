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
            console.log("state after setting", state);
            const data = await instance.post("",{
                limit: 0,
                offset: state.offset
            })
            state.offset = state.offset+10;
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
                state.status = 'loading';
                state.error = null;
                console.log("setSlokChapterLanguage pending")
            })
            
            .addCase(fetchData.rejected,(state,action) => {
                state.status = 'rejected';
                state.error = action.error.message;
                console.log("fetchData rejected", action);
            })
            
            .addCase(fetchData.fulfilled,(state,action) => {
                state.status = 'success';
                state.error = null;
                console.log("state",state);
            })
    }
})

export default jobSlice.reducer;