"use client";

import { useState } from "react";
import Image from "next/image";

export function BeforeAfter({
  before,
  after,
  alt,
}: {
  before: string;
  after: string;
  alt: string;
}) {
  const [value, setValue] = useState(50);

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100">
      <div className="relative aspect-[4/3]">
        {/* AFTER */}
        <Image src={after} alt={alt} fill className="object-cover" priority />

        {/* BEFORE */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${value}%` }}
        >
          <Image src={before} alt={alt} fill className="object-cover" />
        </div>

        {/* Divider */}
        <div
          className="absolute top-0 h-full w-1 bg-white shadow"
          style={{ left: `${value}%` }}
        />

        {/* Slider */}
        <input
          type="range"
          min={0}
          max={100}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="absolute bottom-4 left-1/2 w-[80%] -translate-x-1/2"
        />

        {/* Labels */}
        <div className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs text-white">
          Före
        </div>
        <div className="absolute right-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs text-white">
          Efter
        </div>
      </div>
    </div>
  );
}
