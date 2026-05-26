import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    return (
        <header className="flex justify-between items-center px-8 py-6 w-full mx-auto">
            <div className="shrink-0">
                {/* Assure-toi de placer ton logo dans le dossier /public */}
                <Image
                    src="/Sky-to-be-media-logo-noir.png"
                    alt="Logo Sky To Be Media"
                    width={100}
                    height={40}
                    className="object-contain"
                />
            </div>

            {/* Navigation - Masquée sur mobile pour le moment, visible à partir de md */}
            <nav className="hidden md:flex gap-8 text-sm font-light">
                <Link href="#" className="hover:text-gray-400 transition-colors">The Group</Link>
                <Link href="#" className="hover:text-gray-400 transition-colors">Careers</Link>
                <Link href="#" className="hover:text-gray-400 transition-colors">About</Link>
                <Link href="#" className="hover:text-gray-400 transition-colors">Contact</Link>
            </nav>
        </header>
    );
}