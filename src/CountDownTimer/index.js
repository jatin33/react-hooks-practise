import React, { useState, useEffect, useRef } from 'react';
import formatInMMSS from './utils/format';
import voice from '../static/ending.mp3';
import styles from './index.module.css';

// in last 10 secs change color to red
// on end play alarm sound
// style like a card with shadow and rounded corners

function CountDownTimer(props) {
    const [ timeLeft, setTimeLeft ]= useState(props.time);
    let interval = useRef(null); //remains same between re-renders
    let audioTag = useRef(null);

    function updater() {
            setTimeLeft(prevTimeLeft => prevTimeLeft - 1);
    }

    useEffect(() => {
        if (interval.current === null) {
            interval.current = setInterval(updater, 1000);
        }
        
        if (timeLeft <= 0) {
            audioTag.current.play();
            clearInterval(interval.current)
        }
    }, [timeLeft]);

    // used when component unmounts and here timer gets removed
    // so no state updates happen on unmounted component
    useEffect(() => {
        return function cleanup() {
            clearInterval(interval.current);
        }
    }, []);

    return (
        <>
        <div className={styles.container}>Time remaining: {formatInMMSS(timeLeft)}</div>
        <audio hidden src={voice} ref={audioTag} />
        </>
    )
}

export default CountDownTimer;