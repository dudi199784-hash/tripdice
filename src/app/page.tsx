import Link from "next/link";
import { PhoneFrame, Region, SketchNav, SpecList } from "@/components/sketch";

const friends = ["A", "B", "C", "D", "+"];

export default function Home() {
  return (
    <>
      <SketchNav current="/" />
      <PhoneFrame
        title="01 홈 로비"
        note="마블류 로비 문법: 아바타 쇼룸 + 큰 여행 시작 + 친구 레일. 보드는 여기 없음."
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

            <Region label="cta" spec="Start 大 / 꾸미기 小" className="shrink-0 space-y-1.5 p-2 pt-7">
              <Link
                href="/mode"
                className="flex h-11 items-center justify-center rounded-lg bg-[var(--wire-strong)] text-sm font-medium text-white"
              >
                여행 시작
              </Link>
              <button
                type="button"
                className="flex h-8 w-full items-center justify-center rounded-md text-[11px] text-[var(--wire-strong)] underline-offset-2"
              >
                꾸미기
              </button>
            </Region>
          </div>

          <Region label="avatar showroom" spec="메인 · Tripo" className="min-h-0">
            <div className="flex h-full flex-col items-center justify-center gap-1.5 px-3">
              <p className="wire-label mt-4">title slot · 선택</p>
              <div className="flex h-[220px] w-[170px] items-end justify-center rounded-[18px] border border-dashed border-[var(--wire)] bg-[var(--wire-muted)]">
                <p className="mb-5 text-center text-[11px] leading-snug text-[var(--wire-strong)]">
                  my avatar
                  <br />
                  <span className="wire-label normal-case tracking-normal">쇼룸 / 포디움</span>
                </p>
              </div>
              <p className="wire-label normal-case tracking-normal">완주 보상 → 스킨 (예정)</p>
            </div>
          </Region>
        </div>
      </PhoneFrame>

      <SpecList
        items={[
          "로비: 캐릭터 메인 + Start → 모드 선택 (보드 비노출)",
          "좌: 친구 레일 / 친구와 떠나기 · 우: 아바타 쇼룸",
          "CTA 위계: 여행 시작 ≫ 꾸미기 · 친구와",
        ]}
      />
    </>
  );
}
