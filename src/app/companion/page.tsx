import Link from "next/link";
import { PhoneFrame, Region, SketchNav, SpecList } from "@/components/sketch";

export default function CompanionPage() {
  return (
    <>
      <SketchNav current="/companion" />
      <PhoneFrame
        title="02 단짝 추가"
        note="단짝 종류만 고른다: 동물(반려) / 사람(동행). 이후 이름·외형."
      >
        <div className="flex min-h-0 flex-1 flex-col gap-2 p-2">
          <div className="flex shrink-0 items-center justify-between gap-2">
            <Region label="nav" spec="닫기" className="flex h-10 w-24 items-center justify-center">
              <Link href="/" className="mt-2 text-[11px]">
                ← 로비
              </Link>
            </Region>
            <Region label="title" spec="선택" className="flex h-10 flex-1 items-center justify-center">
              <p className="mt-2 text-xs font-medium">누구와 함께 떠날까요?</p>
            </Region>
          </div>

          <div className="grid min-h-0 flex-1 grid-cols-2 gap-2">
            <Region label="animal" spec="반려 · 예: 이브" className="flex min-h-0 flex-col p-3 pt-8">
              <div className="flex flex-1 flex-col items-center justify-center gap-2">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-dashed border-[var(--wire)] bg-[var(--wire-muted)]">
                  <span className="wire-label normal-case">animal</span>
                </div>
                <p className="text-sm font-semibold">동물</p>
                <p className="text-center text-[10px] leading-snug text-[var(--wire)]">
                  실제 반려동물과
                  <br />
                  같이 다니는 단짝
                </p>
              </div>
              <button
                type="button"
                className="mt-2 flex h-10 items-center justify-center rounded-lg bg-[var(--wire-strong)] text-xs font-medium text-white"
              >
                동물 단짝 만들기
              </button>
            </Region>

            <Region label="human" spec="사람 동행" className="flex min-h-0 flex-col p-3 pt-8">
              <div className="flex flex-1 flex-col items-center justify-center gap-2">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-dashed border-[var(--wire)] bg-[var(--wire-muted)]">
                  <span className="wire-label normal-case">person</span>
                </div>
                <p className="text-sm font-semibold">사람</p>
                <p className="text-center text-[10px] leading-snug text-[var(--wire)]">
                  가족과 연인 등
                  <br />
                  함께 여행하는 단짝
                </p>
              </div>
              <button
                type="button"
                className="mt-2 flex h-10 items-center justify-center rounded-lg border border-[var(--wire-strong)] text-xs font-medium"
              >
                사람 단짝 만들기
              </button>
            </Region>
          </div>
        </div>
      </PhoneFrame>

      <SpecList
        items={[
          "단짝 ≠ 친구 초대(멀티). 내 프로필에 붙는 동행 슬롯",
          "선택 후: 이름 → (동물) 종류/외형 or (사람) 아바타 → 저장",
          "없어도 여행 가능 · 있으면 로비·보드에 함께 표시",
        ]}
      />
    </>
  );
}
