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
            <div className="logo-container">
                <h1 className="text-center mb-5 reveal-4">To-Do List application</h1>
            </div>
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
