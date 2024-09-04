export const DATA = [
	{ id: 1, userId: 1, title: 'Todo 1', completed: false },
	{ id: 2, userId: 1, title: 'Todo 1', completed: false },
	{ id: 3, userId: 2, title: 'Todo 2', completed: true },
	{ id: 4, userId: 3, title: 'Todo 3', completed: false },
	{ id: 5, userId: 3, title: 'Todo 3', completed: false },
	{ id: 6, userId: 3, title: 'Todo 3', completed: false }
];

export const USERS = [
	{ id: 1, name: 'User 1' },
	{ id: 2, name: 'User 2' },
	{ id: 3, name: 'User 3' }
];

export const getAllTodos = (userId) => {
	if (!USERS.find((user) => user.id === userId)) return 'User not found';
	const todos = DATA.filter((todo) => todo.userId === userId);

	return {
		success: true,
		todos
	};
};

export const getSingleTodo = (id, userId) => {
	if (!userId) return 'userId not found';
	if (!id) return 'todoId not found';
	if (!USERS.find((user) => user.id === userId)) return 'User not found';

	const todo = DATA.find((todo) => todo.userId === userId && todo.id === id);
	if (!todo) return 'Todo not found';

	return {
		success: true,
		todos: [todo]
	};
};

export const createTodo = (todo, userId) => {
	if (!userId) return 'userId not found';
	if (!USERS.find((user) => user.id === userId)) return 'User not found';
	if (typeof todo !== 'object') return 'Invalid todo';

	const newTodo = {
		id: DATA.length + 1,
		userId,
		...todo
	};
	DATA.push(newTodo);
	return 'Todo created successfully';
};

export const deleteTodo = (id, userId) => {
	if (!userId) return 'userId not found';
	if (!id) return 'todoId not found';
	if (!USERS.find((user) => user.id === userId)) return 'User not found';

	const todo = DATA.find((todo) => todo.userId === userId && todo.id === id);
	if (!todo) return 'Todo not found';
	DATA.splice(DATA.indexOf(todo), 1);
	return 'Todo deleted successfully';
};

export const updateTodo = (todo, userId) => {
	if (!userId) return 'userId not found';
	if (!USERS.find((user) => user.id === userId)) return 'User not found';
	if (typeof todo !== 'object') return 'Invalid todo';
	if (!DATA.find((oldTodo) => oldTodo.userId === userId && oldTodo.id === todo.id)) return 'Todo not found';

	return updateTodoUtil(todo, userId);
};

export const updateTodoStatus = (todo, userId) => {
	if (!userId) return 'userId not found';
	if (!USERS.find((user) => user.id === userId)) return 'User not found';
	if (typeof todo !== 'object') return 'Invalid todo';
	if (!DATA.find((oldTodo) => oldTodo.userId === userId && oldTodo.id === todo.id)) return 'Todo not found';

	return updateTodoUtil(todo, userId);
};

function updateTodoUtil(todo, userId) {
	const newTodo = {
		id: todo.id,
		userId,
		...todo
	};
	DATA.splice(DATA.indexOf(todo), 1, newTodo);
	console.log(DATA);
	return 'Todo status updated successfully';
}
