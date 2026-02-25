"use client";

import { TracingBeam } from "../tracing-beam";
import { BackgroundBeamsWithCollision } from "../background-beams-with-collision";
import { ExperienceSection } from "./Experience";
import Headshot from "../../../public/headshot.jpg";
import Image from "next/image";

export function TracingBeamSection() {
  return (
    <TracingBeam className="px-6 pb-20">
      <BackgroundBeamsWithCollision>
        <div className="max-w-2xl mx-auto antialiased pt-4 relative">
          <div id="about" className="mb-20">
            <h2 className="font-mono text-sm tracking-widest mb-4 text-secondary">
              01 // ABOUT ME
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Who am I?
            </h3>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <p className="text-lg leading-relaxed mb-6 text-white/80">
                  Having started out my uni life in healthcare, then pivoting to
                  computer science and technology, I am passionate in using my
                  skills in technology to better peoples' wellbeing. Though I'm
                  still trying to figure out what that might look like, I am
                  driven to make a difference in the world and enjoy the journey
                  along the way.
                </p>
                <p className="text-lg leading-relaxed text-white/80">
                  When I'm not coding, you'll find me travelling and exploring
                  whatever city I'm in, finding the best food spots and bingeing
                  the newest tv shows!
                </p>
              </div>
              <div className="flex-shrink-0">
                <Image
                  src={Headshot}
                  alt="Headshot"
                  width={200}
                  height={200}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>

          <div id="projects" className="mb-20">
            <h2 className="font-mono text-sm tracking-widest mb-4 text-secondary">
              02 // PROJECTS
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Featured Work
            </h3>
            <h2 className="font-mono text-sm tracking-widest mb-4 text-secondary">
              1) BOOKTRACK
            </h2>
            <p className="text-lg leading-relaxed text-white/80 flex-1">
              a personal project built with React JS and a Flask backend,
              designed to help you log and organise your reading list. It lets
              you track books you've read, are currently reading, or want to
              read — with filtering to find exactly what you're looking for.
            </p>
            <video controls width="100%" className="rounded-xl mt-4">
              <source src="/booktrack.mp4" type="video/mp4" />
              Sorry, your browser doesn't support embedded videos.
            </video>
            <h2 className="font-mono text-sm tracking-widest mb-4 mt-10 text-secondary">
              2) READY SET HIRE
            </h2>
            <p className="text-lg leading-relaxed text-white/80 flex-1">
              a project built with React and a PostgREST backend, featuring an
              AI-powered interview platform that enables custom interview
              creation with automated question generation via LangChain. It
              supports applicant invitations, audio response recording, and
              speech-to-text transcription powered by Transformers.js.
            </p>
            <video controls width="100%" className="rounded-xl mt-4">
              <source src="/readysethire-demo.mp4" type="video/mp4" />
              Sorry, your browser doesn't support embedded videos.
            </video>

            <div className="flex flex-col md:flex-row items-center gap-6 mt-10">
              <div className="md:w-1/2 flex flex-col gap-8">
                <h2 className="font-mono text-sm tracking-widest text-secondary">
                  3) FORMBASE
                </h2>
                <p className="text-lg leading-relaxed text-white/80">
                  a cross-platform mobile app built with React Native and Expo,
                  allowing users to create fully custom forms with mixed field
                  types including text, dropdowns, image uploads, and location
                  data.
                </p>
                <p className="text-lg leading-relaxed text-white/80">
                  features form validation, data filtering, and record
                  management wrapped in a clean, modern UI powered by React
                  Native Paper.
                </p>
              </div>
              <div className="md:w-1/2 w-full">
                <video controls className="rounded-2xl w-full">
                  <source src="/formbase.mp4" type="video/mp4" />
                  Sorry, your browser doesn't support embedded videos.
                </video>
              </div>
            </div>

            <div id="experience" className="mt-20">
              <h2 className="font-mono text-sm tracking-widest mb-4 text-secondary">
                03 // EXPERIENCE
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Education &amp; Experience
              </h3>
              <p className="text-lg leading-relaxed text-white/80">
                Here's some of my experiences! ~
              </p>
              <ExperienceSection />
            </div>
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </TracingBeam>
  );
}
