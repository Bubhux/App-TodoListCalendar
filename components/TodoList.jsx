// components/TodoList.jsx
import React, { useState } from 'react';
import TodoItem from './TodoItem.jsx';
import useTodos from '../hooks/useTodos.js';
import useCalendar from '../hooks/useCalendar.js';


/**
 * Composant TodoList.
 * Affiche la liste des tâches à faire avec des options pour ajouter, compléter et supprimer des tâches.
 * Utilise le hook personnalisé `useTodos` pour gérer les tâches et les filtres.
 * 
 * @returns {JSX.Element} Le composant TodoList.
 */
const TodoList = () => {
    const { todos, addTodo, toggleTodo, deleteTodo, filter, handleFilterChange } = useTodos()
    const { setHighlightedDate } = useCalendar()
    const [hoverDate, setHoverDate] = useState(null) // État pour la date survolée

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
        //console.log('Hovered Date:', date) // Affiche la date dans la console
        setHoverDate(date) // Met à jour l'état du survol
        setHighlightedDate(date) // Met à jour l'état du calendrier avec la date de survol
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
                    />
                ))}
            </ul>
            {hoverDate && <div className="hover-info">Date created : {hoverDate}</div>}
        </div>
    )
}

export default TodoList;
