import Image from "next/image";
import Link from "next/link";
import { Instagram } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative w-full h-screen bg-black snap-start overflow-hidden">
            {/* Desktop Background */}
            <div className="hidden md:block absolute inset-0">
                <Image
                    src="/hero-desktop-v4.png"
                    alt="Hero Design Desktop"
                    fill
                    className="object-cover"
                    priority
                    quality={100}
                />
            </div>

            {/* Mobile Background */}
            <div className="block md:hidden absolute inset-0">
                <Image
                    src="/hero-mobile-v4.png"
                    alt="Hero Design Mobile"
                    fill
                    className="object-cover"
                    priority
                    quality={100}
                />
            </div>

            {/* Header Layer (Logo & Button) */}
            {/* Fluid positioning with vw units as requested previously for better responsiveness */}
            <div className="absolute top-[6vw] left-[6vw] md:top-[4vw] md:left-[4vw] w-[calc(100%-12vw)] md:w-[calc(100%-8vw)] z-50 flex justify-between items-start">
                <Link href="/" className="block hover:scale-105 transition-transform">
                    <Image
                        src="/logo.png"
                        alt="Mate Logo"
                        width={210}
                        height={69}
                        className="w-[27vw] md:w-[12vw] max-w-[128px] md:max-w-[188px] h-auto"
                    />
                </Link>

                <div className="flex items-center gap-4 md:gap-6">
                    <a
                        href="https://www.instagram.com/mateapp/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer hover:scale-110 transition-transform block text-white"
                    >
                        <Instagram size={32} strokeWidth={1.5} className="w-[8vw] md:w-[3.5vw] max-w-[32px] md:max-w-[42px] h-auto" />
                    </a>
                    <a
                        href="https://www.mateapp.es/download"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer hover:scale-105 transition-transform block"
                    >
                        <Image
                            src="/cta-button.png"
                            alt="Solicita tu acceso"
                            width={215}
                            height={65}
                            className="w-[30vw] md:w-[15vw] max-w-[140px] md:max-w-[195px] h-auto"
                        />
                    </a>
                </div>
            </div>

            {/* Text Overlays Layer */}
            <div className="absolute inset-0 flex flex-col justify-end p-[8vw] md:p-[6vw] pb-[calc(10vw+120px)] md:pb-[4vw] font-[family-name:var(--font-funnel-sans)] pointer-events-none">
                <div className="w-full flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-4">
                    {/* Left Side Content */}
                    <div className="flex flex-col gap-4 md:gap-8">
                        <div className="flex flex-col">
                            <h1 className="text-[8vw] md:text-[4.5vw] font-bold leading-[1.1] text-white tracking-tight drop-shadow-2xl">
                                Cada jueves, conecta con<br />
                                6 miembros con futuro.<br />
                                Offline.
                            </h1>
                        </div>
                        <div className="text-[6.5vw] md:text-[3.5vw] font-bold text-white tracking-tight drop-shadow-xl">
                            Upgrade your Circle.
                        </div>
                    </div>

                    {/* Right Side Content */}
                    <div className="md:max-w-none">
                        <p className="text-[4.5vw] md:text-[1.8vw] text-white font-medium tracking-tight drop-shadow-lg leading-snug md:text-right whitespace-nowrap">
                            Seleccionamos los miembros a la mano.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
