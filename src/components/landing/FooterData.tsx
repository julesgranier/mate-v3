import Image from "next/image";

export default function FooterData() {
    return (
        <section className="relative w-full bg-black snap-start">
            <div className="relative w-full">
                {/* Desktop Footer Image */}
                <Image
                    src="/lp-from-figma.png"
                    alt="Footer Design Desktop"
                    width={1440}
                    height={800}
                    className="mx-auto w-[75%] h-auto hidden md:block"
                    quality={100}
                />
                {/* Mobile Footer Image */}
                <Image
                    src="/footer-mobile.png"
                    alt="Footer Design Mobile"
                    width={390}
                    height={844}
                    className="mx-auto w-[75%] h-auto block md:hidden"
                    quality={100}
                />

                {/* Footer Links - Visual Text */}
                <div className="absolute bottom-[4%] md:bottom-[5%] w-full flex flex-col items-center">
                    <div className="flex flex-wrap justify-center gap-[4vw] md:gap-[3vw] text-[3vw] md:text-[1.2vw] font-bold tracking-widest text-white uppercase mb-2 px-4 text-center max-[375px]:text-[2.5vw] min-[1440px]:text-[18px]">
                        <a href="/aviso-legal" className="hover:text-white/70 transition-colors whitespace-nowrap">Legal Notice</a>
                        <a href="/terminos-y-condiciones" className="hover:text-white/70 transition-colors whitespace-nowrap">TT</a>
                        <a href="/politica-de-privacidad" className="hover:text-white/70 transition-colors whitespace-nowrap">PP</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
