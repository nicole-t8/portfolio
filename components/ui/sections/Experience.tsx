"use client";

const education = [
  {
    period: "2022 - 2023",
    degree: "B. Dental Health Science",
    institution: "Griffith University",
    detail: "Studying Dentistry at Gold Coast. Dean's Commendation, GPA 7.0",
  },
  {
    period: "2024 - 2026",
    degree: "B. Computer Science",
    institution: "The University of Queensland",
    detail:
      "Focus on large-scale software system design, algorithm analysis, formal program verification, microcontroller programming, cross-platform web development, and statistical data analysis. Dean's Commendation, GPA 7.0",
  },
];

const experience = [
  {
    period: "Nov 2025 - Feb 2026",
    role: "Software Engineer Intern",
    company: "ANZ Banks",
    detail:
      "Built a full-stack web application using a React TypeScript frontend & implemented a Spring Boot backend to process 300+ customer accounts",
  },
  {
    period: "Feb 2025 - PRESENT",
    role: "Academic Demonstrator",
    company: "The University of Queensland",
    detail:
      "I conduct practicals and tutorials teaching Java concepts like object-oriented programming, dependency inversion, JUnit testing, generics, exception handling, and file I/O.",
  },
  {
    period: "Nov 2024 - PRESENT",
    role: "Student Leader",
    company: "Women in Computing, The University of Queensland",
    detail:
      "I lead workshops for high school students, teaching basic python prograemming concepts, binary number systems, arduino programming.s",
  },
];

function TimelineItem({
  period,
  title,
  subtitle,
  detail,
  accentColor,
  periodColor,
  isLast = false,
}: {
  period: string;
  title: string;
  subtitle: string;
  detail: string;
  accentColor: string;
  periodColor: string;
  isLast?: boolean;
}) {
  return (
    <div
      className={`relative pl-8 border-l-2 ${!isLast ? "pb-8" : ""}`}
      style={{ borderColor: accentColor }}
    >
      <div
        className="absolute -left-[9px] top-0 w-4 h-4 rounded-full"
        style={{ background: accentColor }}
      />
      <div className="p-6 rounded-2xl bg-black/40 border border-white/5 hover:border-white/10 transition-colors">
        <span className="font-mono text-xs" style={{ color: periodColor }}>
          {period}
        </span>
        <h5 className="text-xl font-bold mt-2 text-white">{title}</h5>
        <p className="mt-1 text-white/70">{subtitle}</p>
        <p className="mt-3 text-sm text-white/60">{detail}</p>
      </div>
    </div>
  );
}

export function ExperienceSection() {
  return (
    <section className="py-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h4 className="font-mono text-lg mb-8 flex items-center gap-3 text-blue-400">
              <span className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-400 text-black">
                🎓
              </span>
              EDUCATION
            </h4>
            <div className="space-y-6">
              {education.map((item, i) => (
                <TimelineItem
                  key={i}
                  period={item.period}
                  title={item.degree}
                  subtitle={item.institution}
                  detail={item.detail}
                  accentColor="#60a5fa"
                  periodColor="#a855f7"
                  isLast={i === education.length - 1}
                />
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h4 className="font-mono text-lg mb-8 flex items-center gap-3 text-purple-400">
              <span className="w-10 h-10 rounded-full flex items-center justify-center bg-purple-400 text-black">
                💼
              </span>
              EXPERIENCE
            </h4>
            <div className="space-y-6">
              {experience.map((item, i) => (
                <TimelineItem
                  key={i}
                  period={item.period}
                  title={item.role}
                  subtitle={item.company}
                  detail={item.detail}
                  accentColor="#a855f7"
                  periodColor="#60a5fa"
                  isLast={i === experience.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
