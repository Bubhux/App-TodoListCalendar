// src/App.jsx
import React from 'react';
import TodoList from '../components/TodoList.jsx';
import Calendar from '../components/Calendar.jsx';
import ScrollAnimation from '../components/ScrollAnimation.jsx';
import './App.css';


const App = () => {
    return (
        <div className="app-container reveal">
            <ScrollAnimation />
            <h1 className="text-center reveal-1">To-Do List application</h1>
            <div className="container">
                <div className="todo-container">
                    <TodoList />
                </div>
                <div className="calendar-container">
                    <Calendar />
                </div>
            </div>
        </div>
    )
}

export default App;

