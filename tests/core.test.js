import { describe, expect, it } from 'vitest';
import { validateUserInput } from '../src/lib/core';

describe('validateUserInput', () => {
	// Positive testing
	it('should return a successful message if right details are passed', () => {
		expect(validateUserInput('Roland', 20)).toMatch(/success/i);
	});

	// Negative testing
	it('should return an error if username is not a string', () => {
		expect(validateUserInput(10, 20)).toMatch(/invalid/i);
	});

	it('should return an error if username is less than 3 characters', () => {
		expect(validateUserInput('ro', 20)).toMatch(/invalid/i);
	});

	it('should return an error if username is more than 60 characters', () => {
		expect(validateUserInput('A'.repeat(61), 20)).toMatch(/invalid/i);
	});

	it('should return an error if age is not a number', () => {
		expect(validateUserInput(10, '20')).toMatch(/invalid/i);
	});

	it('should return an error if age is less than 18', () => {
		expect(validateUserInput('roland', 17)).toMatch(/invalid/i);
	});

	it('should return an error if age is greater than 30', () => {
		expect(validateUserInput('roland', 31)).toMatch(/invalid/i);
	});
});
