import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test, vi } from "vitest";
import { FirstStepsApp } from "./FirstStepsApp";


const mockItemCounter = vi.fn((props: unknown) => {
    return (
        <div data-testid="ItemCounter" />
    )
})

vi.mock('./shopping-cart/ItemCounter', () => ({
    ItemCounter: (props: unknown) => mockItemCounter(props)
}))

// vi.mock('./shopping-cart/ItemCounter', () => ({
//     ItemCounter: () =>
//         <div
//             data-testid="ItemCounter"
//         />,
// }))

describe('FirstStepApss', () => {

    beforeEach(() => {
        vi.clearAllMocks()
    })

    test('should match snapshot ', () => {
        const { container } = render(<FirstStepsApp />)
        expect(container).toMatchSnapshot()
    })

    test('should render the correct number of ItemCounter elements', () => {
        render(<FirstStepsApp />)
        console.log(screen.debug())
        const itemCounters = screen.getAllByTestId('ItemCounter');
        expect(itemCounters.length).toBe(3)
    })

    test('should render ItemCounter with correcto props', () => {
        render(<FirstStepsApp />)
        expect(mockItemCounter).toHaveBeenCalledTimes(3);
        expect(mockItemCounter).toHaveBeenCalledWith({ name: 'Nintendo', quantity: 0 });
        expect(mockItemCounter).toHaveBeenCalledWith({ name: 'Xbox', quantity: 0 });
        expect(mockItemCounter).toHaveBeenCalledWith({ name: 'Play Station', quantity: 0 })

    })
})