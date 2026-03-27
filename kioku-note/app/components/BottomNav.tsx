"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNav() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <div className="fixed bottom-0 w-full max-w-md bg-white border-t border-[#eee] flex justify-around py-3">
      {/* 홈 */}
      <Link href="/">
        <div className="flex flex-col items-center text-sm">
          <span className={isActive("/") ? "font-semibold" : "text-[#999]"}>
            홈
          </span>
        </div>
      </Link>

      {/* 전체 단어 */}
      <Link href="/words">
        <div className="flex flex-col items-center text-sm">
          <span
            className={isActive("/words") ? "font-semibold" : "text-[#999]"}
          >
            전체 단어
          </span>
        </div>
      </Link>
    </div>
  );
}
