// hooks/useSyncTodoWithCalendar.js
import { useEffect } from 'react';
import useCalendar from './useCalendar.js';


/**
 * Hook personnalisé pour synchroniser la date du calendrier avec la date de création de la tâche survolée.
 * 
 * @param {Object|null} hoverDate - La date de création de la tâche actuellement survolée.
 */
const useSyncTodoWithCalendar = (hoverDate) => {
    const { setCurrentYear, setCurrentMonth, setHighlightedDate } = useCalendar()

    useEffect(() => {
        console.log("useSyncTodoWithCalendar - Hover Date:", hoverDate)
        if (hoverDate) {
            const date = new Date(hoverDate)
            setCurrentYear(date.getFullYear())
            setCurrentMonth(date.getMonth())
            setHighlightedDate(date)
        }
    }, [hoverDate, setCurrentYear, setCurrentMonth, setHighlightedDate])
}

export default useSyncTodoWithCalendar;
