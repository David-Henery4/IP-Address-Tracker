import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseFetch } from "../../data/fetchData";

// will be hidden in ENV
const APIKEY = "apiKey=at_rJkaaX33BUvyWh1k4ruwfkFP3NR6K";

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

export const getInitialIp = createAsyncThunk("ip/getInitialIp", async () => {
    try {
        const res = await baseFetch(`country,city?${APIKEY}`)
        const data = res.data
        // console.log(data)
        return data
    } catch (error) {
        console.error(error.response)
    }
})

export const getIpFromSearch = createAsyncThunk("ip/getIpFromSearch", async (searchQuery) => {
    try {
        const res = await baseFetch(
            `country,city?${APIKEY}&domain=${searchQuery}&ipAddress=${searchQuery}`);
        const data = res.data
        return data
    } catch (error) {
        console.error(error.response)
    }
})

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
            console.log(payload)
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
