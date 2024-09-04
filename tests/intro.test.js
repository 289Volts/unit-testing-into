import { describe, expect, it } from 'vitest';
import { fizzBuzz, returnMax } from '../src/lib/intro';

describe('max', () => {
	it('should return the first argument if it is greater', () => {
		const result = returnMax(12, 2);

		expect(result).toBe(12);
	});
	it('should return the second argument if it is greater', () => {
		const result = returnMax(2, 12);

		expect(result).toBe(12);
	});
	it('should return the second argument if arguments are equal', () => {
		const result = returnMax(2, 2);

		expect(result).toBe(2);
	});
});

describe('FizzBuzz', () => {
	it('should return FizzBuzz if the number is divisible by 5 and 3', () => {
		const result = fizzBuzz(15);
		expect(result).toBe('FizzBuzz');
	});

	it('should return Fizz if the number is only divisible by 3', () => {
		const result = fizzBuzz(6);
		expect(result).toBe('Fizz');
	});

	it('should return Buzz if the number is only divisible by 5', () => {
		const result = fizzBuzz(10);
		expect(result).toBe('Buzz');
	});

	it('should return the number as a string if it is not divisible by 5 or 3', () => {
		const result = fizzBuzz(1);
		expect(result).toBe('1');
	});
});
