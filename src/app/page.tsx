import Hero from "@/components/landing/Hero";
import FooterData from "@/components/landing/FooterData";

export default function Home() {
  return (
    <main className="h-screen w-full bg-black text-white selection:bg-white/20 overflow-y-scroll snap-y snap-mandatory">
      <Hero />
      <FooterData />
    </main>
  );
}
