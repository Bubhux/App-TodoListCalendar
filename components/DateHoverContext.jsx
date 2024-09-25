// components/DateHoverContext.jsx
import React, { createContext, useState, useContext } from 'react';


// Création du contexte
const DateHoverContext = createContext()

// Provider pour gérer l'état
export const DateHoverProvider = ({ children }) => {
    const [hoveredDate, setHoveredDate] = useState(null)

    return (
        <DateHoverContext.Provider value={{ hoveredDate, setHoveredDate }}>
            {children}
        </DateHoverContext.Provider>
    )
}

export const useDateHover = () => useContext(DateHoverContext)
