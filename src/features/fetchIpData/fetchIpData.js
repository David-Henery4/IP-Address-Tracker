import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { handleInitialIp, handleSearchIp } from "./handleIpData";

const initialState = {
    ipAddress: 0,
    timezone: "",
    location: {},
    isp: "",
    lat: 0,
    long: 0,
    domain: "",
    searchQuery: "",
    isLoading: false,
}

export const getInitialIp = createAsyncThunk("ip/getInitialIp", handleInitialIp)

export const getIpFromSearch = createAsyncThunk("ip/getIpFromSearch", handleSearchIp);

const IpSlice = createSlice({
    name:"ip",
    initialState,
    reducers:{
        upDateSearchQuery: (state, {payload}) => {
            state.searchQuery = payload
        }
    },
    extraReducers: {
        [getInitialIp.fulfilled]: (state, {payload}) => {
            state.ipAddress = payload.ip
            state.isp = payload.isp
            state.lat = payload.location.lat
            state.long = payload.location.lng
            state.timezone = payload.location.timezone
            state.domain = payload.as.domain
            state.location = payload.location
        },
        [getInitialIp.pending]: (state) => {

        },
        [getInitialIp.rejected]: (state) => {

        },
        //
        [getIpFromSearch.fulfilled]: (state, {payload}) => {
            state.ipAddress = payload.ip;
            state.isp = payload.isp;
            state.lat = payload.location.lat;
            state.long = payload.location.lng;
            state.timezone = payload.location.timezone;
            state.domain = payload.as.domain;
            state.location = payload.location;
        },
        [getIpFromSearch.pending]: (state) => {

        },
        [getIpFromSearch.rejected]: (state) => {

        },
    }
})

export const {upDateSearchQuery} = IpSlice.actions

export default IpSlice.reducer
