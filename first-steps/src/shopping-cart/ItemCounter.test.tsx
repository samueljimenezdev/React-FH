import { describe, expect, test } from "vitest";
import { ItemCounter } from "./ItemCounter";
import { fireEvent, render, screen } from "@testing-library/react";

describe('ItemCounter test', () => {

    test('should render with default values', () => {
        const name = 'Test item'
        render(<ItemCounter name={name} quantity={0} />)

        expect(screen.getByText(name)).not.toBeNull();
        expect(screen.getByText(name)).toBeDefined();
    });

    test('should increase count when +1 button is pressed', () => {
        const name = 'Test item'
        render(<ItemCounter name={name} quantity={0} />)

        const [buttonAdd] = screen.getAllByRole('button'); // Trae todos los btones

        fireEvent.click(buttonAdd); // Detona el click

        expect(screen.getByText('1')).toBeDefined();

    })

    test('should change to red when count is 0', () => {
        const name = 'Test item'
        render(<ItemCounter name={name} quantity={0} />)
        const itemText = screen.getByText(name);

        expect(itemText.style.color).toBe('red')

    })

    test('should change to black when counter is greater than 0', () => {
        const name = 'Test item'
        render(<ItemCounter name={name} quantity={1} />)
        const itemText = screen.getByText(name);

        expect(itemText.style.color).toBe('black')

    })
})