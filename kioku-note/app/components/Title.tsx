type TitleProps = {
  title: string;
  subtitle: string;
  romanized?: string;
};

export default function Title({ title, subtitle, romanized }: TitleProps) {
  return (
    <div className="text-center">
      <p className="text-[16px] text-[#1a1a1a]">{title}</p>
      <p className="text-[26px] mt-1">{subtitle}</p>
      {romanized && (
        <p className="text-[13px] text-[#888888] mt-1">{romanized}</p>
      )}

      <div className="w-9 h-[1px] bg-[#1a1a1a] mx-auto mt-6 mb-3" />
    </div>
  );
}
