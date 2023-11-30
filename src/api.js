import axios from "axios";

async function api(city){
    const geoCordResponse = await axios.get("https://api.openweathermap.org/geo/1.0/direct", {
        params:{
            appid: "4eecb262b3d1aadd5179c417aea6ce95",
            q:city
        }
      
    })
    const response = await axios.get("https://api.openweathermap.org/data/2.5/forecast", {
        params:{
            appid: "4eecb262b3d1aadd5179c417aea6ce95",
            lat:geoCordResponse.data[0].lat,
            lon:geoCordResponse.data[0].lon,
            cnt:'56',
            units:'metric'
        }
      
    })
    return response.data.list
}
export default api;