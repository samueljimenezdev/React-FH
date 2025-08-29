import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { SearchBar } from "./SearchBar";

describe("SearchBar", () => {

    test("should render correctly", () => {
        const { container } = render(<SearchBar handleSearch={() => { }} />);
        expect(container).toMatchSnapshot();
        expect(screen.getByRole("textbox")).toBeDefined();
        expect(screen.getByRole("button")).toBeDefined();
    });

    test("should call onQuery with the correct value after 700 ms", async () => {
        const handleSearch = vi.fn()
        render(<SearchBar handleSearch={handleSearch} />)
        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'test' } });
        await waitFor(() => {
            expect(handleSearch).toHaveBeenCalled();
            expect(handleSearch).toHaveBeenCalledWith('test');
        })

    });

    test('should call only once with the last value (debounce)', async () => {

        const handleSearch = vi.fn()
        render(<SearchBar handleSearch={handleSearch} />)
        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 't' } });
        fireEvent.change(input, { target: { value: 'te' } });
        fireEvent.change(input, { target: { value: 'tes' } });
        fireEvent.change(input, { target: { value: 'test' } });

        await waitFor(() => {
            expect(handleSearch).toHaveBeenCalled();
            expect(handleSearch).toHaveBeenCalledWith('test');
        })
    });
});