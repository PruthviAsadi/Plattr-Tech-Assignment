// src/components/Result.js
import React from 'react';
import './Result.css';

const Result = ({ score, totalQuestions, answers, onRestart }) => {
    return (
        <div className="result">
            <h2>Quiz Results</h2>
            <p>You scored {score} out of {totalQuestions}</p>
            <div className="feedback">
                {score >= 4 ? "Well done!" : "Try again!"}
            </div>
            <div className="answers-summary">
                {answers.map((answer, index) => (
                    <div key={index} className={`answer ${answer.isCorrect ? 'correct' : 'incorrect'}`}>
                        {index + 1}. {answer.question} - Your answer: {answer.selectedAnswer || "None"}
                    </div>
                ))}
            </div>
            <button onClick={onRestart}>Restart Quiz</button>
        </div>
    );
};

export default Result;
