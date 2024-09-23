// hooks/useSyncTodoWithCalendar.js
import { useEffect } from 'react';
import useCalendar from './useCalendar.js';
import useHoverCalendarDate from './useHoverCalendarDate.js';


/**
 * Hook personnalisé pour synchroniser la date du calendrier avec la date de création de la tâche survolée.
 * 
 * @param {Object|null} hoverDate - La date de création de la tâche actuellement survolée.
 */
const useSyncTodoWithCalendar = (hoverDate) => {
    const { currentYear, setCurrentYear, currentMonth, setCurrentMonth, highlightedDate, setHighlightedDate } = useCalendar()
    const { handleMouseEnter } = useHoverCalendarDate()

    useEffect(() => {
        if (hoverDate) {
            const year = new Date(hoverDate).getFullYear()
            const month = new Date(hoverDate).getMonth()

            // Ne pas déclencher de mise à jour si l'année est déjà correcte
            if (currentYear !== year) {
                setCurrentYear(year)
            }

            if (currentMonth !== month) {
                setCurrentMonth(month)
            }

            // Ne pas déclencher de mise à jour si la date est déjà correcte
            if (highlightedDate !== hoverDate) {
                setHighlightedDate(hoverDate)
                handleMouseEnter(hoverDate) // Supposant que cette fonction n'est pas source de boucle
            }
        }
    }, [hoverDate, currentYear, setCurrentYear, currentMonth, setCurrentMonth, , highlightedDate, setHighlightedDate, handleMouseEnter])
}

export default useSyncTodoWithCalendar;
