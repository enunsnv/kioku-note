"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type DayCardProps = {
  day: number;
  progress: number;
};

export default function DayCard({ day }: DayCardProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("progress") || "{}");
    setProgress(saved[String(day)] || 0);
  }, [day]);

  return (
    <Link href={`/day/${day}`} className="block">
      <div className="border border-[#e5e5e5] rounded-lg p-5 hover:shadow-md transition cursor-pointer">
        <p className="text-lg font-semibold">DAY {day}</p>

        <div className="mt-3">
          <div className="w-full h-2 bg-[#eee] rounded-full">
            <div
              className="h-2 bg-black rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-xs text-[#888] mt-2">{progress}% 완료</p>
        </div>
      </div>
    </Link>
  );
}
