// components/CalendarHeader.jsx
import React from 'react';


/**
 * Composant d'en-tête de calendrier qui affiche le mois et l'année actuels.
 * Permet également de changer l'année et de basculer l'affichage de la liste des mois.
 * 
 * @param {Object} props - Les propriétés du composant.
 * @param {function} props.onMonthPickerClick - Fonction appelée lors du clic sur le sélecteur de mois.
 * @param {number} props.currentMonth - Le mois actuellement sélectionné (0-11).
 * @param {number} props.currentYear - L'année actuellement sélectionnée.
 * @param {Array<string>} props.monthNames - Tableau contenant les noms des mois.
 * @param {function} props.setCurrentYear - Fonction pour définir l'année actuelle.
 * @returns {JSX.Element} Le composant JSX de l'en-tête du calendrier.
 */
const CalendarHeader = ({ onMonthPickerClick, currentMonth, currentYear, monthNames, setCurrentYear }) => {
    return (
        <div className="calendar-header reveal-2">
            <span
                className="month-picker"
                id="month-picker"
                onClick={onMonthPickerClick}
            >
                {/* Affiche le nom du mois actuel */}
                {monthNames[currentMonth]}
            </span>
            <div className="year-picker" id="year-picker">
                {/* Permet de diminuer l'année actuelle */}
                <span className="year-change" id="pre-year" onClick={() => setCurrentYear(prev => prev - 1)}>&lt;</span>
                {/* Affiche l'année actuelle */}
                <span id="year">{currentYear}</span>
                {/* Permet d'augmenter l'année actuelle */}
                <span className="year-change" id="next-year" onClick={() => setCurrentYear(prev => prev + 1)}>&gt;</span>
            </div>
        </div>
    );
};

export default CalendarHeader;
