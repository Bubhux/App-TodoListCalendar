// components/CalendarHeader.jsx
import React, { useEffect } from 'react';


/**
 * Composant d'en-tête de calendrier qui affiche le mois et l'année actuels,
 * et permet de changer l'année ou d'ouvrir un sélecteur de mois.
 * 
 * @param {Object} props - Les propriétés du composant.
 * @param {function} props.onMonthPickerClick - Fonction appelée lors du clic sur le sélecteur de mois.
 * @param {number} props.currentMonth - Le mois actuellement sélectionné (index de 0 à 11).
 * @param {number} props.currentYear - L'année actuellement sélectionnée.
 * @param {Array<string>} props.monthNames - Tableau contenant les noms des mois.
 * @param {function} props.setCurrentYear - Fonction pour mettre à jour l'année actuelle.
 * @returns {JSX.Element} Le composant JSX représentant l'en-tête du calendrier.
 */
const CalendarHeader = ({ onMonthPickerClick, currentMonth, currentYear, monthNames, setCurrentYear }) => {

    useEffect(() => {
        const prevYearButton = document.querySelector('.calendar__year-change--previous')
        const nextYearButton = document.querySelector('.calendar__year-change--next')
        const monthPicker = document.querySelector('.calendar__month-picker')
        
        /**
         * Désactive la sélection de texte et le drag sur l'élément donné.
         * 
         * @param {HTMLElement} element - L'élément sur lequel appliquer ces restrictions.
         */
        const disableSelectionAndDrag = (element) => {
            if (element) {
                element.addEventListener('dragstart', (e) => e.preventDefault())
                element.style.userSelect = 'none'
            }
        }

        // Désactivation de la sélection et du drag pour les éléments pertinents
        disableSelectionAndDrag(prevYearButton)
        disableSelectionAndDrag(nextYearButton)
        disableSelectionAndDrag(monthPicker)

        // Nettoyage lors de la désactivation du composant
        return () => {
            if (prevYearButton) {
                prevYearButton.removeEventListener('dragstart', (e) => e.preventDefault())
            }
            if (nextYearButton) {
                nextYearButton.removeEventListener('dragstart', (e) => e.preventDefault())
            }
            if (monthPicker) {
                monthPicker.removeEventListener('dragstart', (e) => e.preventDefault())
            }
        }
    }, [])

    return (
        <div className="calendar__header">
            <span
                className="calendar__month-picker"
                id="month-picker"
                onClick={onMonthPickerClick}
            >
                {/* Affiche le nom du mois actuellement sélectionné */}
                {monthNames[currentMonth]}
            </span>
            <div className="calendar__year-picker" id="year-picker">
                {/* Permet de diminuer l'année actuelle */}
                <span
                    className="calendar__year-change calendar__year-change--previous"
                    id="pre-year"
                    onClick={() => setCurrentYear(prev => prev - 1)}
                >
                    &lt;
                </span>
                {/* Affiche l'année actuellement sélectionnée */}
                <span id="year" className="calendar__year">
                    {currentYear}
                </span>
                {/* Permet d'augmenter l'année actuelle */}
                <span
                    className="calendar__year-change calendar__year-change--next"
                    id="next-year"
                    onClick={() => setCurrentYear(prev => prev + 1)}
                >
                    &gt;
                </span>
            </div>
        </div>
    )
}

export default CalendarHeader;
