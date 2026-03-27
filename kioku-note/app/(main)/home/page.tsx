import DayCard from "../../components/DayCard";

export default function Page() {
  const days = Array.from({ length: 30 }, (_, i) => ({
    day: i + 1,
    progress: Math.floor(Math.random() * 100), // 임시
  }));

  return (
    <div className="min-h-screen flex justify-center py-8">
      <div className="w-full max-w-md flex flex-col space-y-4">
        {days.map((d) => (
          <DayCard key={d.day} day={d.day} progress={d.progress} />
        ))}
      </div>
    </div>
  );
}
