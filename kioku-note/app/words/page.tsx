import { getNotionData } from "@/apis/route";

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
    <div className="min-h-screen bg-[#f5f5f5] flex justify-center py-20">
      <div className="w-full max-w-md bg-white rounded-xl shadow-xl px-8 py-10">
        {/* 타이틀 */}
        <div className="text-center">
          <p className="text-[16px] text-[#1a1a1a]">기억 노트</p>
          <p className="text-[26px] mt-1">記憶ノート</p>
          <p className="text-[13px] text-[#888888] mt-1">kioku note</p>
        </div>

        <div className="w-9 h-[1px] bg-[#1a1a1a] mx-auto mt-6 mb-10" />

        {/* 단어 리스트 */}
        <div className="space-y-6">
          {words.map((item: any, index: number) => (
            <div
              key={index}
              className="border border-[#e5e5e5] rounded-lg p-5 hover:shadow-md transition"
            >
              <p className="text-lg font-medium">{item.word}</p>

              <p className="text-sm text-[#666] mt-2">{item.meaning}</p>

              {item.memo && (
                <p className="text-xs text-[#999] mt-3">{item.memo}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
