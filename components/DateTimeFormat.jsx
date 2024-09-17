// components/DateTimeFormat.jsx
import React from 'react';
import useDateTime from '../hooks/useDateTime.js';


/**
 * Composant DateTimeFormat
 * 
 * Affiche la date et l'heure actuelles avec des styles dynamiques en fonction des classes CSS
 * passées en props. Utilise le hook `useDateTime` pour obtenir la date et l'heure formatées.
 * 
 * @param {Object} props - Les propriétés du composant.
 * @param {string} props.dateTimeFormatClass - Classe CSS pour le format de la date et de l'heure.
 * @param {string} props.timeFormatClass - Classe CSS pour le format de l'heure.
 * @param {string} props.dateFormatClass - Classe CSS pour le format de la date.
 * @param {string} props.dayTextFormatClass - Classe CSS pour le format du texte du jour.
 * 
 * @returns {JSX.Element} Le composant DateTimeFormat.
 */
const DateTimeFormat = ({ dateTimeFormatClass, timeFormatClass, dateFormatClass, dayTextFormatClass }) => {
    // Utilise le hook `useDateTime` pour obtenir la date et l'heure formatées.
    const { currentDateFormatted, timeFormatted } = useDateTime()

    return (
        <div className={`date-time-formate ${dateTimeFormatClass}`}>
            {/* Affiche le texte du jour avec le style approprié. */}
            <div className={`day-text-formate ${dayTextFormatClass}`}>Today</div>
            <div className={`date-time-value ${dateTimeFormatClass}`}>
                {/* Affiche l'heure formatée avec le style approprié. */}
                <div className={`time-formate ${timeFormatClass}`}>{timeFormatted}</div>
                {/* Affiche la date formatée avec le style approprié. */}
                <div className={`date-formate ${dateFormatClass}`}>{currentDateFormatted}</div>
            </div>
        </div>
    )
}

export default DateTimeFormat;
