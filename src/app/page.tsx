import Link from "next/link";
import { PhoneFrame, Region, SketchNav } from "@/components/sketch";

export default function Home() {
  return (
    <>
      <SketchNav current="/" />
      <PhoneFrame
        title="01 랜딩 / 홈"
        note="첫 화면: 브랜드 + 한 줄 소개 + CTA 하나. 지도/보드 비주얼은 나중에."
      >
        <div className="flex flex-1 flex-col p-3 pt-8">
          <Region label="brand" spec="상단 ~20%" className="flex h-[140px] items-center justify-center">
            <p className="mt-4 text-center text-2xl font-semibold tracking-tight">TripDice</p>
          </Region>

          <Region
            label="hero / headline"
            spec="한 줄 + 보조 한 문장"
            className="mt-3 flex flex-1 flex-col items-center justify-center px-4 py-10 text-center"
          >
            <p className="mt-4 text-lg font-medium leading-snug">주사위가 정한 곳으로 떠난다</p>
            <p className="mt-3 max-w-[240px] text-xs leading-relaxed text-[var(--wire)]">
              맵 생성 → 이동 → 현장 인증 → 랜드마크. (카피 임시)
            </p>
          </Region>

          <Region label="visual placeholder" spec="풀블리드 예정 / Tripo" className="mt-3 h-[180px]">
            <div className="flex h-full items-center justify-center">
              <p className="wire-label mt-4">board / dice mock</p>
            </div>
          </Region>

          <Region label="cta" spec="primary 1개" className="mt-3 p-3 pt-8">
            <Link
              href="/play"
              className="mt-2 flex h-12 items-center justify-center rounded-lg bg-[var(--wire-strong)] text-sm font-medium text-white"
            >
              맵 시작하기
            </Link>
            <p className="wire-label mt-2 text-center normal-case tracking-normal">
              secondary 없음 (히어로 예산 유지)
            </p>
          </Region>
        </div>
      </PhoneFrame>

      <SpecList
        items={[
          "기준 폭: 390px (iPhone 계열)",
          "구역: brand / headline / visual / CTA",
          "CTA: 맵 생성·플레이 진입 1개",
          "비주얼: 보드·주사위 자리만 확보",
        ]}
      />
    </>
  );
}

function SpecList({ items }: { items: string[] }) {
  return (
    <ul className="mx-auto mt-4 max-w-[var(--sketch-width)] space-y-1 text-[11px] text-[var(--wire)]">
      {items.map((item) => (
        <li key={item}>· {item}</li>
      ))}
    </ul>
  );
}
