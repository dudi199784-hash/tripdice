import Link from "next/link";
import { PhoneFrame, Region, SketchNav } from "@/components/sketch";

export default function TilePage() {
  return (
    <>
      <SketchNav current="/tile" />
      <PhoneFrame
        title="03 칸 상세 · 인증"
        note="도착 후: 완료(인증) / 스킵. 인증 성공 시 카테고리 토큰 → 사진 썸네일."
      >
        <div className="flex flex-1 flex-col p-3 pt-6">
          <Region label="place" spec="지명 + 카테고리" className="px-3 py-8">
            <p className="mt-2 text-lg font-semibold">강원도 고성</p>
            <p className="mt-1 text-xs text-[var(--wire)]">카테고리: 자연/바다 · 인증 반경 예정</p>
          </Region>

          <Region label="landmark token" spec="공용 카테고리 / 인증 후 사진" className="mt-3 flex h-[200px] flex-col items-center justify-center gap-2">
            <div className="flex h-24 w-24 items-center justify-center rounded-full border border-dashed border-[var(--wire)]">
              <span className="wire-label">sea icon</span>
            </div>
            <p className="wire-label normal-case tracking-normal">인증 전: 카테고리 토큰</p>
            <div className="mt-2 flex items-center gap-2">
              <div className="h-10 w-10 rounded border border-dashed border-[var(--wire)] bg-[var(--wire-muted)]" />
              <p className="text-[10px] text-[var(--wire)]">인증 후: 사진 썸네일 미리보기</p>
            </div>
          </Region>

          <Region label="auth / mock" spec="데모: 버튼 / 이후 GPS+사진" className="mt-3 px-3 py-8">
            <p className="mt-2 text-xs leading-relaxed text-[var(--wire)]">
              1차 데모는 「인증 완료(목)」만. 위치·카메라 연동은 이후.
            </p>
          </Region>

          <Region label="actions" spec="완료 · 스킵" className="mt-auto grid grid-cols-2 gap-2 p-3 pt-8">
            <button
              type="button"
              className="flex h-12 items-center justify-center rounded-lg bg-[var(--wire-strong)] text-sm font-medium text-white"
            >
              인증 / 랜드마크
            </button>
            <button
              type="button"
              className="flex h-12 items-center justify-center rounded-lg border border-[var(--wire-strong)] text-sm"
            >
              스킵 (잔여 n)
            </button>
            <p className="col-span-2 wire-label normal-case tracking-normal">
              스킵 초과 시 → 맵 리셋 확인 모달(미스케치)
            </p>
          </Region>

          <Link href="/play" className="wire-label mt-2 pb-2 text-center normal-case">
            ← 보드로
          </Link>
        </div>
      </PhoneFrame>

      <ul className="mx-auto mt-4 max-w-[var(--sketch-width)] space-y-1 text-[11px] text-[var(--wire)]">
        <li>· 카테고리 공용 토큰 5~6종 (바다/산/문화/맛집/카페…)</li>
        <li>· 인증 후 대표 = 사용자 사진 썸네일</li>
        <li>· 스킵 횟수·리셋 규칙은 상태바/확인창에서 노출</li>
      </ul>
    </>
  );
}
