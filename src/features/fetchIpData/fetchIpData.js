import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    ipAddress: 0,
    timezone: "",
    location: "",
    isp: "",
    lat: 0,
    long: 0,
    domain: "",
    searchQuery: "",
}

const IpSlice = createSlice({
    name:"ip",
    initialState,
    reducers:{
        upDateSearchQuery: (state, {payload}) => {
            state.searchQuery = payload
        }
    },
    extraReducers: {
        
    }
})

export const {upDateSearchQuery} = IpSlice.actions

export default IpSlice.reducer
