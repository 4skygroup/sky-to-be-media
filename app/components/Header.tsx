import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    return (
        // px-4 par défaut (mobile), px-8 à partir de md (tablette/desktop)
        <header className="flex justify-between items-center px-4 md:px-8 py-6 w-full mx-auto">
            <div className="shrink-0">
                <Image
                    src="/Sky-to-be-media-logo-noir.png"
                    alt="Logo Sky To Be Media"
                    width={100}
                    height={40}
                    className="object-contain w-auto h-auto max-w-20 md:max-w-25"
                />
            </div>

            {/* Navigation masquée sur mobile, visible à partir des écrans md */}
            <nav className="hidden md:flex gap-8 text-sm font-light">
                <Link href="#" className="hover:text-gray-400 transition-colors">The Group</Link>
                <Link href="#" className="hover:text-gray-400 transition-colors">Careers</Link>
                <Link href="#" className="hover:text-gray-400 transition-colors">About</Link>
                <Link href="#" className="hover:text-gray-400 transition-colors">Contact</Link>
            </nav>
        </header>
    );
}