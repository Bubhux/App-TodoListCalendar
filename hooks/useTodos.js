// hooks/useTodos.js
import { useState, useEffect } from 'react';
import useLocalStorage from './useLocalStorage.js';


const useTodos = () => {
    const [todos, setTodos] = useLocalStorage('todos', []);
    const [filter, setFilter] = useState('all');

    const addTodo = (title) => {
        const newTodo = { id: Date.now(), title, completed: false };
        setTodos([...todos, newTodo]);
    };

    const toggleTodo = (id) => {
        setTodos(
            todos.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const handleFilterChange = (filter) => {
        setFilter(filter);
    };

    const filteredTodos = todos.filter(todo => {
        if (filter === 'todo') {
            return !todo.completed;
        } else if (filter === 'done') {
            return todo.completed;
        }
        return true;
    });

    return {
        todos: filteredTodos,
        addTodo,
        toggleTodo,
        deleteTodo,
        filter,
        handleFilterChange
    };
};

export default useTodos;
