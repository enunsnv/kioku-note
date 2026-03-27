import { getNotionData } from "@/apis/route";
import WordCard from "../../components/WordCard";

export default async function Page() {
  const data = await getNotionData();

  const words = data.map((page: any) => {
    return {
      word: page.properties["단어"]?.title?.[0]?.plain_text || "",
      meaning: page.properties["주요뜻"]?.rich_text?.[0]?.plain_text || "",
      memo: page.properties["메모"]?.rich_text?.[0]?.plain_text || "",
    };
  });

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex justify-center py-5">
      {/* 단어 리스트 */}
      <div className="space-y-6">
        {words.map((item: any, index: number) => (
          <WordCard
            key={index}
            word={item.word}
            meaning={item.meaning}
            memo={item.memo}
          />
        ))}
      </div>
    </div>
  );
}
