'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import FooterData from '@/components/landing/FooterData';

export default function AvisoLegal() {
    return (
        <main className="min-h-screen bg-black text-white px-6 md:px-12 py-20 md:py-32 relative">
            <div className="absolute top-8 left-8 md:top-12 md:left-12 z-50">
                <Link href="/" className="block hover:scale-105 transition-transform">
                    <Image
                        src="/logo.png"
                        alt="Mate Logo"
                        width={120}
                        height={40}
                        className="w-[15vw] md:w-[6vw] max-w-[75px] md:max-w-[105px] h-auto"
                    />
                </Link>
            </div>
            <div className="max-w-6xl mx-auto">
                <Link href="/" className="inline-block mb-12 text-sm font-bold tracking-widest uppercase hover:text-white/70 transition-colors">
                    ← Volver
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-5xl md:text-8xl font-bold mb-16 tracking-tighter">Aviso Legal</h1>

                    <div className="space-y-12 text-white/80 leading-relaxed text-xl md:text-2xl">
                        <p>
                            La presente información, normas y condiciones (conjunto denominado como Aviso Legal) tienen por objeto regular, en lo que sea aplicable, el uso del/de los sitio/s web que Your Mates Tech, S.L., pone a disposición del público para así cumplir con las obligaciones legales al respecto.
                        </p>

                        <p className="font-bold text-white">
                            El presente Aviso Legal fue modificado el 22/10/2024.
                        </p>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wider">ACERCA DE Your Mates Tech, S.L.</h2>
                            <h3 className="text-xl font-bold text-white mb-2">SITIOS WEB Y DOMINIOS</h3>
                            <p>Your Mates Tech, S.L. opera en la red, para ofrecer sus servicios, con los siguientes dominios.</p>
                            <p className="font-bold text-white mt-2 italic">mateapp.es</p>
                            <p className="mt-2">considerando mateapp.es como dominio principal.</p>
                        </section>

                        <p className="bg-white/5 p-6 rounded-xl border border-white/10">
                            <strong className="text-white">MUY IMPORTANTE:</strong> Algunos servicios ofrecidos en el/los sitio/s de Your Mates Tech, S.L., accesibles para los usuarios de Internet, pueden estar sometidos a condiciones particulares e instrucciones que, en su caso, sustituyen, completan y/ó modifican el presente Aviso Legal y que deberán ser aceptadas por el Usuario antes de iniciarse la prestación del servicio correspondiente. Esto es de aplicación, particularmente, en los casos en que se efectúen reservas o contraten servicios o productos, en cuyo caso deberá aplicarse el contenido de las condiciones generales de contratación (identificadas como TÉRMINOS Y CONDICIONES en las páginas correspondientes).
                        </p>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wider">OBJETO Y FUNCIONALIDAD DE LOS SITIOS DE Your Mates Tech, S.L.</h2>
                            <p>Your Mates Tech, S.L. gestiona una red social que permite a sus usuarios contactar entre ellos.</p>
                            <p className="mt-4">Your Mates Tech, S.L. se reserva el derecho de modificar en cualquier momento las presentes condiciones de uso, así como cualesquiera otras condiciones particulares.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wider">INFORMACIÓN GENERAL (DATOS IDENTIFICATIVOS Y DE CONTACTO)</h2>
                            <p>
                                En cumplimiento con el art. 10 de la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la información y del comercio electrónico, le informamos que Your Mates Tech, S.L., Aribau 254, pral. 1ª, 08006, Barcelona, España con NIF B56745144, está inscrita en el Registro Mercantil de Barcelona, en el tomo 49066, folio 59, hoja B-606374, inscripción 29/11/2023.
                            </p>
                            <div className="mt-4 space-y-2">
                                <p>Por correo electrónico a través de la dirección <a href="mailto:rgpd@mateapp.es" className="text-white underline underline-offset-4">rgpd@mateapp.es</a></p>
                                <p>Por teléfono al número de atención al cliente <span className="text-white">+34 608 092 696</span>.</p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wider">REPORTES Y BLOQUEOS</h2>
                            <p>
                                Dentro de la APP Mate que ofrece Your Mates Tech, S.L., los usuarios cuentan con la opción de reportar y bloquear a otros usuarios en caso de que consideren que han infringido las normas de convivencia o comportamiento. Cuando un usuario reporta a otro, podrá añadir una descripción del motivo del reporte en un campo habilitado para ello.
                            </p>
                        </section>

                        <section className="pt-20 border-t border-white/10 text-sm text-white/50 mb-20">
                            © {new Date().getFullYear()} Your Mates Tech, S.L. Todos los derechos reservados.
                        </section>
                    </div>
                </motion.div>
            </div>
            <FooterData />
        </main>
    );
}
