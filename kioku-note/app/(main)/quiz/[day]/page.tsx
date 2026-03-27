import { getNotionData } from "@/apis/route";
import QuizContainer from "@/app/components/QuizContainer";

export default async function QuizPage({
  params,
}: {
  params: Promise<{ day: string }>;
}) {
  const { day } = await params;
  const dayNumber = Number(day);

  const data = await getNotionData();

  const words = data.map((page: any) => ({
    word: page.properties["단어"]?.title?.[0]?.plain_text || "",
    meaning: page.properties["주요뜻"]?.rich_text?.[0]?.plain_text || "",
  }));

  const start = (day - 1) * 10;
  const end = day * 10;

  console.log("day:", day);
  console.log("start:", start, "end:", end);

  const quizzes = words.slice(start, end).map((w, _, arr) => {
    const wrong = arr
      .filter((x) => x.meaning !== w.meaning)
      .slice(0, 3)
      .map((x) => x.meaning);

    const options = [w.meaning, ...wrong].sort(() => Math.random() - 0.5);

    return {
      question: w.word,
      answer: w.meaning,
      options,
    };
  });

  return (
    <div className="py-10">
      <QuizContainer key={day} quizzes={quizzes} day={day} />
    </div>
  );
}
