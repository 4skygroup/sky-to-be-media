import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center relative px-4">

      <div className="absolute inset-0 flex items-center justify-center opacity-15 pointer-events-none">
        <Image
          src="/Sky-to-be-media-logo-noir.png"
          alt="Sky To Be Media Background Logo"
          width={1000}
          height={1000}
          priority
          className="w-auto h-auto max-w-[85vw] md:max-w-[65vw] lg:max-w-[55vw] object-contain grayscale transform -translate-y-40 md:-translate-y-48"
        />
      </div>

      <div className="z-10 text-center flex flex-col items-center gap-6 w-full max-w-3xl mx-auto">
        {/* Tailles adaptatives : 4xl sur mobile, 6xl sur petite tablette, 8xl sur desktop */}
        <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold tracking-wide uppercase whitespace-nowrap">
          Coming Soon
        </h1>

        {/* Ajustement de la taille du paragraphe pour le mobile */}
        <p className="text-gray-400 text-xs sm:text-sm md:text-base font-light px-2">
          Agence média dédiée aux podcast, interviews et journalisme
        </p>

        <div className="mt-4">
          <Link
            href="https://playtosky.com/"
            className="group flex items-center gap-2 text-xs md:text-sm text-gray-500 hover:text-white transition-colors duration-300"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>
            Retour vers le portail Play To Sky
          </Link>
        </div>
      </div>

    </div>
  );
}