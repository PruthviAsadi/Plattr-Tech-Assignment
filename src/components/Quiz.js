// src/components/Quiz.js
import React, { useState } from 'react';
import questionsData from '../data/questions';
import Timer from './Timer';

import './Quiz.css';

const Quiz = ({ onQuizComplete }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [answers, setAnswers] = useState([]);

    const handleAnswer = (selectedAnswer) => {
        const isCorrect = questionsData[currentQuestion].answer === selectedAnswer;
        if (isCorrect) {
            setScore((prevScore) => prevScore + 1);
        }

        setAnswers([
            ...answers,
            {
                question: questionsData[currentQuestion].question,
                selectedAnswer,
                isCorrect,
            },
        ]);

        if (currentQuestion < questionsData.length - 1) {
            setCurrentQuestion((prev) => prev + 1);
        } else {
            onQuizComplete(score + (isCorrect ? 1 : 0), answers);
        }
    };

    const handleTimeout = () => {
        // Automatically move to the next question if time runs out without an answer
        handleAnswer("");
    };

    return (
        <div className="quiz">
            <h2>Question {currentQuestion + 1}</h2>
            <p>{questionsData[currentQuestion].question}</p>
            <div className="options">
                {questionsData[currentQuestion].options.map((option) => (
                    <button key={option} onClick={() => handleAnswer(option)}>
                        {option}
                    </button>
                ))}
            </div>
            <Timer duration={10} onTimeout={handleTimeout} />
        </div>
    );
};

export default Quiz;
