import { describe, expect, test } from "vitest";
import { ItemCounter } from "./ItemCounter";
import { render, screen } from "@testing-library/react";

describe('ItemCounter test', () => {
    test('should render with default values', () => {
        const name = 'Test item'
        render(<ItemCounter name={name} quantity={0} />)

        expect(screen.getByText(name)).not.toBeNull();
        expect(screen.getByText(name)).toBeDefined();
    })
})