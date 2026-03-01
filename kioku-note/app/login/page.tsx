export default function Page() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] flex items-center justify-center">
      {/* 카드 컨테이너 */}
      <div
        className="
          relative w-full min-h-screen
          sm:min-h-0 sm:h-auto
          sm:max-w-md
          sm:rounded-xl
          sm:shadow-xl
          sm:bg-white
          px-8
        "
      >
        {/* 워터마크 */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-[18vw] sm:text-[88px] opacity-[0.04] select-none whitespace-nowrap">
          記憶ノート
        </div>

        {/* 콘텐츠 영역 */}
        <div className="pt-32 sm:pt-20 pb-20">
          {/* 타이틀 */}
          <div className="text-center">
            <p className="text-[16px] text-[#1a1a1a]">기억 노트</p>
            <p className="text-[26px] mt-1">記憶ノート</p>
            <p className="text-[13px] text-[#888888] mt-1">kioku note</p>
          </div>

          {/* 구분선 */}
          <div className="w-9 h-[1px] bg-[#1a1a1a] mx-auto mt-6" />

          {/* 이메일 */}
          <div className="mt-10">
            <label className="text-[10px] text-[#888888]">이메일</label>
            <input
              type="email"
              className="w-full bg-transparent border-b border-[#dddddd] focus:border-black focus:outline-none py-3 transition"
            />
          </div>

          {/* 비밀번호 */}
          <div className="mt-6">
            <label className="text-[10px] text-[#888888]">비밀번호</label>
            <input
              type="password"
              className="w-full bg-transparent border-b border-[#dddddd] focus:border-black focus:outline-none py-3 transition"
            />
          </div>

          {/* 로그인 버튼 */}
          <button className="w-full h-14 bg-black text-white mt-8 text-sm tracking-wide hover:opacity-90 transition">
            ログイン · 로그인
          </button>

          {/* 소셜 구분 */}
          <div className="flex items-center mt-10">
            <div className="flex-1 h-px bg-[#dddddd]" />
            <span className="mx-3 text-[10px] text-[#888888]">또는</span>
            <div className="flex-1 h-px bg-[#dddddd]" />
          </div>

          {/* 소셜 버튼 */}
          <div className="flex gap-3 mt-6">
            <button className="flex-1 h-12 bg-white border border-[#dddddd] text-sm hover:bg-gray-50 transition">
              Google
            </button>
            <button className="flex-1 h-12 bg-[#FFE812] border border-[#dddddd] text-sm hover:brightness-95 transition">
              Kakao
            </button>
          </div>
        </div>

        {/* 회원가입 */}
        <div className="absolute bottom-8 w-full left-0 text-center text-xs text-[#888888]">
          처음이신가요? 회원가입
        </div>
      </div>
    </div>
  );
}
