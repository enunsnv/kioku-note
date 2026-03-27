import { getNotionData } from "@/apis/route";
import WordCard from "@/app/components/WordCard";

export default async function Page({
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
    memo: page.properties["메모"]?.rich_text?.[0]?.plain_text || "",
  }));

  const start = (dayNumber - 1) * 10;
  const end = dayNumber * 10;

  const dayWords = words.slice(start, end);

  return (
    <div className="space-y-6">
      {dayWords.map((item, index) => (
        <WordCard
          key={index}
          word={item.word}
          meaning={item.meaning}
          memo={item.memo}
        />
      ))}
    </div>
  );
}
