// src/App.jsx
import React, { useState } from 'react';
import TodoList from '../components/TodoList.jsx';
import Calendar from '../components/Calendar.jsx';
import ScrollAnimation from '../components/ScrollAnimation.jsx';
import ThemeSwitcher from '../components/ThemeSwitcher.jsx';
import { DateHoverProvider } from '../components/DateHoverContext.jsx';


/**
 * Composant principal de l'application.
 * Gère le changement de thème et force la réinitialisation des animations en modifiant la clé du composant principal.
 *
 * @returns {JSX.Element} Le composant App.
 */
const App = () => {
    // État pour gérer la clé unique du composant principal
    const [themeKey, setThemeKey] = useState(0)

    /**
     * Fonction appelée lors du changement de thème.
     * Incrémente la clé du composant principal pour forcer le re-render,
     * ce qui réinitialise les animations.
     */
    const handleThemeChange = () => {
        setThemeKey(prevKey => prevKey + 1)
    }

    return (
        <DateHoverProvider>
            <div className="app__container reveal" key={themeKey}>
                <ScrollAnimation />
                <div className="header">
                    <div className="logo__container">
                        <h1 className="text-center mb-5 reveal-4">To-Do List application</h1>
                    </div>
                    <div className="theme__wrapper">
                        <div className="theme__container">
                            <ThemeSwitcher onChange={handleThemeChange} />
                        </div>
                    </div>
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
