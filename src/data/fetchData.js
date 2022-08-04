import axios from "axios";

export const baseFetch = axios.create({
  baseURL: "https://geo.ipify.org/api/v2",
});

const url = "https://geo.ipify.org/api/v2/country,city?apiKey=at_rJkaaX33BUvyWh1k4ruwfkFP3NR6K&ipAddress=8.8.8.8";

// // will be hidden in ENV
const APIKEY = "apiKey=at_rJkaaX33BUvyWh1k4ruwfkFP3NR6K";


// baseUrl will need: "v2/(queries)"
// GEO-APIKEY = at_rJkaaX33BUvyWh1k4ruwfkFP3NR6K
// GEO-URL-EXAMPLE = https://geo.ipify.org/api/v2/country,city?apiKey=at_rJkaaX33BUvyWh1k4ruwfkFP3NR6K&ipAddress=8.8.8.8

// &domain=skysports.com



// const requestData = () => {
//     const getData = async () => {
//         try {
//             const res = await baseFetch(
//               `country,city?${APIKEY}&domain=amazon.com&ipAddress=amazon.com`
//             );
//             const data = res.data
//             console.log(data)
//         } catch (error) {
//             console.error(error.response)
//         }
//     }
//     getData()
// }

// requestData()