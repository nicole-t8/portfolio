"use client";

export function Header() {
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // Height of your header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div
        className="absolute inset-0 bg-gradient-to-b from-black to-transparent"
        style={{ zIndex: -1 }}
      />
      <div className="max-w-6xl mx-auto flex justify-between items-center relative z-10">
        <div className="font-mono text-sm tracking-wider text-white">
          &lt;dev /&gt;
        </div>
        <div className="flex gap-8 font-normal text-xs tracking-wide">
          <a
            href="#about"
            onClick={(e) => handleClick(e, "#about")}
            className="text-white hover:opacity-100 opacity-70 transition-opacity"
          >
            ABOUT
          </a>
          <a
            href="#projects"
            onClick={(e) => handleClick(e, "#projects")}
            className="text-white hover:opacity-100 opacity-70 transition-opacity"
          >
            PROJECTS
          </a>
          <a
            href="#experience"
            onClick={(e) => handleClick(e, "#experience")}
            className="text-white hover:opacity-100 opacity-70 transition-opacity"
          >
            EXPERIENCE
          </a>
          <a
            href="#contact"
            onClick={(e) => handleClick(e, "#contact")}
            className="text-white hover:opacity-100 opacity-70 transition-opacity"
          >
            CONTACT
          </a>
        </div>
      </div>
    </nav>
  );
}
