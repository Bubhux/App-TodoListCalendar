// hooks/useSyncTodoWithCalendar.js
import { useEffect } from 'react';
import useCalendar from './useCalendar.js';


/**
 * Hook personnalisé pour synchroniser la date du calendrier avec la date de création de la tâche survolée.
 * 
 * @param {Object|null} hoverDate - La date de création de la tâche actuellement survolée.
 */
const useSyncTodoWithCalendar = (hoverDate) => {
    const { currentYear, currentMonth, currentDay, setCurrentYear, setCurrentMonth, setCurrentDay, setHighlightedDate } = useCalendar()

    useEffect(() => {
        if (hoverDate) {
            const date = new Date(hoverDate)
            const year = date.getFullYear()
            const month = date.getMonth()
            const day = date.getDate()

            if (currentYear !== year) {
                setCurrentYear(year)
            }

            if (currentMonth !== month) {
                setCurrentMonth(month)
            }

            if (currentDay !== day) {
                setCurrentDay(day)
            }

            setHighlightedDate(date)

        } else {
            setHighlightedDate(null)
            setCurrentDay(null)
        }
    }, [hoverDate, currentYear, currentMonth, currentDay, setCurrentYear, setCurrentMonth, setCurrentDay, setHighlightedDate])
}

export default useSyncTodoWithCalendar;
