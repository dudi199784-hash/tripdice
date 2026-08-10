import Link from "next/link";
import { PhoneFrame, Region, SketchNav, SpecList } from "@/components/sketch";

const friends = ["A", "B", "C", "D", "+"];

export default function Home() {
  return (
    <>
      <SketchNav current="/" />
      <PhoneFrame
        title="01 홈 로비"
        note="로비: 아바타 메인 · 펫은 선택 슬롯 · 닉네임/프로필 편집 · 여행 시작."
      >
        <div className="grid min-h-0 flex-1 grid-cols-[0.95fr_1.25fr] gap-2 p-2">
          <div className="flex min-h-0 flex-col gap-2">
            <Region label="brand" spec="좌상단" className="flex h-[48px] shrink-0 items-center px-3">
              <p className="mt-2 text-lg font-semibold tracking-tight">TripDice</p>
            </Region>

            <Region
              label="friends"
              spec="레일 · 같이 떠나기"
              className="flex min-h-0 flex-1 flex-col justify-center px-2 pt-2"
            >
              <div className="mt-5 flex items-center gap-2 overflow-hidden px-1">
                {friends.map((f) => (
                  <div
                    key={f}
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-dashed border-[var(--wire)] text-[10px] ${
                      f === "+" ? "bg-[var(--wire-muted)]" : ""
                    }`}
                  >
                    {f === "+" ? "+" : f}
                  </div>
                ))}
              </div>
              <p className="mt-2 px-1 text-[10px] text-[var(--wire)]">
                친구 선택 → 같은 맵 초대 (1차: UI만)
              </p>
              <button
                type="button"
                className="mx-1 mt-2 flex h-8 items-center justify-center rounded-md border border-[var(--wire-strong)] text-[11px]"
              >
                친구와 떠나기
              </button>
            </Region>

            <Region label="cta" spec="Start 大" className="shrink-0 p-2 pt-7">
              <Link
                href="/mode"
                className="flex h-11 items-center justify-center rounded-lg bg-[var(--wire-strong)] text-sm font-medium text-white"
              >
                여행 시작
              </Link>
            </Region>
          </div>

          <Region label="avatar + pet?" spec="펫은 선택" className="min-h-0">
            <div className="flex h-full flex-col items-center justify-center gap-2 px-3">
              <div className="mt-3 flex items-end justify-center gap-2">
                <div className="flex h-[200px] w-[140px] items-end justify-center rounded-[18px] border border-dashed border-[var(--wire)] bg-[var(--wire-muted)]">
                  <p className="mb-5 wire-label normal-case tracking-normal">avatar</p>
                </div>
                <div className="mb-1 flex h-[110px] w-[90px] flex-col items-center justify-center rounded-[14px] border border-dashed border-[var(--wire)] bg-white px-1">
                  <p className="text-center text-[10px] leading-snug text-[var(--wire)]">
                    pet
                    <br />
                    optional
                  </p>
                  <button
                    type="button"
                    className="mt-2 text-[10px] font-medium text-[var(--wire-strong)]"
                  >
                    + 펫 추가
                  </button>
                </div>
              </div>
              <p className="text-sm font-medium tracking-tight">닉네임</p>
              <button
                type="button"
                className="flex h-8 items-center justify-center rounded-md border border-[var(--wire-strong)] px-4 text-[11px]"
              >
                프로필 편집
              </button>
            </div>
          </Region>
        </div>
      </PhoneFrame>

      <SpecList
        items={[
          "핵심은 여행 재미 · 펫은 선택(없어도 로비/플레이 가능)",
          "펫 있으면 아바타 옆에 표시 · 없으면 + 펫 추가 슬롯",
          "좌: 친구 · 여행 시작 → 모드",
        ]}
      />
    </>
  );
}
