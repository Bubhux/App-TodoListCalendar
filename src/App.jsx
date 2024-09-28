// src/App.jsx
import React from 'react';
import TodoList from '../components/TodoList.jsx';
import Calendar from '../components/Calendar.jsx';
import ScrollAnimation from '../components/ScrollAnimation.jsx';
import { DateHoverProvider } from '../components/DateHoverContext.jsx';


const App = () => {
    return (
        <DateHoverProvider>
            <div className="app__container reveal">
                <ScrollAnimation />
                <div className="logo__container">
                    <h1 className="text-center mb-5 reveal-4">To-Do List application</h1>
                </div>
                <div className="container">
                    <div className="todo__container">
                        <TodoList />
                    </div>
                    <div className="calendar__container">
                        <Calendar />
                    </div>
                </div>
            </div>
        </DateHoverProvider>
    )
}

export default App;
