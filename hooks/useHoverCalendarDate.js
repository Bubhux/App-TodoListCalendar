// hooks/useHoverCalendarDate.js
import { useState } from 'react';
import useCalendar from './useCalendar.js';


/**
 * Hook personnalisé pour gérer les dates survolées dans le calendrier.
 * 
 * Ce hook fournit des méthodes pour gérer l'état de la date survolée et
 * pour mettre à jour la date mise en surbrillance lorsque l'utilisateur
 * survole un élément de calendrier.
 * 
 * @returns {Object} Un objet contenant :
 * @returns {Date|null} hoveredDate - La date survolée sous forme d'objet Date, ou null si aucune date n'est survolée.
 * @returns {Function} handleMouseEnter - Fonction pour mettre à jour l'état de la date survolée lorsque la souris entre dans un élément.
 * @returns {Function} handleMouseLeave - Fonction pour réinitialiser l'état de la date survolée lorsque la souris quitte un élément.
 */
const useHoverCalendarDate = () => {
    // Accède aux fonctions du calendrier via le hook useCalendar
    const { setCurrentYear, setCurrentMonth, generateCalendarDays } = useCalendar()

    // État pour stocker la date survolée
    const [hoveredDate, setHoveredDate] = useState(null)

    /**
     * Fonction appelée lorsque la souris entre dans un élément.
     * Met à jour l'année et le mois courants, puis stocke la date survolée
     * si elle est différente de la date précédente.
     * 
     * @param {string} createdDate - La date de création de la tâche au format ISO string.
     */
    const handleMouseEnter = (createdDate) => {
        // Crée un objet Date à partir de la chaîne de date
        //console.log("handleMouseEnter - Created Date:", createdDate)
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

            // Stocke la date et les informations sur le jour survolé
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
        //console.log("handleMouseLeave - Clearing Hovered Date")
        setHoveredDate(null)
    }

    return { hoveredDate, handleMouseEnter, handleMouseLeave }
}

export default useHoverCalendarDate;
