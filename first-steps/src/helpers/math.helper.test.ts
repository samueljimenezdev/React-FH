import { describe, expect, test } from 'vitest'

import { add, multiply, substract } from './math.helper'

describe('add', () => {
    test('should add two positives numbers', () => {
        // ! 1. Arrange
        const a: number = 1;
        const b: number = 2;

        // ! 2. Act
        const result = add(a, b);

        //! 3. Assert
        expect(result).toBe(a + b);
    });
});


describe('substract', () => {
    test('should substract two positives numbers', () => {
        // ! 1. Arrange
        const a: number = 1;
        const b: number = 2;

        // ! 2. Act
        const result = substract(a, b);

        //! 3. Assert
        expect(result).toBe(a - b);

    });


});


describe('multiply', () => {
    test('should multiply two positives numbers', () => {
        // ! 1. Arrange
        const a: number = 2;
        const b: number = 2;

        // ! 2. Act
        const result = multiply(a, b);

        //! 3. Assert
        expect(result).toBe(a * b);

    });

});


