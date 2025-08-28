import { describe, test, expect } from "vitest";
import { CustomHeader } from "./CustomHeader";
import { render, screen } from "@testing-library/react";

describe("CustomHeader", () => {

    const title = "Test";
    test("should render the title correctly", () => {
        const description = "Description test"
        render(<CustomHeader title={title} description={description} />);
        expect(screen.getByText(title)).not.toBeNull();
        expect(screen.getByText(title)).toBeDefined();
    });

    test("should render the description when provided", () => {
        const description = "Description test"
        render(<CustomHeader title={title} description={description} />);
        expect(screen.getByText(description)).not.toBeNull();
        expect(screen.getByText(description)).toBeDefined();
    });

    test("should not render description when not provided", () => {
        const { container } = render(<CustomHeader title={title} />);
        expect(container.querySelector('p')).toBeNull();
    });
});
