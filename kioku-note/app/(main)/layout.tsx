import Title from "../components/Title";
import BottomNav from "../components/BottomNav";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex justify-center">
      <div className="w-full max-w-md min-h-screen bg-white flex flex-col">
        <div className="px-6 pt-10">
          <Title
            title="기억 노트"
            subtitle="記憶ノート"
            romanized="kioku note"
          />
        </div>

        <div className="flex-1 px-6 pb-24">{children}</div>

        <BottomNav />
      </div>
    </div>
  );
}
