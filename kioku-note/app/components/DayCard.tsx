import Link from "next/link";

type DayCardProps = {
  day: number;
  progress: number;
};

export default function DayCard({ day, progress }: DayCardProps) {
  return (
    <Link href={`/day/${day}`}>
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
