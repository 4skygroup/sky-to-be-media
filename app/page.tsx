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
          width={2500} // Grande source pour la qualité
          height={2500}
          priority
          quality={100}
          /* --- LES RÉGLAGES CLÉS POUR LE RENDRE GÉANT --- */
          /* J'ai mis des max-w énormes (jusqu'à 160% de la largeur de l'écran sur mobile) */
          /* pour qu'il déborde largement. On utilise w-auto h-auto pour ne pas le casser. */
          className="w-auto h-auto max-w-[100vw] sm:max-w-[100vw] md:max-w-[100vw] lg:max-w-[110vw] object-contain transform -translate-y-24"
        />
      </div>

      {/* --- Le Texte et les Liens (Flux normal, z-index supérieur) --- */}
      {/* z-10 pour être devant le logo géant. translate-y pour décaler le texte vers le bas */}
      <div className="z-10 text-center flex flex-col items-center gap-6 w-full max-w-7xl mx-auto transform translate-y-32 md:translate-y-40">

        {/* --- Le H1 sur une seule ligne sur grand écran --- */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-wide text-center leading-tight px-4 lg:whitespace-nowrap">
          Media agency dedicated to podcasts, interviews, and journalism
        </h1>

        <p className="text-gray-400 text-xs sm:text-sm md:text-base font-light uppercase tracking-widest mt-2">
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
            Back to Play To Sky Portal
          </Link>
        </div>
      </div>

    </div>
  );
}