import React, {useState} from 'react';

const OpeningHours = () => {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDay = new Date().getDay(); // 0 is Sunday, 1 is Monday, and so on
    const today = daysOfWeek[currentDay];

    const openingHours = {
        Monday: '10:00 am – 04:00 pm',
        Tuesday: '10:00 am – 04:00 pm',
        Wednesday: '10:00 am – 04:00 pm',
        Thursday: '10:00 am – 04:00 pm',
        Friday: '10:00 am – 04:00 pm',
        Saturday: '10:00 am – 03:00 pm',
        Sunday: 'Closed',
    };

    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        <>
            {!isDropdownOpen && (
                <p
                    onClick={toggleDropdown}
                    style={{cursor: 'pointer'}}
                >
                    <span
                        style={{fontWeight: 'bold'}}>
                        {today === 'Sunday' ? 'Closed Today' : 'Open Today '}
                    </span>
                    {openingHours[today]}{' '}
                    <span>&#9660;</span>
                </p>)
            }

            {isDropdownOpen && (
                <div>
                    {daysOfWeek.map(day => (
                        <p
                            key={day}
                            onClick={toggleDropdown}
                            style={{cursor: 'pointer'}}
                        >
                            <span
                                style={{fontWeight: 'bold'}}
                            >{day}:
                            </span>
                            {openingHours[day]}
                            {day === 'Saturday' ? <span>&#9650;</span> : ''}
                        </p>
                    ))}
                </div>
            )}
        </>
    );
};

export default OpeningHours;