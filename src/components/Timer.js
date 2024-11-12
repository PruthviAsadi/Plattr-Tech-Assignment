// src/components/Timer.js
import React, { useEffect, useState } from 'react';
import './Timer.css';

const Timer = ({ duration, onTimeout }) => {
    const [timeLeft, setTimeLeft] = useState(duration);

    useEffect(() => {
        if (timeLeft <= 0) {
            onTimeout();
            return;
        }

        const countdown = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - 1);
        }, 1000);

        return () => clearInterval(countdown);
    }, [timeLeft, onTimeout]);

    return (
        <div className="timer">
            Time left: {timeLeft} seconds
        </div>
    );
};

export default Timer;
