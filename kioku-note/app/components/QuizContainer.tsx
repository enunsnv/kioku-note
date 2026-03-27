"use client";

import { useState } from "react";
import QuizCard from "./QuizCard";

type Quiz = {
  question: string;
  answer: string;
  options: string[];
};

export default function QuizContainer({ quizzes }: { quizzes: Quiz[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);

  const currentQuiz = quizzes[currentIndex];

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) setScore((prev) => prev + 1);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  if (currentIndex >= quizzes.length) {
    return (
      <div className="text-center">
        <p className="text-xl font-semibold">퀴즈 완료 🎉</p>
        <p className="mt-3">
          점수: {score} / {quizzes.length}
        </p>
      </div>
    );
  }

  return (
    <div>
      <p className="text-sm text-[#888] mb-4">
        {currentIndex + 1} / {quizzes.length}
      </p>

      <QuizCard key={currentIndex} quiz={currentQuiz} onAnswer={handleAnswer} />

      <button
        onClick={handleNext}
        className="mt-6 w-full py-3 bg-black text-white rounded-md"
      >
        다음 문제 →
      </button>
    </div>
  );
}
