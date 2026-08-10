import Link from "next/link";
import { PhoneFrame, Region, SketchNav, SpecList } from "@/components/sketch";

const cells = Array.from({ length: 16 }, (_, i) => i + 1);

export default function PlayPage() {
  return (
    <>
      <SketchNav current="/play" />
      <PhoneFrame
        title="03 보드 플레이"
        note="가로 게임 레이아웃: 맵이 좌측 넓게, 우측 HUD(상태·요약·주사위)."
      >
        <div className="grid min-h-0 flex-1 grid-cols-[1.35fr_0.85fr] gap-2 p-2">
          <Region label="board map" spec="메인 플레이 영역" className="min-h-0 p-2 pt-7">
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

          <div className="flex min-h-0 flex-col gap-2">
            <Region label="status" spec="스킵 / 진행" className="flex h-[56px] shrink-0 items-center justify-between px-3">
              <p className="mt-3 text-xs">스킵 2/3</p>
              <p className="mt-3 text-xs">LM 0/12</p>
            </Region>

            <Region label="event peek" spec="현재 칸 1~2줄" className="flex min-h-0 flex-1 flex-col justify-center px-3">
              <p className="mt-4 text-xs font-medium">강원 고성</p>
              <p className="mt-1 text-[11px] text-[var(--wire)]">자연/바다 · 도착 시 인증</p>
            </Region>

            <Region label="actions" spec="주사위 HUD" className="shrink-0 space-y-2 p-2 pt-7">
              <button
                type="button"
                className="flex h-11 w-full items-center justify-center rounded-lg bg-[var(--wire-strong)] text-sm font-medium text-white"
              >
                주사위 굴리기
              </button>
              <Link
                href="/tile"
                className="flex h-9 w-full items-center justify-center rounded-lg border border-[var(--wire-strong)] text-xs"
              >
                칸 상세
              </Link>
            </Region>
          </div>
        </div>
      </PhoneFrame>

      <SpecList
        items={[
          "보드 = 가로 화면의 주인공 (왼쪽 ~60%)",
          "우측 패널: 상태 / 칸 요약 / 주사위 (게임 HUD)",
          "세로 스크롤 없이 한 화면에 플레이 루프",
        ]}
      />
    </>
  );
}
