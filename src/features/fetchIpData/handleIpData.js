import { baseFetch } from "../../data/fetchData"
const KEY = process.env.REACT_APP_IP_API_KEY;

export const handleInitialIp = async () => {
    try {
        const res = await baseFetch(`country,city?${KEY}`)
        const data = res.data
        // console.log(data)
        return data
    } catch (error) {
        console.error(error.response)
    }
}

export const handleSearchIp = async (searchQuery) => {
  try {
    const res = await baseFetch(
      `country,city?${KEY}&domain=${searchQuery}&ipAddress=${searchQuery}`
    );
    const data = res.data;
    return data;
  } catch (error) {
    console.error(error.response);
  }
};

