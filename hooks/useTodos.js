// hooks/useTodos.js
import { useState } from 'react';
import useLocalStorage from './useLocalStorage.js';


/**
 * Hook personnalisé pour gérer les tâches (todos) avec persistance dans le localStorage.
 * 
 * @returns {Object} Objet contenant :
 * - `todos` {Array} Liste des tâches filtrées en fonction du filtre actif.
 * - `addTodo` {Function} Fonction pour ajouter une nouvelle tâche.
 * - `toggleTodo` {Function} Fonction pour basculer l'état de complétion d'une tâche.
 * - `deleteTodo` {Function} Fonction pour supprimer une tâche.
 * - `filter` {String} Filtre actif ('all', 'todo', 'done').
 * - `handleFilterChange` {Function} Fonction pour changer le filtre actif.
 */
const useTodos = () => {
    // State pour les tâches, initialisé à partir du localStorage
    const [todos, setTodos] = useLocalStorage('todos', [])

    // State pour le filtre actif ('all', 'todo', 'done')
    const [filter, setFilter] = useState('all')

    /**
     * Ajoute une nouvelle tâche à la liste des tâches.
     * 
     * @param {string} title - Le titre de la nouvelle tâche.
     */
    const addTodo = (title) => {
        const newTodo = {
            id: Date.now(),
            title,
            completed: false,
            createdDate: new Date().toISOString(), // Ajoute la date de création
        }

        // Ajoute la nouvelle tâche à la liste existante
        const updatedTodos = [...todos, newTodo]
        // Met à jour le localStorage avec la liste des tâches modifiée
        setTodos(updatedTodos)
    }

    /**
     * Bascule l'état de complétion d'une tâche spécifiée par son identifiant.
     * 
     * @param {number} id - L'identifiant de la tâche à basculer.
     */
    const toggleTodo = (id) => {
        setTodos(
            todos.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        )
    }

    /**
     * Supprime une tâche de la liste en fonction de son identifiant.
     * 
     * @param {number} id - L'identifiant de la tâche à supprimer.
     */
    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    /**
     * Modifie le filtre actif pour afficher les tâches en fonction de leur état.
     * 
     * @param {string} newFilter - Le nouveau filtre ('all', 'todo', 'done').
     */
    const handleFilterChange = (newFilter) => {
        setFilter(newFilter)
    }

    // Filtre les tâches en fonction du filtre actif
    const filteredTodos = todos.filter(todo => {
        if (filter === 'todo') {
            return !todo.completed;
        } else if (filter === 'done') {
            return todo.completed;
        }
        return true // 'all' ou autre filtre par défaut
    })

    return {
        todos: filteredTodos,
        addTodo,
        toggleTodo,
        deleteTodo,
        filter,
        handleFilterChange
    }
}

export default useTodos;
