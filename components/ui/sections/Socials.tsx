import { Github, Linkedin, Mail } from "lucide-react";

export function Socials() {
  return (
    <div
      id="contact"
      className="flex gap-6 items-center justify-center py-8 px-6"
    >
      <a
        href="https://www.linkedin.com/in/nicole-tan-7360b5239/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white/70 hover:text-white transition-colors"
      >
        <Linkedin className="w-6 h-6" />
      </a>
      <a
        href="mailto:your.email@example.com"
        className="text-white/70 hover:text-white transition-colors"
      >
        <Mail className="w-6 h-6" />
      </a>
      <a
        href="https://github.com/nicole-t8"
        className="text-white/70 hover:text-white transition-colors"
      >
        <Github className="w-6 h-6" />
      </a>
    </div>
  );
}
