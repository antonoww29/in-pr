import { useState } from "react";

export default function Test() {
    const questions = [
        {
            text: "Question 1",
            answers: ["A", "B", "C"],
        },
        {
            text: "Question 2",
            answers: ["A", "B", "C"],
        },
        {
            text: "Question 3",
            answers: ["A", "B", "C"],
        },
    ];

    const [screen, setScreen] = useState("start");
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const startTest = () => {
        setScreen("question");
        setCurrentQuestion(0);
    };

    const handleAnswer = () => {
        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setScreen("end");
        }
    };

    const restartTest = () => {
        setScreen("start");
        setCurrentQuestion(0);
    };

    return (
        <div className="test-container">
            { screen === "start" && (
                <button onClick={startTest} className="main-button">
                    Започни теста
                </button>
            )}

            { screen === "question" && (
                <>
                    <p className="question">{questions[currentQuestion].text}</p>

                    <div className="answers-container">
                        {questions[currentQuestion].answers.map((answer, index) => (
                            <button key={index} onClick={handleAnswer} className="answer-button">
                                {answer}
                            </button>
                        ))}
                    </div>
                </>
            )}

            { screen === "end" && (
                <div>
                    <p className="question">Тестът е завършен!</p>
                    <button onClick={restartTest} className="main-button">Рестартирай теста</button>
                </div>
            )}
        </div>
    );
}