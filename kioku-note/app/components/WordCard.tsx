type WordCardProps = {
  word: string;
  meaning: string;
  memo?: string;
};

export default function WordCard({ word, meaning, memo }: WordCardProps) {
  return (
    <div className="border border-[#e5e5e5] rounded-lg p-5 hover:shadow-md transition">
      <p className="text-lg font-medium">{word}</p>

      <p className="text-sm text-[#666] mt-2">{meaning}</p>

      {memo && <p className="text-xs text-[#999] mt-3">{memo}</p>}
    </div>
  );
}