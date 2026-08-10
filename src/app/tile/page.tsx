import Link from "next/link";
import { PhoneFrame, Region, SketchNav, SpecList } from "@/components/sketch";

export default function TilePage() {
  return (
    <>
      <SketchNav current="/tile" />
      <PhoneFrame
        title="03 칸 상세 · 인증"
        note="가로: 왼쪽 랜드마크/사진, 오른쪽 지명·설명·인증/스킵."
      >
        <div className="grid min-h-0 flex-1 grid-cols-[1fr_1.1fr] gap-2 p-2">
          <Region
            label="landmark"
            spec="토큰 → 사진"
            className="flex min-h-0 flex-col items-center justify-center gap-2 px-2"
          >
            <div className="mt-4 flex h-28 w-28 items-center justify-center rounded-full border border-dashed border-[var(--wire)]">
              <span className="wire-label">sea icon</span>
            </div>
            <p className="wire-label normal-case tracking-normal">인증 전: 카테고리 토큰</p>
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded border border-dashed border-[var(--wire)] bg-[var(--wire-muted)]" />
              <p className="text-[10px] text-[var(--wire)]">인증 후 썸네일</p>
            </div>
          </Region>

          <div className="flex min-h-0 flex-col gap-2">
            <Region label="place" spec="지명 + 카테고리" className="shrink-0 px-3 py-6">
              <p className="mt-2 text-base font-semibold">강원도 고성</p>
              <p className="mt-1 text-[11px] text-[var(--wire)]">자연/바다 · 인증 반경 예정</p>
            </Region>

            <Region label="auth note" spec="데모→GPS+사진" className="flex min-h-0 flex-1 items-center px-3">
              <p className="mt-3 text-[11px] leading-relaxed text-[var(--wire)]">
                1차 데모는 「인증 완료(목)」. 위치·카메라는 이후.
              </p>
            </Region>

            <Region label="actions" spec="완료 · 스킵" className="shrink-0 grid grid-cols-2 gap-2 p-2 pt-7">
              <button
                type="button"
                className="flex h-11 items-center justify-center rounded-lg bg-[var(--wire-strong)] text-xs font-medium text-white"
              >
                인증 / 랜드마크
              </button>
              <button
                type="button"
                className="flex h-11 items-center justify-center rounded-lg border border-[var(--wire-strong)] text-xs"
              >
                스킵 (잔여 n)
              </button>
              <Link href="/play" className="wire-label col-span-2 text-center normal-case tracking-normal">
                ← 보드로 · 스킵 초과 시 맵 리셋 모달(미스케치)
              </Link>
            </Region>
          </div>
        </div>
      </PhoneFrame>

      <SpecList
        items={[
          "가로 분할: 토큰/사진 | 정보+액션",
          "카테고리 공용 토큰 → 인증 후 사용자 사진",
          "버튼은 우측 하단 HUD처럼 고정",
        ]}
      />
    </>
  );
}
