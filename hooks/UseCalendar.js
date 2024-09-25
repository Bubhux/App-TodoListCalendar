// hooks/useCalendar.js
import { useState } from 'react';


/**
 * Vérifie si une année est bissextile.
 * 
 * @param {number} year - L'année à vérifier.
 * @returns {boolean} - `true` si l'année est bissextile, sinon `false`.
 */
const isLeapYear = (year) => {
    return (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0))
}

/**
 * Obtient le nombre de jours en février pour une année donnée.
 * 
 * @param {number} year - L'année pour laquelle obtenir le nombre de jours de février.
 * @returns {number} - Le nombre de jours en février pour l'année donnée.
 */
const getFebDays = (year) => {
    return isLeapYear(year) ? 29 : 28
}

/**
 * Hook personnalisé pour gérer les données du calendrier.
 * 
 * @returns {object} - Un objet contenant les propriétés et fonctions du calendrier.
 */
const useCalendar = () => {
    // État pour le mois courant
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth())
    // État pour l'année courante
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear())
    // État pour le jour courant
    const [currentDay, setCurrentDay] = useState(new Date().getDate())
    // État pour afficher ou masquer la liste des mois
    const [showMonthList, setShowMonthList] = useState(false)
    // État pour la date surlignée
    const [highlightedDateState, setHighlightedDateState] = useState(null)

    // Noms des mois en anglais
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ]

    /**
     * Alterne la visibilité de la liste des mois.
     */
    const toggleMonthList = () => {
        setShowMonthList(prevState => !prevState)
    }

    /**
     * Gère la sélection d'un mois dans la liste.
     * 
     * @param {number} month - L'indice du mois sélectionné.
     */
    const handleMonthSelect = (month) => {
        setCurrentMonth(month)
        setShowMonthList(false) // Ferme la liste des mois après la sélection
    }

    /**
     * Génère les jours du calendrier pour un mois et une année donnés.
     * 
     * @param {number} month - Le mois pour lequel générer les jours.
     * @param {number} year - L'année pour laquelle générer les jours.
     * @returns {Array<object>} - Un tableau d'objets représentant les jours du mois.
     */
    const generateCalendarDays = (month, year) => {
        const daysOfMonth = [
            31, getFebDays(year), 31, 30, 31, 30,
            31, 31, 30, 31, 30, 31
        ]

        const firstDay = new Date(year, month).getDay()
        const days = []

        days.forEach(day => {
            day.ariaLabel = new Date(year, month, day.day).toLocaleDateString()
        })

        for (let i = 0; i < daysOfMonth[month] + firstDay; i++) {
            if (i >= firstDay) {
                const dayNumber = i - firstDay + 1
                days.push({
                    day: dayNumber,
                    isCurrentDate: (
                        dayNumber === new Date().getDate() &&
                        year === new Date().getFullYear() &&
                        month === new Date().getMonth()
                    ),
                    isHighlighted: (
                        highlightedDateState &&
                        dayNumber === new Date(highlightedDateState).getDate() &&
                        year === new Date(highlightedDateState).getFullYear() &&
                        month === new Date(highlightedDateState).getMonth()
                    )
                })
            } else {
                days.push({ day: null, isCurrentDate: false, isHighlighted: false })
            }
        }

        return days
    }

    /**
     * Met à jour la date surlignée.
     * 
     * @param {Date} date - La date à surligner.
     */
    const setHighlightedDate = (date) => {
        if (date instanceof Date && !isNaN(date.getTime())) {
            if (!highlightedDateState || date.getTime() !== highlightedDateState.getTime()) {
                setHighlightedDateState(date)
            }
        }
    }

    return {
        currentMonth,
        currentYear,
        monthNames,
        generateCalendarDays,
        showMonthList,
        toggleMonthList,
        handleMonthSelect,
        setCurrentYear,
        setCurrentMonth,
        setCurrentDay,
        setHighlightedDate
    }
}

export default useCalendar;
