// components/TodoList.jsx
import React, { useState } from 'react';
import TodoItem from './TodoItem.jsx';
import useTodos from '../hooks/useTodos.js';
import useHoverCalendarDate from '../hooks/useHoverCalendarDate.js';
import useSyncTodoWithCalendar from '../hooks/useSyncTodoWithCalendar.js';


/**
 * Composant TodoList.
 * Affiche la liste des tâches à faire avec des options pour ajouter, compléter et supprimer des tâches.
 * Utilise le hook personnalisé `useTodos` pour gérer les tâches et les filtres.
 * 
 * @returns {JSX.Element} Le composant TodoList.
 */
const TodoList = () => {
    const { todos, addTodo, toggleTodo, deleteTodo, filter, handleFilterChange } = useTodos()
    const { handleMouseEnter, handleMouseLeave } = useHoverCalendarDate()
    const [hoverDate, setHoverDate] = useState(null)

    // Utilise le hook pour synchroniser la date survolée avec le calendrier
    useSyncTodoWithCalendar(hoverDate)

    /**
     * Gestionnaire de soumission du formulaire pour ajouter une nouvelle tâche.
     * 
     * @param {React.FormEvent} e - L'événement de soumission du formulaire.
     */
    const handleSubmit = (e) => {
        e.preventDefault()
        const title = e.target.elements.title.value.trim()
        if (title) {
            addTodo(title)
            e.target.reset()
        }
    }

    // Gestionnaire de survol des tâches
    const handleTodoHover = (date) => {
        setHoverDate(date)
        handleMouseEnter(date)
    }

    const handleTodoMouseLeave = () => {
        setHoverDate(null)
        handleMouseLeave()
    }

    // Fonction pour formater la date en utilisant le format 'en-GB'
    // Fonction pour formater la date en utilisant le format 'en-GB' sans la virgule
    const formatHoverDate = (isoString) => {
        const date = new Date(isoString)

        // Récupère la date et l'heure séparément
        const datePart = date.toLocaleDateString('en-GB', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        })

        const timePart = date.toLocaleTimeString('en-GB', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        })

        // Combine la date et l'heure sans virgule
        return `${datePart} ${timePart}`
    }

    return (
        <div className="todo__container pt-5" id="todolist">
            <form onSubmit={handleSubmit} className="d-flex pb-4 align-items-center">
                <input required className="form-control reveal-3" type="text" placeholder="Create a note ..." name="title" />
                <button className="btn btn-primary ms-2 btn-custom reveal-4">Add a note</button>
            </form>
            <div className="btn-group mb-4 gap-1 reveal-2" role="group">
                <button
                    type="button"
                    className={`btn btn-outline-primary ${filter === 'all' ? 'active' : ''}`}
                    onClick={() => handleFilterChange('all')}>
                    All
                </button>
                <button
                    type="button"
                    className={`btn btn-outline-primary ${filter === 'todo' ? 'active' : ''}`}
                    onClick={() => handleFilterChange('todo')}>
                    To do
                </button>
                <button
                    type="button"
                    className={`btn btn-outline-primary ${filter === 'done' ? 'active' : ''}`}
                    onClick={() => handleFilterChange('done')}>
                    Completed
                </button>
            </div>
            <ul className="list-group list-group-custom reveal-4">
                {todos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        toggleTodo={toggleTodo}
                        deleteTodo={deleteTodo}
                        onHover={handleTodoHover}
                        onMouseLeave={handleTodoMouseLeave}
                    />
                ))}
            </ul>
            {hoverDate && <div className="hover-info">Date created : {formatHoverDate(hoverDate)}</div>}
        </div>
    )
}

export default TodoList;
