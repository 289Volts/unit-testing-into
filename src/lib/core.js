export const validateUserInput = (username, age) => {
	let errors = [];

	if (typeof username !== 'string' || username.length < 3 || username.length > 60) errors.push('Invalid username');

	if (typeof age !== 'number' || age < 18 || age > 30) errors.push('Invalid age');

	return errors.length === 0 ? 'Validation successful' : errors.join(', ');
};
