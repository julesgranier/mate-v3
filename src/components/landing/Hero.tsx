import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative w-full bg-black snap-start">
            <div className="w-full relative">
                {/* Desktop Image */}
                <Image
                    src="/lp-design-1-final.png"
                    alt="Hero Design Desktop"
                    width={1440}
                    height={1024}
                    className="w-full h-auto hidden md:block"
                    priority
                    quality={100}
                />
                {/* Mobile Image */}
                <Image
                    src="/hero-mobile.png"
                    alt="Hero Design Mobile"
                    width={390}
                    height={844}
                    className="w-full h-auto block md:hidden"
                    priority
                    quality={100}
                />

                {/* Header CTA Button - Top Right */}
                {/* Fluid positioning and sizing with vw units */}
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
            </div>
        </section>
    );
}
