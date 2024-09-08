// hooks/useCalendar.js
import { useState, useEffect } from 'react';


const isLeapYear = (year) => (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));

const getFebDays = (year) => isLeapYear(year) ? 29 : 28;

const useCalendar = () => {
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    const [showMonthList, setShowMonthList] = useState(false);

    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const toggleMonthList = () => setShowMonthList(prev => !prev);

    const handleMonthSelect = (month) => {
        setCurrentMonth(month);
        setShowMonthList(false); // Fermer la liste des mois
    };

    const generateCalendarDays = (month, year) => {
        const daysOfMonth = [
            31, getFebDays(year), 31, 30, 31, 30,
            31, 31, 30, 31, 30, 31
        ];

        const firstDay = new Date(year, month).getDay();
        const days = [];

        for (let i = 0; i < daysOfMonth[month] + firstDay; i++) {
            if (i >= firstDay) {
                const dayNumber = i - firstDay + 1;
                days.push({
                    day: dayNumber,
                    isCurrentDate: (
                        dayNumber === new Date().getDate() &&
                        year === new Date().getFullYear() &&
                        month === new Date().getMonth()
                    )
                });
            } else {
                days.push({ day: null, isCurrentDate: false });
            }
        }

        return days;
    };

    useEffect(() => {
        generateCalendarDays(currentMonth, currentYear);
    }, [currentMonth, currentYear]);

    return {
        currentMonth,
        currentYear,
        monthNames,
        generateCalendarDays,
        showMonthList,
        toggleMonthList,
        handleMonthSelect,
        setCurrentYear
    };
};

export default useCalendar;
