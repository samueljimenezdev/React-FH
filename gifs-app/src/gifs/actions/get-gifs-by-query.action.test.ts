import { beforeEach, describe, expect, test, vi } from "vitest";
import { getGifByQuery } from "./get-gifs-by-query.action";
import AxiosMockAdapter from 'axios-mock-adapter'
import { giphyApi } from "../api/giphy.api";
import { giphyResponseData } from "../../../tests/mocks/giphy.response.data";



describe("getGifByQuery", () => {

    let mock = new AxiosMockAdapter(giphyApi);

    beforeEach(() => {
        mock = new AxiosMockAdapter(giphyApi);
    });

    // test("should return a list of gifs native", async () => {

    //     const gifs = await getGifByQuery("dogs");

    //     expect(gifs.length).toBe(10);

    //     expect(gifs[0]).toStrictEqual({
    //         id: expect.any(String),
    //         title: expect.any(String),
    //         url: expect.any(String),
    //         height: expect.any(Number),
    //         width: expect.any(Number),
    //     });
    // });


    test("should return a list of gifs", async () => {

        mock.onGet("/search").reply(200, giphyResponseData)
        const gifs = await getGifByQuery("saitama");
        expect(gifs.length).toBe(25);

        gifs.forEach(gif => {
            expect(gif).toStrictEqual({
                id: expect.any(String),
                title: expect.any(String),
                url: expect.any(String),
                height: expect.any(Number),
                width: expect.any(Number),
            });
        });


    });

    test("should return an empty list of gifs if query is empty", async () => {

        mock.restore();
        const gifs = await getGifByQuery("");
        expect(gifs.length).toBe(0);

    });

    test("should handle error when the API returns an error", async () => {

        const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => { });
        mock.onGet("/search").reply(400, { message: "Error fetching gifs" });
        const gifs = await getGifByQuery("saitama");

        expect(gifs.length).toBe(0);
        expect(consoleErrorSpy).toHaveBeenCalled();

    });
});