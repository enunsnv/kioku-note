import Title from "../components/Title";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#f5f5f5] flex justify-center py-20">
      <div className="w-full max-w-md bg-white rounded-xl shadow-xl px-8 py-10">
        
        <Title
          title="기억 노트"
          subtitle="記憶ノート"
          romanized="kioku note"
        />

        {children}
      </div>
    </div>
  );
}