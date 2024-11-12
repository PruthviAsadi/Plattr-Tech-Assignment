// src/App.js
import React, { useState, useEffect } from 'react';
import Quiz from './components/Quiz';
import Result from './components/Result';
import './App.css';

const App = () => {
    const [quizComplete, setQuizComplete] = useState(false);
    const [score, setScore] = useState(0);
    const [answers, setAnswers] = useState([]);

    const handleQuizComplete = (finalScore, finalAnswers) => {
        setScore(finalScore);
        setAnswers(finalAnswers);
        setQuizComplete(true);

        // Save the high score to local storage
        const highScore = localStorage.getItem("highScore") || 0;
        if (finalScore > highScore) {
            localStorage.setItem("highScore", finalScore);
        }
    };

    const handleRestart = () => {
        setQuizComplete(false);
        setScore(0);
        setAnswers([]);
    };

    return (
        <div className="app">
            <h1>Quiz Application</h1>
            {quizComplete ? (
                <Result score={score} totalQuestions={5} answers={answers} onRestart={handleRestart} />
            ) : (
                <Quiz onQuizComplete={handleQuizComplete} />
            )}
            <div className="high-score">
                High Score: {localStorage.getItem("highScore") || 0}
            </div>
        </div>
    );
};

export default App;
