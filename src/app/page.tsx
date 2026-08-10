import Link from "next/link";
import { PhoneFrame, Region, SketchNav, SpecList } from "@/components/sketch";

export default function Home() {
  return (
    <>
      <SketchNav current="/" />
      <PhoneFrame
        title="01 랜딩 / 홈"
        note="가로: 왼쪽 브랜드·카피·CTA / 오른쪽 내 아바타가 메인 비주얼."
      >
        <div className="grid min-h-0 flex-1 grid-cols-[0.9fr_1.2fr] gap-2 p-2">
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
              <p className="mt-2 max-w-[240px] text-[11px] leading-relaxed text-[var(--wire)]">
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

          <Region label="avatar" spec="메인 · Tripo 3D" className="min-h-0">
            <div className="flex h-full flex-col items-center justify-center gap-2 px-3">
              <div className="mt-5 flex h-[210px] w-[160px] items-end justify-center rounded-[18px] border border-dashed border-[var(--wire)] bg-[var(--wire-muted)]">
                <p className="mb-6 text-center text-[11px] leading-snug text-[var(--wire-strong)]">
                  player avatar
                  <br />
                  <span className="wire-label normal-case tracking-normal">전신 / 히어로</span>
                </p>
              </div>
              <p className="wire-label normal-case tracking-normal">보드·주사위는 플레이 화면에서</p>
            </div>
          </Region>
        </div>
      </PhoneFrame>

      <SpecList
        items={[
          "홈 메인 비주얼 = 내 아바타 (우측 넓은 영역)",
          "좌: brand / headline / CTA",
          "아바타 에셋은 Tripo · 보드 비주얼은 /play로 분리",
        ]}
      />
    </>
  );
}
