// hooks/useSyncTodoWithCalendar.js
import { useEffect } from 'react';
import useCalendar from './useCalendar.js';


/**
 * Hook personnalisé pour synchroniser la date du calendrier avec la date de création de la tâche survolée.
 * 
 * Ce hook met à jour l'année et le mois courants du calendrier ainsi que la date surlignée
 * lorsque la date de la tâche survolée change.
 * 
 * @param {Date|null} hoverDate - La date de création de la tâche actuellement survolée. 
 * Si la valeur est nulle, la synchronisation n'est pas effectuée.
 */
const useSyncTodoWithCalendar = (hoverDate) => {
    const { setCurrentYear, setCurrentMonth, setHighlightedDate } = useCalendar()

    useEffect(() => {
        if (hoverDate) {
            //console.log("useSyncTodoWithCalendar - Hover Date:", hoverDate)
            const date = new Date(hoverDate)
            setCurrentYear(date.getFullYear())
            setCurrentMonth(date.getMonth())
            setHighlightedDate(date)
        }
    }, [hoverDate, setCurrentYear, setCurrentMonth, setHighlightedDate])
}

export default useSyncTodoWithCalendar;
