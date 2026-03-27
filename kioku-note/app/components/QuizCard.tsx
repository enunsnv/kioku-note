"use client";

import { useState } from "react";

type Quiz = {
  question: string;
  answer: string;
  options: string[];
};

export default function QuizCard({
  quiz,
  onAnswer,
}: {
  quiz: Quiz;
  onAnswer: (isCorrect: boolean) => void;
}) {
  const [selected, setSelected] = useState<string | null>(null);

  const handleClick = (option: string) => {
    if (selected) return;

    setSelected(option);
    onAnswer(option === quiz.answer);
  };

  return (
    <div className="border rounded-lg p-6">
      <p className="text-lg font-semibold">{quiz.question}</p>

      <div className="mt-5 space-y-3">
        {quiz.options.map((opt, i) => {
          const isSelected = selected === opt;
          const correct = opt === quiz.answer;

          return (
            <button
              key={i}
              onClick={() => handleClick(opt)}
              className={`w-full text-left px-4 py-3 rounded-md border transition
                ${
                  selected
                    ? correct
                      ? "bg-green-100 border-green-400"
                      : isSelected
                      ? "bg-red-100 border-red-400"
                      : "bg-white"
                    : "hover:bg-gray-50"
                }
              `}
            >
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}