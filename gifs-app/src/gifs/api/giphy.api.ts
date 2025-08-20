import axios from "axios";

/**
 * Giphy API client to avoid repetition of axios configuration
 */
export const giphyApi = axios.create({
    baseURL: "https://api.giphy.com/v1/gifs",
    params: {
        lang: "es",
        api_key: import.meta.env.VITE_GIPHY_API_KEY
    }
});
