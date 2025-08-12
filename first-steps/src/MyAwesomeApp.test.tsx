import { describe, expect, test } from "vitest";
import { MyAwesomeApp } from "./MyAwesomeApp";
import { render, screen } from '@testing-library/react'

describe('My Awesome App', () => {
    test('should render firstName and lastName', () => {
        const { container } = render(<MyAwesomeApp />); // Evalua estados iniciales, no cambios, para eso usar screen()

        const h1 = container.querySelector('h1');
        expect(h1?.innerHTML).toContain('Samuel'); // Contener

        const h3 = container.querySelector('h3');
        expect(h3?.innerHTML).toBe('Jimenez'); // Ser primitivos

    })


    test('should render firstName and lastName using screen()', () => {
        render(<MyAwesomeApp />); // Evalua estados iniciales, no cambios, para eso usar screen()
        screen.debug()

        const h1 = screen.getByTestId('fist-name-title')
        expect(h1.innerHTML).toContain('Samuel')
    })

    test('should match snapshot', () => {
        const { container } = render(<MyAwesomeApp />)
        expect(container).toMatchSnapshot(); // Cuando se ejecuta crea un snapshot en la carpeta __snapshots__
    })
})