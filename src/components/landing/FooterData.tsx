import Image from "next/image";
import Link from "next/link";

export default function FooterData() {
    return (
        <section className="w-full bg-black py-20 snap-start flex flex-col items-center justify-center gap-12">
            {/* Logo */}
            <div className="hover:scale-105 transition-transform">
                <Link href="/">
                    <Image
                        src="/logo.png"
                        alt="Mate Logo"
                        width={120}
                        height={40}
                        className="w-[30vw] md:w-[12vw] max-w-[140px] md:max-w-[180px] h-auto"
                    />
                </Link>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-sm md:text-base font-bold tracking-widest text-white/50 uppercase">
                <Link href="/aviso-legal" className="hover:text-white transition-colors">Legal Notice</Link>
                <Link href="/terminos-y-condiciones" className="hover:text-white transition-colors">TT</Link>
                <Link href="/politica-de-privacidad" className="hover:text-white transition-colors">PP</Link>
            </div>

            {/* Copyright */}
            <div className="text-[10px] md:text-xs text-white/20 tracking-widest uppercase">
                © {new Date().getFullYear()} Your Mates Tech, S.L.
            </div>
        </section>
    );
}
