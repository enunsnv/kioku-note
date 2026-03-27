import { getNotionData } from "@/apis/route";
import WordCard from "@/app/components/WordCard";

import Link from "next/link";

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
    <div className="space-y-5">
      <Link href={`/quiz?day=${dayNumber}`}>
        <button className="w-full py-3 bg-black text-white rounded-md mb-5">
          퀴즈 시작 : クイズ スタート →
        </button>
      </Link>

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
