import HeroSection from "@/components/HeroSection";
import Works from "@/components/Works";
import Trainers from "@/components/Trainers";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#030014]  text-white ">
      <HeroSection />
      {/* <Trainers /> */}
      <Works type="what we do?" />
      {/* <section>programs</section>
      <Parallax type="how to get programs?" /> */}
      <section>contact</section>
    </main>
  );
}
