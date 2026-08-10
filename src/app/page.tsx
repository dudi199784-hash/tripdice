import Link from "next/link";
import { PhoneFrame, Region, SketchNav, SpecList } from "@/components/sketch";

const friends = ["A", "B", "C", "D", "+"];

export default function Home() {
  return (
    <>
      <SketchNav current="/" />
      <PhoneFrame
        title="01 홈 로비"
        note="첫 설정·기본 홈은 아바타만. 단짝은 선택 — 프로필에서 등록하면 옆에 등장."
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

          <Region label="avatar" spec="기본 = 나만" className="min-h-0">
            <div className="flex h-full flex-col items-center justify-center gap-2 px-3">
              <div className="mt-4 flex h-[210px] w-[160px] items-end justify-center rounded-[18px] border border-dashed border-[var(--wire)] bg-[var(--wire-muted)]">
                <p className="mb-5 wire-label normal-case tracking-normal">avatar</p>
              </div>
              <p className="text-sm font-medium tracking-tight">닉네임</p>
              <button
                type="button"
                className="flex h-8 items-center justify-center rounded-md border border-[var(--wire-strong)] px-4 text-[11px]"
              >
                프로필 편집
              </button>
              <p className="text-[10px] text-[var(--wire)]">단짝은 프로필에서 선택 등록</p>
            </div>
          </Region>
        </div>
      </PhoneFrame>

      <SpecList
        items={[
          "첫 설정·기본 홈: 아바타만 (빈 슬롯/펫 UI 없음)",
          "용어: 펫 X → 단짝 (선택, 실제 동반 여행 톤)",
          "단짝 등록 후에만 아바타 옆·보드 말에 함께 표시",
        ]}
      />
    </>
  );
}
