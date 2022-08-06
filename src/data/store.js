import { configureStore } from "@reduxjs/toolkit";
import IpReducer from "../features/fetchIpData/fetchIpData";

export const store = configureStore({
  reducer: {
    ip: IpReducer,
  },
});
