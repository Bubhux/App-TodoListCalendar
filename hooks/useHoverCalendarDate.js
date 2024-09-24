// hooks/useHoverCalendarDate.js
import { useState } from 'react';
import useCalendar from './useCalendar.js';


/**
 * Hook personnalisé pour gérer les dates survolées dans le calendrier.
 * 
 * Fournit des méthodes pour gérer l'état de la date survolée, ainsi que
 * pour mettre à jour la date mise en surbrillance lorsqu'un utilisateur
 * survole une tâche.
 * 
 * @returns {Object} - Un objet contenant les propriétés et méthodes suivantes :
 * @returns {Object|null} hoveredDate - La date survolée sous forme d'objet, ou null si aucune date n'est survolée.
 * @returns {Function} handleMouseEnter - Fonction pour mettre à jour l'état de la date survolée lorsque la souris entre dans un élément.
 * @returns {Function} handleMouseLeave - Fonction pour réinitialiser l'état de la date survolée lorsque la souris quitte un élément.
 */
const useHoverCalendarDate = () => {
    // Hook personnalisé pour accéder aux fonctions du calendrier
    const { setCurrentYear, setCurrentMonth, generateCalendarDays } = useCalendar()

    // État pour stocker la date survolée
    const [hoveredDate, setHoveredDate] = useState(null)

    /**
     * Fonction appelée lorsque la souris entre dans un élément.
     * Met à jour l'année courante et la date survolée en fonction de la date de création fournie.
     * 
     * @param {string} createdDate - La date de création de la tâche, au format ISO string.
     */
    const handleMouseEnter = (createdDate) => {
        // Crée un objet Date à partir de la chaîne de date
        const date = new Date(createdDate)
        date.setHours(0, 0, 0, 0)

        // Vérifie si la date est différente avant de mettre à jour
        if (!hoveredDate || 
            hoveredDate.date.getDate() !== date.getDate() || 
            hoveredDate.date.getMonth() !== date.getMonth() || 
            hoveredDate.date.getFullYear() !== date.getFullYear()) {

            setCurrentYear(date.getFullYear())
            setCurrentMonth(date.getMonth())

            const days = generateCalendarDays(date.getMonth(), date.getFullYear())
            const highlightedDay = days.find(day => day.day === date.getDate())

            // Stocke à la fois la date et toute autre information nécessaire
            setHoveredDate({
                date: date,
                dayInfo: highlightedDay
            })
        }
    }

    /**
     * Fonction appelée lorsque la souris quitte un élément.
     * Réinitialise l'état de la date survolée à null.
     */
    const handleMouseLeave = () => {
        setHoveredDate(null)
    }

    return { hoveredDate, handleMouseEnter, handleMouseLeave }
}

export default useHoverCalendarDate;
