"use client";

import dynamic from "next/dynamic";

const ConstructionSite = dynamic(() => import("@/components/site"), {
  ssr: false,
  loading: () => (
    <main className="grid min-h-screen place-items-center bg-slate-950 px-6 text-center text-white">
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-amber-400">Bsananya Construction</p>
        <h1 className="mt-4 font-[var(--font-display)] text-4xl font-black">Building Dreams. Creating Trust.</h1>
      </div>
    </main>
  )
});

export default function SiteLoader() {
  return <ConstructionSite />;
}
