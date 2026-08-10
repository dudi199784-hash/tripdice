import Link from "next/link";
import { PhoneFrame, Region, SketchNav, SpecList } from "@/components/sketch";

export default function Home() {
  return (
    <>
      <SketchNav current="/" />
      <PhoneFrame
        title="01 랜딩 / 홈"
        note="가로: 왼쪽 브랜드·카피·CTA / 오른쪽 보드·주사위 비주얼 자리."
      >
        <div className="grid min-h-0 flex-1 grid-cols-[1.05fr_1fr] gap-2 p-2">
          <div className="flex min-h-0 flex-col gap-2">
            <Region label="brand" spec="좌상단" className="flex h-[64px] shrink-0 items-center px-3">
              <p className="mt-3 text-xl font-semibold tracking-tight">TripDice</p>
            </Region>

            <Region
              label="headline"
              spec="한 줄 + 보조"
              className="flex min-h-0 flex-1 flex-col justify-center px-4"
            >
              <p className="mt-4 text-base font-medium leading-snug">주사위가 정한 곳으로 떠난다</p>
              <p className="mt-2 max-w-[260px] text-[11px] leading-relaxed text-[var(--wire)]">
                맵 생성 → 이동 → 현장 인증 → 랜드마크. (카피 임시)
              </p>
            </Region>

            <Region label="cta" spec="primary 1" className="shrink-0 p-2 pt-7">
              <Link
                href="/play"
                className="flex h-11 items-center justify-center rounded-lg bg-[var(--wire-strong)] text-sm font-medium text-white"
              >
                맵 시작하기
              </Link>
            </Region>
          </div>

          <Region label="visual" spec="풀블리드 / Tripo" className="min-h-0">
            <div className="flex h-full items-center justify-center">
              <p className="wire-label mt-4">board + dice landscape</p>
            </div>
          </Region>
        </div>
      </PhoneFrame>

      <SpecList
        items={[
          "기준: 가로 모드 844 × 390 (모바일 랜드스케이프)",
          "좌: brand / headline / CTA · 우: 비주얼",
          "게임 HUD처럼 한 화면에 핵심만, 세로 스크롤 없음",
        ]}
      />
    </>
  );
}
