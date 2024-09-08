// hooks/useTodos.js
import { useState, useEffect } from 'react';
import useLocalStorage from './useLocalStorage.js';


/**
 * Hook personnalisée pour gérer les tâches (todos) avec persistance dans le localStorage.
 * 
 * @returns {object} Objet contenant les tâches filtrées, et des fonctions pour ajouter, basculer, supprimer et filtrer les tâches.
 */
const useTodos = () => {
    // State pour les tâches, initialisé à partir du localStorage
    const [todos, setTodos] = useLocalStorage('todos', []);
    
    // State pour le filtre actif (all, todo, done)
    const [filter, setFilter] = useState('all');

    /**
     * Ajoute une nouvelle tâche.
     * 
     * @param {string} title - Le titre de la nouvelle tâche.
     */
    const addTodo = (title) => {
        const newTodo = { id: Date.now(), title, completed: false };
        setTodos([...todos, newTodo]);
    };

    /**
     * Bascule l'état de complétion d'une tâche.
     * 
     * @param {number} id - L'identifiant de la tâche à basculer.
     */
    const toggleTodo = (id) => {
        setTodos(
            todos.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    /**
     * Supprime une tâche.
     * 
     * @param {number} id - L'identifiant de la tâche à supprimer.
     */
    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    /**
     * Change le filtre actif.
     * 
     * @param {string} filter - Le nouveau filtre ('all', 'todo', 'done').
     */
    const handleFilterChange = (filter) => {
        setFilter(filter);
    };

    // Filtre les tâches en fonction du filtre actif
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
