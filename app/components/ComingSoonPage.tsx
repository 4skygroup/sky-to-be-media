import Image from "next/image";
import Link from "next/link";

interface Props {
  section: string;
}

export default function ComingSoonPage({ section }: Props) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center relative px-6 overflow-hidden">

      {/* Radial spotlight */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{ background: "radial-gradient(ellipse 75% 60% at 50% 45%, rgba(255,255,255,0.04) 0%, transparent 70%)" }}
      />

      {/* Corner frames */}
      <div className="absolute top-5 left-5 md:top-8 md:left-8 border-l border-t border-white/10 pointer-events-none z-0 corner-frame" style={{ "--reveal-delay": "700ms" } as React.CSSProperties} />
      <div className="absolute top-5 right-5 md:top-8 md:right-8 border-r border-t border-white/10 pointer-events-none z-0 corner-frame" style={{ "--reveal-delay": "750ms" } as React.CSSProperties} />
      <div className="absolute bottom-5 left-5 md:bottom-8 md:left-8 border-l border-b border-white/10 pointer-events-none z-0 corner-frame" style={{ "--reveal-delay": "800ms" } as React.CSSProperties} />
      <div className="absolute bottom-5 right-5 md:bottom-8 md:right-8 border-r border-b border-white/10 pointer-events-none z-0 corner-frame" style={{ "--reveal-delay": "850ms" } as React.CSSProperties} />

      {/* Main content */}
      <div className="z-10 flex flex-col items-center text-center w-full max-w-6xl mx-auto">

        {/* Section label */}
        <div
          className="reveal flex items-center gap-3 md:gap-4 mb-8 md:mb-10"
          style={{ "--reveal-delay": "0ms" } as React.CSSProperties}
        >
          <p className="text-[9px] sm:text-[10px] tracking-[0.4em] sm:tracking-[0.5em] text-white/30 uppercase">
            {section}
          </p>
        </div>

        {/* Hero typography */}
        <div
          className="reveal"
          style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
        >
          <h1
            className="font-bold uppercase leading-[0.88] tracking-[-0.02em]"
            style={{ fontSize: "clamp(3.5rem, 15vw, 11rem)" }}
          >
            <span className="block text-white">Coming</span>
            <span
              className="block text-transparent outline-breathe"
              style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.25)" }}
            >
              Soon
            </span>
          </h1>
        </div>

        {/* Tagline */}
        <p
          className="reveal text-white/35 uppercase tracking-[0.3em] sm:tracking-[0.35em] text-[9px] sm:text-[10px] md:text-xs"
          style={{ "--reveal-delay": "480ms" } as React.CSSProperties}
        >
          Podcasts&nbsp;&nbsp;·&nbsp;&nbsp;Interviews&nbsp;&nbsp;·&nbsp;&nbsp;Journalism
        </p>

        {/* Links */}
        <div
          className="reveal mt-10 md:mt-14 flex flex-col items-center gap-6"
          style={{ "--reveal-delay": "560ms" } as React.CSSProperties}
        >
          <Link
            href="https://playtosky.com/"
            className="inline-flex items-center px-8 py-3 border border-white/25 text-[9px] sm:text-[10px] tracking-[0.35em] uppercase text-white/50 hover:bg-white hover:text-black hover:border-white transition-all duration-500 cursor-pointer"
          >
            Back to Play To Sky
          </Link>
        </div>

      </div>

    </div>
  );
}