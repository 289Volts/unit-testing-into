import { describe, expect, it } from 'vitest';
import {
	createTodo,
	DATA,
	deleteTodo,
	getAllTodos,
	getSingleTodo,
	updateTodo,
	updateTodoStatus
} from '../src/lib/todoFunc';

// vi.mock('../src/lib/todoFunc');
describe('getAllTodos', () => {
	it.each([
		{
			scenerio: 'userId is a positive number',
			userId: 1,
			result: {
				success: true,
				todos: DATA.filter((todo) => todo.userId === 1)
			}
		},
		{
			scenerio: "userId doesn't exist",
			userId: 0,
			result: 'not found'
		}
	])('If $scenerio then it should return $result', ({ userId, result }) => {
		if (typeof result === 'string') expect(getAllTodos(userId)).toMatch(result);
		else expect(getAllTodos(userId)).toEqual(result);
	});
});

describe('getSingleTodo', () => {
	it.each([
		{
			scenerio: 'userId is a positive number',
			userId: 1,
			todoId: 1,
			result: {
				success: true,
				todos: [DATA.find((todo) => todo.userId === 1 && todo.id === 1)]
			}
		},
		{
			scenerio: "todoId doesn't exist",
			userId: 1,
			todoId: 0,
			result: 'not found'
		},
		{
			scenerio: "userId doesn't exist",
			userId: 0,
			todoId: 1,
			result: 'not found'
		}
	])('If $scenerio then it should return $result', ({ userId, todoId, result }) => {
		if (typeof result === 'string') expect(getSingleTodo(userId, todoId)).toMatch(new RegExp(result, 'i'));
		else expect(getSingleTodo(userId, todoId)).toEqual(result);
	});
});

describe('createTodo', () => {
	it.each([
		{
			scenerio: 'userId is a positive number and todo is an object',
			userId: 1,
			todo: {
				title: 'test',
				completed: false
			},
			result: 'success'
		},
		{
			scenerio: 'todo is not an object',
			userId: 1,
			todo: 'test',
			result: 'Invalid'
		},
		{
			scenerio: "user doesn't exist",
			userId: 0,
			todo: {
				title: 'test',
				completed: false
			},
			result: 'not found'
		}
	])('If $scenerio then it should return $result', ({ userId, todo, result }) => {
		if (typeof result === 'string') expect(createTodo(todo, userId)).toMatch(new RegExp(result, 'i'));
		else expect(createTodo(todo, userId)).toEqual(result);
	});
});

describe('updateTodo', () => {
	it.each([
		{
			scenerio: 'userId and todoId are positive numbers and todo is an object',
			userId: 1,
			todo: {
				id: 1,
				title: 'test',
				completed: false
			},
			result: 'success'
		},
		{
			scenerio: 'todo is not an object',
			userId: 1,
			todo: 'test',
			result: 'Invalid'
		},
		{
			scenerio: "user doesn't exist",
			userId: 0,
			todo: {
				id: 1,
				title: 'test',
				completed: false
			},
			result: 'not found'
		},
		{
			scenerio: "todo doesn't exist",
			userId: 1,
			todo: {
				id: 0,
				title: 'test',
				completed: false
			},
			result: 'not found'
		}
	])('If $scenerio then it should return $result', ({ userId, todo, result }) => {
		if (typeof result === 'string') expect(updateTodo(todo, userId)).toMatch(new RegExp(result, 'i'));
		else expect(updateTodo(todo, userId)).toEqual(result);
	});
});

describe('updateTodoStatus', () => {
	it.each([
		{
			scenerio: 'userId and todoId are positive numbers and todo is an object',
			userId: 1,
			todo: {
				id: 1,
				title: 'test',
				completed: false
			},
			result: 'success'
		},
		{
			scenerio: 'todo is not an object',
			userId: 1,
			todo: 'test',
			result: 'Invalid'
		},
		{
			scenerio: "user doesn't exist",
			userId: 0,
			todo: {
				id: 1,
				title: 'test',
				completed: false
			},
			result: 'not found'
		},
		{
			scenerio: "todo doesn't exist",
			userId: 1,
			todo: {
				id: 0,
				title: 'test',
				completed: false
			},
			result: 'not found'
		}
	])('If $scenerio then it should return $result', ({ userId, todo, result }) => {
		if (typeof result === 'string') expect(updateTodoStatus(todo, userId)).toMatch(new RegExp(result, 'i'));
		else expect(updateTodoStatus(todo, userId)).toEqual(result);
	});
});

describe('deleteTodo', () => {
	it.each([
		{
			scenerio: 'userId and todoId are positive numbers',
			userId: 1,
			todoId: 1,
			result: 'success'
		},
		{
			scenerio: "user doesn't exist",
			userId: 0,
			todoId: 1,
			result: 'not found'
		},
		{
			scenerio: "todo doesn't exist",
			userId: 1,
			todoId: 0,
			result: 'not found'
		}
	])('If $scenerio then it should return $result', ({ userId, todoId, result }) => {
		if (typeof result === 'string') expect(deleteTodo(todoId, userId)).toMatch(new RegExp(result, 'i'));
		else expect(deleteTodo(todoId, userId)).toEqual(result);
	});
});
