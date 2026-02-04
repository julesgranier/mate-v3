'use client';

import { useRef, ReactNode } from 'react';
import { motion } from 'framer-motion';

const items = [
    {
        content: (
            <>
                Creemos que los mejores
                <br />
                momentos de la vida ocurren
                <br />
                <span className="font-bold text-5xl md:text-7xl lg:text-8xl mt-4 block">fuera de la pantalla.</span>
            </>
        )
    },
    {
        content: (
            <>
                Filtramos
                <br />
                <span className="font-bold text-4xl md:text-6xl lg:text-7xl block mt-2">
                    para que no
                    <br />
                    pierdas el tiempo.
                </span>
            </>
        )
    },
    {
        content: (
            <>
                Una conversación,
                <br />
                una conexión...
                <br />
                <span className="font-bold text-4xl md:text-6xl lg:text-7xl mt-4 block">Te pueden cambiar la vida.</span>
            </>
        )
    },
    {
        content: (
            <div className="flex flex-col items-center justify-center gap-8">
                <div>
                    <span className="font-bold text-4xl md:text-6xl lg:text-7xl mb-4 block">Upgrade your circle</span>
                    every Thursday with Mate.
                </div>
            </div>
        )
    }
];

export default function ScrollManifesto() {
    return (
        <div className="bg-black flex flex-col w-full">
            {items.map((item, i) => (
                <Section key={i}>
                    {item.content}
                </Section>
            ))}
        </div>
    );
}

function Section({ children }: { children: ReactNode }) {
    return (
        <div className="h-screen w-full flex items-center justify-center snap-start snap-always px-6 text-center border-b border-white/5">
            <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.5 }}
                className="w-full max-w-6xl text-center"
            >
                <div className="text-2xl md:text-4xl lg:text-5xl text-white font-medium tracking-tight leading-tight drop-shadow-lg">
                    {children}
                </div>
            </motion.div>
        </div>
    );
}
