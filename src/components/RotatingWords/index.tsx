"use client"

import { useState, useEffect } from 'react';

import styles from "./rotatingwords.module.css";

type Props = {
    words: string[];
    className?: string,
    intervalTime?: number,
}

const RotatingWords: React.FC<Props> = ({ words, className, intervalTime = 2500 }) => {
    const [previousWord, setPreviousWord] = useState("");
    const [currentWord, setCurrentWord] = useState(words[0]);

    const change = () => {
        const nextWordIndex = (words.indexOf(currentWord) + 1) % words.length;
        const nextWord = words[nextWordIndex];

        setPreviousWord(currentWord);
        setCurrentWord(nextWord);
    };

    useEffect(() => {
        const timer = setInterval(change, intervalTime);
        return () => clearInterval(timer);
    }, [currentWord, words]);

    return <div key={currentWord} className={[styles.rotator, className].join(" ")}>
        <div className={styles.currentWord}>{currentWord}</div>
        <div className={styles.previousWord}>{previousWord}</div>
    </div>;
}


export default RotatingWords;