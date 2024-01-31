"use client"

import { useState, useEffect } from 'react';
import styles from "./rotatingwords.module.css";

type Props = {
    words: string[];
    className?: string,
    intervalTime?: number,
}

const RotatingWords: React.FC<Props> = ({ words, className, intervalTime = 2500 }) => {

    const filteredWords = words.filter((word): word is string => word !== null && word !== undefined);
    const [currentIndex, setCurrentIndex] = useState(0);

    const change = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredWords.length);
    };

    useEffect(() => {
        const timer = setInterval(change, intervalTime);
        return () => clearInterval(timer);
    }, []);

    const currentWord = filteredWords[currentIndex];
    const previousWord = filteredWords[(currentIndex - 1 + filteredWords.length) % filteredWords.length];

    return <div key={currentWord} className={[styles.rotator, className].join(" ")}>
        <div className={styles.currentWord}>{currentWord}</div>
        <div className={styles.previousWord}>{previousWord}</div>
    </div>;
}

export default RotatingWords;
