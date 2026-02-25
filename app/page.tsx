import { Header } from "@/components/ui/sections/Header";
import { TracingBeamSection } from "@/components/ui/sections/TracingBeamSection";
import { WavyBackground } from "@/components/ui/wavy-background";
import { ChevronDown } from "lucide-react";
import { Socials } from "@/components/ui/sections/Socials";

export default function Home() {
  return (
    <div className="bg-black">
      <Header />
      <WavyBackground className="max-w-4xl mx-auto pb-40">
        <div className="flex flex-col gap-6">
          <p className="text-2xl md:text-7xl lg:text-7xl text-white font-bold tracking-tight text-center">
            Nicole Tan
          </p>
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 font-light tracking-wide text-center">
            Full-Stack Software Engineer · Entrepreneur · Tech Enthusiast
          </p>
          <p className="text-base md:text-lg lg:text-xl text-white/70 font-normal leading-relaxed text-center max-w-2xl mx-auto">
            A final year Computer Science student, always on the lookout to
            learn something new. Passionate about writing elegant code to build
            products that make a difference.
          </p>
          <a
            href="#projects"
            className="px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 hover:shadow-lg bg-primary text-background self-center w-fit mt-8"
          >
            View My Work
          </a>
          <a
            href="#about"
            className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer hover:opacity-100 transition-opacity"
          >
            <ChevronDown className="w-6 h-6 text-white opacity-50" />
          </a>
        </div>
      </WavyBackground>
      <TracingBeamSection />
      <Socials />
    </div>
  );
}
