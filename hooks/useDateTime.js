// hooks/useDateTime.js
import { useState, useEffect } from 'react';


const useDateTime = () => {
    const [currentDateFormatted, setCurrentDateFormatted] = useState('');
    const [timeFormatted, setTimeFormatted] = useState('');

    useEffect(() => {
        const updateDateTime = () => {
            const now = new Date();
            
            const dateOptions = {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                weekday: 'long'
            };

            const timeOptions = {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            };

            setCurrentDateFormatted(now.toLocaleDateString('en-US', dateOptions));
            setTimeFormatted(now.toLocaleTimeString('en-US', timeOptions));
        };

        updateDateTime(); // Initial call to set the values immediately
        const intervalId = setInterval(updateDateTime, 1000); // Update every second

        return () => clearInterval(intervalId); // Cleanup on component unmount
    }, []);

    return {
        currentDateFormatted,
        timeFormatted
    };
};

export default useDateTime;
