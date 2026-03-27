"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/home");
    }, 2000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-black">
      <div className="text-center animate-fadeIn">
        <p className="text-[16px]">기억 노트</p>
        <p className="text-[28px] mt-1 font-semibold">記憶ノート</p>
        <p className="text-[13px] mt-1 text-[#888]">kioku note</p>
      </div>
    </div>
  );
}
