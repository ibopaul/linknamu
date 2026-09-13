"use client";

import { useEffect, useState } from "react";

export type LinkItem = {
  id: string;
  label: string;
  href: string;
};

export default function LinkList({ links }: { links: LinkItem[] }) {
  const [clicks, setClicks] = useState<Record<string, number>>({});

  useEffect(() => {
    let cancelled = false;

    fetch("/api/clicks")
      .then((res) => res.json())
      .then((data: Record<string, number>) => {
        if (!cancelled) setClicks(data);
      })
      .catch(() => {});

    return () => {
      cancelled = true;
    };
  }, []);

  const handleClick = (id: string) => {
    setClicks((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));

    fetch("/api/clicks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ linkId: id }),
      keepalive: true,
    }).catch(() => {});
  };

  return (
    <div className="mt-10 flex w-full flex-col gap-4">
      {links.map((link) => (
        <a
          key={link.id}
          href={link.href}
          onClick={() => handleClick(link.id)}
          className="flex w-full items-center gap-3 rounded-2xl border border-white/60 bg-white/45 px-5 py-4 text-sm font-medium text-slate-700 shadow-[0_6px_20px_-8px_rgba(56,120,180,0.25)] backdrop-blur-md transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-white/65 hover:shadow-[0_10px_24px_-8px_rgba(56,120,180,0.3)]"
        >
          <span className="flex-1 text-center">{link.label}</span>
          <span className="shrink-0 text-xs font-normal text-slate-400">
            {clicks[link.id] ?? 0}회
          </span>
        </a>
      ))}
    </div>
  );
}
