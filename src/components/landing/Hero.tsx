import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative w-full bg-black snap-start overflow-hidden">
            <div className="w-full relative aspect-[1440/1024] md:aspect-auto">
                {/* Background Image */}
                <Image
                    src="/hero-new.png"
                    alt="Hero Design"
                    width={1440}
                    height={1024}
                    className="w-full h-auto block"
                    priority
                    quality={100}
                />

                {/* Header Logo - Top Left */}
                <div className="absolute top-[6vw] left-[6vw] md:top-[4vw] md:left-[4vw] z-50">
                    <Link href="/" className="block hover:scale-105 transition-transform">
                        <Image
                            src="/logo.png"
                            alt="Mate Logo"
                            width={120}
                            height={40}
                            className="w-[20vw] md:w-[10vw] max-w-[120px] md:max-w-[160px] h-auto"
                        />
                    </Link>
                </div>

                {/* Header CTA Button - Top Right */}
                <div className="absolute top-[6vw] right-[6vw] md:top-[4vw] md:right-[4vw] z-50">
                    <a
                        href="https://www.mateapp.es/download"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer hover:scale-105 transition-transform block"
                    >
                        <Image
                            src="/cta-button.png"
                            alt="Solicita tu acceso"
                            width={300}
                            height={90}
                            className="w-[32vw] md:w-[15vw] max-w-[150px] md:max-w-[260px] h-auto"
                        />
                    </a>
                </div>

                {/* Text Overlays */}
                <div className="absolute inset-0 flex flex-col justify-end p-[6vw] md:p-[4vw] pointer-events-none font-[family-name:var(--font-funnel-sans)]">
                    {/* Main Text (65px) */}
                    <div className="mb-[4vw] max-w-[90%] md:max-w-[70%]">
                        <h1 className="text-[7vw] md:text-[4.5vw] font-bold leading-[1.1] text-white tracking-tight">
                            Cada jueves, conecta con<br />
                            6 miembros con futuro.<br />
                            Offline.
                        </h1>
                    </div>

                    {/* Bottom Row */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full gap-4">
                        {/* Upgrade your Circle (50px) */}
                        <div className="text-[5vw] md:text-[3.5vw] font-bold text-white tracking-tight">
                            Upgrade your Circle.
                        </div>

                        {/* Seleccionamos los miembros (30px) */}
                        <div className="text-[3.5vw] md:text-[2vw] text-white/90 md:text-white font-medium tracking-tight md:max-w-[40%] md:text-right">
                            Seleccionamos los miembros a la mano.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
