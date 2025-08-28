import { describe, expect, test } from "vitest";
import { getGifByQuery } from "./get-gifs-by-query.action";

describe("getGifByQuery", () => {

    test("should return a list of gifs", async () => {

        const gifs = await getGifByQuery("dogs");

        expect(gifs.length).toBe(10);

        expect(gifs[0]).toStrictEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
            height: expect.any(Number),
            width: expect.any(Number),
        });
    });
});