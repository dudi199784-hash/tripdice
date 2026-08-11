import Link from "next/link";
import { PhoneFrame, Region, SketchNav, SpecList } from "@/components/sketch";

type CellKind = "start" | "travel" | "event";

/** 시계방향 8칸 루프. index 0 = START/GOAL */
const loop: { id: number; kind: CellKind; label: string }[] = [
  { id: 0, kind: "start", label: "START" },
  { id: 1, kind: "travel", label: "여행" },
  { id: 2, kind: "event", label: "이벤트" },
  { id: 3, kind: "travel", label: "여행" },
  { id: 4, kind: "event", label: "이벤트" },
  { id: 5, kind: "event", label: "이벤트" },
  { id: 6, kind: "travel", label: "여행" },
  { id: 7, kind: "event", label: "이벤트" },
];

/** 3×3 링 배치: 모서리·변만 칸, 가운데는 비움 */
const ringSlots: (number | null)[] = [
  0, 1, 2, // top
  7, null, 3, // mid (left, center, right)
  6, 5, 4, // bottom (clockwise)
];

const TOKEN_CELL = 3;

export default function PlayPage() {
  return (
    <>
      <SketchNav current="/play" />
      <PhoneFrame
        title="04 보드 플레이"
        note="마블형 띠 루프 · 8칸 (START1 + 여행3 + 이벤트4). 네모 블록 타일 예정."
      >
        <div className="grid min-h-0 flex-1 grid-cols-[1.35fr_0.85fr] gap-2 p-2">
          <Region label="board loop" spec="8칸 한 바퀴" className="min-h-0 p-2 pt-7">
            <div className="grid h-full grid-cols-3 grid-rows-3 gap-1.5">
              {ringSlots.map((cellId, slot) => {
                if (cellId === null) {
                  return (
                    <div
                      key={`c-${slot}`}
                      className="flex items-center justify-center rounded border border-dashed border-[var(--wire)]/50 bg-[var(--wire-muted)]/40"
                    >
                      <p className="px-1 text-center text-[9px] leading-snug text-[var(--wire)]">
                        center
                        <br />
                        status
                      </p>
                    </div>
                  );
                }

                const cell = loop[cellId];
                const isToken = cellId === TOKEN_CELL;
                const kindStyle =
                  cell.kind === "start"
                    ? "bg-[var(--wire-muted)] font-semibold text-[var(--wire-strong)]"
                    : cell.kind === "travel"
                      ? "text-[var(--wire-strong)]"
                      : "text-[var(--wire)]";

                return (
                  <div
                    key={cell.id}
                    className={`flex flex-col items-center justify-center rounded border border-dashed border-[var(--wire)] text-[10px] ${kindStyle} ${
                      isToken ? "ring-2 ring-[var(--wire-strong)]" : ""
                    }`}
                  >
                    <span>{isToken ? "말" : cell.label}</span>
                    <span className="mt-0.5 text-[8px] text-[var(--wire)]">
                      {cell.kind === "start" ? "출발·완주" : cell.kind === "travel" ? "인증" : "효과"}
                    </span>
                  </div>
                );
              })}
            </div>
          </Region>

          <div className="flex min-h-0 flex-col gap-2">
            <Region label="status" spec="스킵 / 랜드마크" className="flex h-[56px] shrink-0 items-center justify-between px-3">
              <p className="mt-3 text-xs">스킵 2/3</p>
              <p className="mt-3 text-xs">LM 0/3</p>
            </Region>

            <Region label="event peek" spec="현재 칸" className="flex min-h-0 flex-1 flex-col justify-center px-3">
              <p className="mt-4 text-xs font-medium">강원 고성</p>
              <p className="mt-1 text-[11px] text-[var(--wire)]">여행지 · 도착 시 인증</p>
              <p className="mt-2 text-[10px] text-[var(--wire)]">주사위 권장 1~3 (8칸용)</p>
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
          "형태: 4×4 격자 → 마블형 띠 루프 8칸",
          "구성: START(=완주) 1 · 여행지 3 · 이벤트 4",
          "칸 비주얼: 네모 디오라마 블록 · 주사위 1~3 권장",
        ]}
      />
    </>
  );
}
