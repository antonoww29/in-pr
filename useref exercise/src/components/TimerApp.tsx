import { useState, useRef } from 'react';

export default function TimerApp() {
    const [time, setTime] = useState(0);
    const [timerStatus, setTimerStatus] = useState('Stopped');
    const intervalRef = useRef<number | null>(null);

    const startTimer = () => {
        if (intervalRef.current !== null) {
            return;
        }

        intervalRef.current = setInterval(() => {
            setTime(prev => prev + 1);
        }, 1000);

        setTimerStatus('Running');
    };

    const pauseTimer = () => {
        if (intervalRef.current !== null) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }

        setTimerStatus('Paused');
    };
    
    const resetTimer = () => {
        if (intervalRef.current !== null) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }

        setTime(0);
        setTimerStatus('Stopped');
    };

    return (
        <div className="app-container">
            <h1>Timer:</h1>
            <h2>{time} seconds</h2>
            <h2>Timer status: {timerStatus}</h2>
            <div className="button-group">
                <button className="btn-start" onClick={startTimer}>Start</button>
                <button className="btn-pause" onClick={pauseTimer}>Pause</button>
                <button className="btn-reset" onClick={resetTimer}>Reset</button>
            </div>
        </div>
    );
}