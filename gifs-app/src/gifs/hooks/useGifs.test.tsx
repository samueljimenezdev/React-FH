import { act, renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, test, vi } from "vitest";
import { useGifs } from "./useGifs";
import { getGifByQuery } from "../actions/get-gifs-by-query.action";

vi.mock('../actions/get-gifs-by-query.action', () => ({
    getGifByQuery: vi.fn()
}));

const mockGetGifByQuery = vi.mocked(getGifByQuery);

describe("useGifs", () => {

    beforeEach(() => {
        vi.clearAllMocks();
    });

    test("should return a list of gifs", () => {

        const { result } = renderHook(() => useGifs());

        expect(result.current.gifs).toBeInstanceOf(Array);
    });

    test("should add to previous searches when handleSearch is clicked", () => {

        const { result } = renderHook(() => useGifs());
        const termToSearch = 'test';

        act(() => {
            result.current.handleSearch(termToSearch)
        })

        expect(result.current.previousTerms).toContain(termToSearch)

    })

    test("should add gifs when handleSearch is trigged", async () => {

        const { result } = renderHook(() => useGifs());

        const mockGifs = [
            { id: '1', title: 'Naruto GIF 1', url: 'https://naruto1.gif', width: 100, height: 100 },
            { id: '2', title: 'Naruto GIF 2', url: 'https://naruto2.gif', width: 200, height: 200 }
        ];

        mockGetGifByQuery.mockResolvedValue(mockGifs);


        await act(async () => {
            await result.current.handleSearch('Naruto');
        });

        expect(mockGetGifByQuery).toHaveBeenCalledWith('naruto');
        expect(result.current.gifs).toEqual(mockGifs);
        expect(result.current.gifs.length).toBe(mockGifs.length);

    })


});