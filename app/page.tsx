import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    // J'ajoute overflow-hidden ici pour que le logo géant ne crée pas de barre de scroll horizontale
    <div className="flex-1 flex flex-col items-center justify-center relative px-4 overflow-hidden">

      {/* --- Le Logo Géant (en Absolu, comme fond) --- */}
      {/* z-0 pour être en arrière-plan */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <Image
          src="/Sky-to-be-media-logo-noir.png"
          alt="Sky To Be Media Background Logo"
          fill
          priority
          sizes="(max-width: 640px) 70vw, (max-width: 768px) 80vw, (max-width: 1024px) 90vw, 110vw"
          className="w-auto h-auto object-contain transform -translate-y-24"
        />
      </div>

      <div className="z-10 text-center flex flex-col items-center gap-6 w-full max-w-7xl mx-auto transform translate-y-32 md:translate-y-40">

        {/* --- Le H1 sur une seule ligne sur grand écran --- */}
        <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl tracking-wide text-center leading-tight px-4 lg:whitespace-nowrap">
          Media agency dedicated to podcasts, interviews, and journalism
        </h1>

        <p className="text-gray-400 text-lg sm:text-2xl md:text-3xl font-light uppercase tracking-widest mt-2">
          Coming Soon
        </p>

        <div className="mt-4">
          <Link
            href="https://playtosky.com/"
            className="group flex items-center gap-2 text-xs md:text-sm text-gray-500 hover:text-white transition-colors duration-300"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>
            Back to Play To Sky
          </Link>
        </div>
      </div>

    </div>
  );
}