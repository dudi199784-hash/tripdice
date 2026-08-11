"use client";

import Link from "next/link";
import { useState } from "react";
import { Region } from "@/components/sketch";

type Panel = "board" | "friends" | "journal";

const friends = ["A", "B", "C", "D", "+"];

const journalEntries = [
  { place: "강원 고성", note: "바다 냄새가 좋았다" },
  { place: "경주", note: "첨성대 앞에서 인증" },
];

const tabs: { id: Panel; label: string }[] = [
  { id: "board", label: "보드" },
  { id: "friends", label: "친구" },
  { id: "journal", label: "일지" },
];

export function LobbySidePanel() {
  const [panel, setPanel] = useState<Panel>("board");
  const [hasActiveBoard, setHasActiveBoard] = useState(false);

  return (
    <div className="flex min-h-0 flex-col gap-2">
      <Region label="brand" spec="좌상단" className="flex h-[40px] shrink-0 items-center px-3">
        <p className="mt-2 text-lg font-semibold tracking-tight">TripDice</p>
      </Region>

      <Region label="panel tabs" spec="보드 기본" className="shrink-0 px-2 pb-2 pt-7">
        <div className="flex gap-1">
          {tabs.map((tab) => {
            const active = panel === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setPanel(tab.id)}
                className={`flex-1 rounded-md py-1.5 text-[11px] font-medium ${
                  active
                    ? "bg-[var(--wire-strong)] text-white"
                    : "border border-dashed border-[var(--wire)] text-[var(--wire-strong)]"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </Region>

      <Region
        label={panel}
        spec={panel === "board" ? "기본 패널" : panel === "friends" ? "소셜" : "기록"}
        className="flex min-h-0 flex-1 flex-col px-2 pb-2 pt-7"
      >
        {panel === "board" ? (
          <BoardPanel hasActiveBoard={hasActiveBoard} onTogglePreview={() => setHasActiveBoard((v) => !v)} />
        ) : null}
        {panel === "friends" ? <FriendsPanel /> : null}
        {panel === "journal" ? <JournalPanel /> : null}
      </Region>

      <Region label="cta" spec="Start 大" className="shrink-0 p-2 pt-7">
        <Link
          href="/mode"
          className="flex h-11 items-center justify-center rounded-lg bg-[var(--wire-strong)] text-sm font-medium text-white"
        >
          여행 시작
        </Link>
      </Region>
    </div>
  );
}

function BoardPanel({
  hasActiveBoard,
  onTogglePreview,
}: {
  hasActiveBoard: boolean;
  onTogglePreview: () => void;
}) {
  if (!hasActiveBoard) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center gap-2 px-2 text-center">
        <p className="text-xs font-medium text-[var(--wire-strong)]">여행중인 보드가 없습니다</p>
        <p className="text-[10px] leading-relaxed text-[var(--wire)]">
          여행 시작으로 맵을 만들면
          <br />
          여기에 진행 보드가 보여요
        </p>
        <button
          type="button"
          onClick={onTogglePreview}
          className="mt-1 text-[10px] text-[var(--wire)] underline"
        >
          (스케치) 진행중 예시 보기
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-1 flex-col gap-2">
      <p className="text-[10px] text-[var(--wire)]">진행중 · 국내 / 8칸 루프</p>
      <div className="grid flex-1 grid-cols-3 grid-rows-3 gap-1">
        {["S", "여", "이", "이", "·", "여", "여", "이", "이"].map((label, i) => (
          <div
            key={i}
            className={`flex items-center justify-center rounded border border-dashed border-[var(--wire)] text-[9px] ${
              label === "·" ? "border-transparent text-[var(--wire)]" : ""
            } ${label === "여" && i === 5 ? "ring-1 ring-[var(--wire-strong)]" : ""}`}
          >
            {label === "·" ? "" : label}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between gap-2">
        <Link href="/play" className="text-[11px] font-medium text-[var(--wire-strong)] underline">
          이어서 여행
        </Link>
        <button type="button" onClick={onTogglePreview} className="text-[10px] text-[var(--wire)] underline">
          (스케치) 빈 상태
        </button>
      </div>
    </div>
  );
}

function FriendsPanel() {
  return (
    <div className="flex flex-1 flex-col justify-center">
      <div className="flex items-center gap-2 overflow-hidden px-1">
        {friends.map((f) => (
          <div
            key={f}
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-dashed border-[var(--wire)] text-[10px] ${
              f === "+" ? "bg-[var(--wire-muted)]" : ""
            }`}
          >
            {f === "+" ? "+" : f}
          </div>
        ))}
      </div>
      <p className="mt-2 px-1 text-[10px] text-[var(--wire)]">친구 선택 → 같은 맵 초대</p>
      <button
        type="button"
        className="mx-1 mt-2 flex h-8 items-center justify-center rounded-md border border-[var(--wire-strong)] text-[11px]"
      >
        친구와 떠나기
      </button>
    </div>
  );
}

function JournalPanel() {
  return (
    <div className="flex min-h-0 flex-1 flex-col gap-1.5 overflow-hidden">
      <p className="text-[10px] text-[var(--wire)]">여행하며 남긴 기록</p>
      <ul className="min-h-0 flex-1 space-y-1.5 overflow-auto pr-0.5">
        {journalEntries.map((entry) => (
          <li
            key={entry.place}
            className="rounded border border-dashed border-[var(--wire)] px-2 py-1.5"
          >
            <p className="text-[11px] font-medium">{entry.place}</p>
            <p className="text-[10px] text-[var(--wire)]">{entry.note}</p>
          </li>
        ))}
        <li className="px-1 pt-1 text-[10px] text-[var(--wire)]">인증·사진 기록 시 여기에 쌓임</li>
      </ul>
    </div>
  );
}
