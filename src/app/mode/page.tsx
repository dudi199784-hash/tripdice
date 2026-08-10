import Link from "next/link";
import { PhoneFrame, Region, SketchNav, SpecList } from "@/components/sketch";

const regions = ["서울", "경기", "강원", "충청", "전라", "경상", "제주", "인천"];

export default function ModePage() {
  return (
    <>
      <SketchNav current="/mode" />
      <PhoneFrame
        title="02 모드 선택"
        note="1차: 국내만. 국내 전체 or 8도 다중선택 → 맵 생성."
      >
        <div className="flex min-h-0 flex-1 flex-col gap-2 p-2">
          <div className="flex shrink-0 items-center justify-between gap-2">
            <Region label="nav" spec="뒤로" className="flex h-10 w-24 items-center justify-center">
              <Link href="/" className="mt-2 text-[11px]">
                ← 로비
              </Link>
            </Region>
            <Region label="scope" spec="1차 국내" className="flex h-10 flex-1 items-center justify-center">
              <p className="mt-2 text-xs font-medium">국내 여행</p>
            </Region>
          </div>

          <div className="grid min-h-0 flex-1 grid-cols-2 gap-2">
            <Region label="option A" spec="한 방" className="flex min-h-0 flex-col p-3 pt-8">
              <p className="text-sm font-semibold">국내 전체</p>
              <p className="mt-1 flex-1 text-[11px] leading-relaxed text-[var(--wire)]">
                전국 랜덤 범위. 빠르고 넓은 탐험.
              </p>
              <Link
                href="/play"
                className="mt-2 flex h-10 items-center justify-center rounded-lg bg-[var(--wire-strong)] text-xs font-medium text-white"
              >
                맵 생성
              </Link>
            </Region>

            <Region label="option B" spec="다중선택" className="flex min-h-0 flex-col p-3 pt-8">
              <p className="text-sm font-semibold">지역 고르기</p>
              <p className="mt-1 text-[10px] text-[var(--wire)]">8도 · 여러 개 선택 가능</p>
              <div className="mt-2 grid flex-1 grid-cols-4 gap-1 content-start">
                {regions.map((r) => (
                  <div
                    key={r}
                    className="flex h-8 items-center justify-center rounded border border-dashed border-[var(--wire)] text-[10px]"
                  >
                    {r}
                  </div>
                ))}
              </div>
              <Link
                href="/play"
                className="mt-2 flex h-10 items-center justify-center rounded-lg border border-[var(--wire-strong)] text-xs font-medium"
              >
                선택 후 맵 생성
              </Link>
            </Region>
          </div>
        </div>
      </PhoneFrame>

      <SpecList
        items={[
          "홈 Start → 이 화면 → 맵 생성 → /play",
          "해외/기타 모드는 잠금·이후",
          "친구와 떠나기도 같은 모드 선택 후 맵 시드 공유(예정)",
        ]}
      />
    </>
  );
}
