// Given 2 integers, return a string with the factor of the two integers with the exponent of the second integer minus 1:

const derive = (coefficient: number, exponent: number): string => `${coefficient * exponent}x^${exponent - 1}`;