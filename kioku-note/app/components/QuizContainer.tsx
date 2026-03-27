"use client";

import { useState, useEffect } from "react";
import QuizCard from "./QuizCard";

type Quiz = {
  question: string;
  answer: string;
  options: string[];
};

export default function QuizContainer({
  quizzes,
  day,
}: {
  quizzes: Quiz[];
  day?: number;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);

  const currentQuiz = quizzes[currentIndex];

  const handleAnswer = (isCorrect: boolean) => {
    if (answered) return;

    setAnswered(true);
    if (isCorrect) setScore((prev) => prev + 1);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
    setAnswered(false);
  };

  useEffect(() => {
    setCurrentIndex(0);
    setScore(0);
    setAnswered(false);
  }, [day]);

  useEffect(() => {
    if (!day) return;

    if (currentIndex !== quizzes.length) return;

    const percent = Math.round((score / quizzes.length) * 100);

    const saved = JSON.parse(localStorage.getItem("progress") || "{}");

    const key = String(day);
    saved[key] = percent; // ⭐ Math.max 제거 (덮어쓰기)

    localStorage.setItem("progress", JSON.stringify(saved));
  }, [currentIndex, day, quizzes.length, score]);

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
      {/* 진행도 */}
      <p className="text-sm text-[#888] mb-4">
        {currentIndex + 1} / {quizzes.length}
      </p>

      <QuizCard key={currentIndex} quiz={currentQuiz} onAnswer={handleAnswer} />

      <button
        onClick={handleNext}
        disabled={!answered}
        className={`mt-6 w-full py-3 rounded-md ${
          answered ? "bg-black text-white" : "bg-gray-300"
        }`}
      >
        다음 문제 →
      </button>
    </div>
  );
}
