import axios from "axios";

export default axios.create({
    baseURL: "https://cors-anywhere.herokuapp.com/airnowapi.org/",
    responseType: "json"
});