'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import FooterData from '@/components/landing/FooterData';

export default function TerminosCondiciones() {
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
                    <h1 className="text-5xl md:text-8xl font-bold mb-16 tracking-tighter leading-none">Términos y Condiciones</h1>

                    <div className="space-y-12 text-white/80 leading-relaxed text-xl md:text-2xl">
                        <p>
                            Los presentes Términos y Condiciones de Uso (en adelante, los «Términos») constituyen un acuerdo legalmente vinculante entre el Usuario y YOUR MATES TECH, S.L. (en adelante, «Mate»), entidad titular de la plataforma digital accesible a través de la aplicación móvil «Mate» (en adelante, la «App»).
                        </p>

                        <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                            Al registrarse, acceder o utilizar la App, usted declara que ha leído, comprendido y acepta íntegramente estos Términos, así como nuestra Política de Privacidad.
                        </div>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wider">INFORMACIÓN GENERAL</h2>
                            <div className="space-y-1">
                                <p>Denominación social: <span className="text-white font-bold">YOUR MATES TECH S.L.</span></p>
                                <p>Domicilio social: <span className="text-white">C/ Aribau, 254, Pral 1a (08006, Barcelona)</span></p>
                                <p>NIF: <span className="text-white">B-56.745.144</span></p>
                                <p>Correo electrónico: <a href="mailto:contact@mateapp.es" className="text-white underline">contact@mateapp.es</a></p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wider">OBJETO Y CONDICIONES DE ACCESO</h2>
                            <p>
                                Mate es una red social digital cuyo objetivo es permitir que los usuarios registrados conecten entre sí y organicen planes de forma libre, voluntaria y no profesional. La App está destinada exclusivamente a personas mayores de 18 años.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wider">NORMAS DE MATE</h2>
                            <p>
                                El uso de Mate exige el estricto cumplimiento de normas básicas de conducta y respeto. Queda expresamente prohibido utilizar la App para acosar, intimidar, engañar, suplantar a terceros o cometer actos ilegales.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wider">FUNCIONALIDADES AVANZADAS</h2>
                            <ul className="list-disc pl-6 space-y-4">
                                <li>
                                    <strong className="text-white">Boost:</strong> Aumenta temporalmente la visibilidad de su perfil o eventos. No garantiza resultados específicos.
                                </li>
                                <li>
                                    <strong className="text-white">Modo Incógnito:</strong> Oculta su perfil en el feed y mapas mientras esté activado.
                                </li>
                            </ul>
                        </section>

                        <section className="pt-20 border-t border-white/10 text-sm text-white/50 mb-20">
                            <p>Los Términos fueron actualizados el 01/10/2025.</p>
                            <p className="mt-2 text-xs">© {new Date().getFullYear()} Your Mates Tech, S.L. Todos los derechos reservados.</p>
                        </section>
                    </div>
                </motion.div>
            </div>
            <FooterData />
        </main>
    );
}
