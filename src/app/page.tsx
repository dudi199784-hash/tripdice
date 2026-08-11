import { PhoneFrame, Region, SketchNav, SpecList } from "@/components/sketch";
import { LobbySidePanel } from "@/components/LobbySidePanel";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <SketchNav current="/" />
      <PhoneFrame
        title="01 홈 로비"
        note="왼쪽 패널: 보드(기본) / 친구 / 일지 전환. 오른쪽은 아바타."
      >
        <div className="grid h-full min-h-0 grid-cols-[0.95fr_1.25fr] gap-2 p-2">
          <LobbySidePanel />

          <Region label="avatar" spec="기본 = 나만" className="min-h-0 h-full">
            <div className="flex h-full flex-col items-center justify-center gap-2 px-3">
              <div className="mt-4 flex h-[190px] w-[150px] items-end justify-center rounded-[18px] border border-dashed border-[var(--wire)] bg-[var(--wire-muted)]">
                <p className="mb-5 wire-label normal-case tracking-normal">avatar</p>
              </div>
              <p className="text-sm font-medium tracking-tight">닉네임</p>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="flex h-8 items-center justify-center rounded-md border border-[var(--wire-strong)] px-3 text-[11px]"
                >
                  프로필 편집
                </button>
                <Link
                  href="/companion"
                  className="flex h-8 items-center justify-center rounded-md bg-[var(--wire-strong)] px-3 text-[11px] font-medium text-white"
                >
                  단짝 추가
                </Link>
              </div>
            </div>
          </Region>
        </div>
      </PhoneFrame>

      <SpecList
        items={[
          "왼쪽 한 창 고정 크기 · 안쪽에 보드/친구/일지 소형 탭",
          "보드 기본: 없으면 「여행중인 보드가 없습니다」 / 있으면 미니 루프",
          "탭 전환해도 외곽 창·CTA 크기 변하지 않음",
        ]}
      />
    </>
  );
}
