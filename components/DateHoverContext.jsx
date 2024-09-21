// components/DateHoverContext.jsx
import React, { createContext, useState, useContext } from 'react';


/**
 * Contexte pour gérer l'état de la date survolée.
 * @type {React.Context<{hoveredDate: (Date|null), setHoveredDate: React.Dispatch<React.SetStateAction<Date|null>>}>}
 */
const DateHoverContext = createContext()

/**
 * Provider pour le contexte DateHover.
 * Il gère l'état de la date actuellement survolée.
 *
 * @param {Object} props - Les propriétés du composant.
 * @param {React.ReactNode} props.children - Les composants enfants qui auront accès au contexte.
 * @returns {JSX.Element} Le Provider du contexte DateHover avec la valeur de `hoveredDate` et `setHoveredDate`.
 */
export const DateHoverProvider = ({ children }) => {
    const [hoveredDate, setHoveredDate] = useState(null)

    //console.log("DateHoverContext - Hovered Date:", hoveredDate)

    return (
        <DateHoverContext.Provider value={{ hoveredDate, setHoveredDate }}>
            {children}
        </DateHoverContext.Provider>
    )
}

/**
 * Hook personnalisé pour utiliser le contexte DateHover.
 *
 * @returns {{hoveredDate: (Date|null), setHoveredDate: React.Dispatch<React.SetStateAction<Date|null>>}} L'état actuel de la date survolée et une fonction pour la mettre à jour.
 */
export const useDateHover = () => useContext(DateHoverContext);
