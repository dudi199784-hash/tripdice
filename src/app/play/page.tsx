import Link from "next/link";
import { PhoneFrame, Region, SketchNav } from "@/components/sketch";

const cells = Array.from({ length: 16 }, (_, i) => i + 1);

export default function PlayPage() {
  return (
    <>
      <SketchNav current="/play" />
      <PhoneFrame
        title="02 보드 플레이"
        note="맵·말·주사위·스킵 잔여. 격자 16칸은 러프(실제 18~24 가변 가능)."
      >
        <div className="flex flex-1 flex-col p-3 pt-6">
          <Region label="status bar" spec="스킵 / 진행" className="flex h-14 items-center justify-between px-3">
            <p className="mt-3 text-xs">스킵 2/3</p>
            <p className="mt-3 text-xs">랜드마크 0/12</p>
          </Region>

          <Region label="board map" spec="정사각 맵 영역" className="mt-3 aspect-square p-3 pt-8">
            <div className="grid h-full grid-cols-4 grid-rows-4 gap-1.5">
              {cells.map((n) => (
                <div
                  key={n}
                  className={`flex items-center justify-center rounded border border-dashed border-[var(--wire)] text-[10px] text-[var(--wire)] ${
                    n === 1 ? "bg-[var(--wire-muted)] font-semibold text-[var(--wire-strong)]" : ""
                  } ${n === 7 ? "ring-2 ring-[var(--wire-strong)]" : ""}`}
                >
                  {n === 1 ? "START" : n === 7 ? "말" : `칸${n}`}
                </div>
              ))}
            </div>
          </Region>

          <Region label="event peek" spec="현재 칸 요약 1줄" className="mt-3 flex h-14 items-center px-3">
            <p className="mt-3 truncate text-xs">도착 후보 예: 강원 고성 · 자연/바다</p>
          </Region>

          <Region label="actions" spec="주사위 + 보조" className="mt-3 grid grid-cols-[1fr_auto] gap-2 p-3 pt-8">
            <button
              type="button"
              className="flex h-12 items-center justify-center rounded-lg bg-[var(--wire-strong)] text-sm font-medium text-white"
            >
              주사위 굴리기
            </button>
            <Link
              href="/tile"
              className="flex h-12 w-20 items-center justify-center rounded-lg border border-[var(--wire-strong)] text-xs"
            >
              칸 상세
            </Link>
          </Region>
        </div>
      </PhoneFrame>

      <ul className="mx-auto mt-4 max-w-[var(--sketch-width)] space-y-1 text-[11px] text-[var(--wire)]">
        <li>· 보드: 화면 중 가장 큰 블록 (정사각 유지)</li>
        <li>· 칸 타입: 여행지 / 이벤트 / START·완주 (아이콘은 Tripo·카테고리 공용)</li>
        <li>· 하단 CTA 고정 느낌, 스크롤 최소화</li>
      </ul>
    </>
  );
}
