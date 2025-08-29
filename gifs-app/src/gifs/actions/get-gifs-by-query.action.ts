import type { GiphyResponse } from "../interfaces/giphy.response";
import type { Gif } from "../interfaces/giph.interface";
import { giphyApi } from "../api/giphy.api";


export const getGifByQuery = async (query: string): Promise<Gif[]> => {

    try {
        if (!query) return [];

        const response = await giphyApi.get<GiphyResponse>(`/search`, {
            params: {
                q: query,
                limit: 10
            }
        });

        /** Map Giphy response to Gif array */
        return response.data.data.map((gif) => ({
            id: gif.id,
            title: gif.title,
            url: gif.images.original.url,
            width: Number(gif.images.original.width),
            height: Number(gif.images.original.height),
        }));
    } catch (error) {
        console.error("Error fetching gifs:", error);
        return [];
    }

}