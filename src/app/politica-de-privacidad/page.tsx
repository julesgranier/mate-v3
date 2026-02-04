'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import FooterData from '@/components/landing/FooterData';

export default function PoliticaPrivacidad() {
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
                    <h1 className="text-5xl md:text-8xl font-bold mb-16 tracking-tighter">Política de Privacidad</h1>

                    <div className="space-y-12 text-white/80 leading-relaxed text-xl md:text-2xl">
                        <p className="bg-white/5 p-6 rounded-xl border border-white/10">
                            <strong className="text-white uppercase tracking-wider block mb-2">IMPORTANTE:</strong>
                            Le invitamos a leer atentamente esta Declaración de Privacidad para conocer por qué recopilamos sus datos personales y cómo son procesados por Your Mates Tech, S.L., Aribau 254, pral. 1ª, 08006, Barcelona, España.
                        </p>

                        <p className="font-bold text-white">
                            Esta Política de Privacidad fue modificada el 22/10/2024.
                        </p>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wider">ÁMBITO DE APLICACIÓN</h2>
                            <p>
                                Esta declaración de privacidad en línea de Your Mates Tech, S.L., es pública y accesible a todos los usuarios y clientes de Your Mates Tech, S.L., y se aplica a todos los sitios web, aplicaciones, eventos y otros servicios de Your Mates Tech, S.L. siendo mateapp.es el sitio o dominio principal.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wider">INFORMACIÓN PERSONAL QUE RECOPILAMOS</h2>
                            <p>
                                Your Mates Tech, S.L. respeta su derecho a la privacidad y aplica toda la normativa vigente (RGPD y LOPDGDDD) con el fin de proteger los datos personales de sus clientes y usuarios. Sus datos personales son tratados con la máxima confidencialidad.
                            </p>
                            <div className="mt-6 space-y-4">
                                <h3 className="text-xl font-bold text-white">Información que nos proporciona:</h3>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Credenciales de acceso y datos básicos (género, fecha de nacimiento).</li>
                                    <li>Información adicional compartida voluntariamente (biografía, intereses, fotos, vídeos).</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wider">CÓMO USAMOS SU INFORMACIÓN</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Gestión de su cuenta y servicios.</li>
                                <li>Soporte y atención al cliente.</li>
                                <li>Personalización de experiencias y publicidad relevante.</li>
                                <li>Prevención, detección y combate del fraude y actividades ilegales.</li>
                                <li>Cumplimiento de obligaciones legales.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wider">EJERCICIO DE DERECHOS</h2>
                            <p>
                                Puede ejercer sus derechos de acceso, rectificación, supresión, limitación del tratamiento, portabilidad de datos y oposición dirigiéndose por escrito a Your Mates Tech, S.L., en la dirección Aribau 254, pral. 1ª, 08006, Barcelona, o enviando un correo electrónico a <a href="mailto:rgpd@mateapp.es" className="text-white underline">rgpd@mateapp.es</a>, adjuntando copia de su documento de identidad.
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
