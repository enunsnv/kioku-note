"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
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
  const router = useRouter();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const currentQuiz = quizzes[currentIndex];

  const handleAnswer = (isCorrect: boolean) => {
    if (answered) return;

    setAnswered(true);
    if (isCorrect) setScore((prev) => prev + 1);
  };

  const handleNext = () => {
    if (currentIndex + 1 >= quizzes.length) {
      setIsFinished(true);
    } else {
      setCurrentIndex((prev) => prev + 1);
      setAnswered(false);
    }
  };

  useEffect(() => {
    if (!day || !isFinished) return;

    const percent = Math.round((score / quizzes.length) * 100);

    const saved = JSON.parse(localStorage.getItem("progress") || "{}");
    const key = String(day);

    saved[key] = percent;

    localStorage.setItem("progress", JSON.stringify(saved));
  }, [isFinished, day, score, quizzes.length]);

  if (isFinished) {
    const percent = Math.round((score / quizzes.length) * 100);

    return (
      <div className="flex flex-col items-center justify-center mt-20 text-center animate-fadeIn">
        <p className="text-2xl font-bold mb-4">퀴즈 완료 🎉</p>

        <p className="text-lg">
          점수: {score} / {quizzes.length}
        </p>

        <p className="text-sm text-[#666] mt-2">{percent}% 달성</p>

        <button
          onClick={() => router.push("/home")}
          className="mt-6 px-6 py-3 bg-black text-white rounded-md hover:opacity-90 transition"
        >
          홈으로 ホームへ →
        </button>
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
