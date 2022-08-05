import { baseFetch } from "../../data/fetchData";
const KEY = process.env.REACT_APP_IP_API_KEY;

export const handleInitialIp = async (_, { rejectWithValue }) => {
  try {
    const res = await baseFetch(`country,city?${KEY}`);
    const data = res.data;
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
};

export const handleSearchIp = async (searchQuery, { rejectWithValue }) => {
  try {
    const res = await baseFetch(
      `country,city?${KEY}&domain=${searchQuery}&ipAddress=${searchQuery}`
    );
    const data = res.data;
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
};
