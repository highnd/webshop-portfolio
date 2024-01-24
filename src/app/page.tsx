import HeroSection from "@/components/HeroSection";
import Works from "@/components/Works";
import Info from "@/components/Info";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-main  text-white ">
      <HeroSection />

      <Works type="what we do?" />

      <Info />
      <Contact />
    </main>
  );
}
