// src/sections/Skills.jsx
import { useEffect, useRef, useState } from "react";

const skills = [
  {
    title: "Frontend Architecture",
    hint: "Clean component boundaries and predictable structure in growing codebases",
    number: "01",
  },
  {
    title: "UI Systems & Consistency",
    hint: "Reusable patterns, spacing, and theme discipline across large interfaces",
    number: "02",
  },
  {
    title: "Performance & UX",
    hint: "Fast layouts, responsive behavior, and real-device performance thinking",
    number: "03",
  },
  {
    title: "Full-Stack Direction",
    hint: "APIs, data flow, and feature ownership beyond the frontend",
    number: "04",
  },
];

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1, rootMargin: "0px 0px -80px 0px" }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="section-padding">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div
          className={`mb-16 sm:mb-20 transition-all duration-700 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-6 sm:w-8 h-px bg-light-text-primary dark:bg-dark-text-primary" />
            <span className="text-xs uppercase tracking-[0.2em] text-tertiary font-medium">
              Capabilities
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary tracking-tight leading-tight">
            How I Work
          </h2>
        </div>

        {/* Skills - Asymmetric layout */}
        <div className="space-y-2">
          {skills.map((skill, i) => {
            const isExpanded = expandedIndex === i;
            const isHovered = hoveredIndex === i;
            const isOdd = i % 2 !== 0;

            return (
              <div
                key={skill.title}
                className={`transition-all duration-700 ease-out ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : isOdd
                    ? "translate-x-16 opacity-0"
                    : "-translate-x-16 opacity-0"
                }`}
                style={{ transitionDelay: `${i * 80 + 150}ms` }}
              >
                <button
                  onClick={() => setExpandedIndex(isExpanded ? null : i)}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`group relative w-full text-left transition-all duration-500 ease-out ${
                    isOdd ? "sm:ml-16 lg:ml-24" : ""
                  }`}
                >
                  {/* Background layer */}
                  <div
                    className={`absolute inset-0 -left-6 -right-6 rounded-lg transition-all duration-500 ${
                      isExpanded || isHovered
                        ? "bg-light-bg dark:bg-dark-bg opacity-100"
                        : "bg-transparent opacity-0"
                    }`}
                  />

                  {/* Left accent bar */}
                  <div
                    className={`absolute left-0 top-0 bottom-0 w-0.5 transition-all duration-500 ${
                      isExpanded
                        ? "bg-light-text-primary dark:bg-dark-text-primary scale-y-100"
                        : isHovered
                        ? "bg-light-text-tertiary dark:bg-dark-text-tertiary scale-y-100"
                        : "bg-light-border dark:bg-dark-border scale-y-50"
                    }`}
                  />

                  <div className="relative py-8 sm:py-10 pl-8 sm:pl-10 pr-6">
                    <div className="flex items-start justify-between gap-6">
                      <div className="flex-1 min-w-0">
                        {/* Number + Title */}
                        <div className="flex items-baseline gap-4 sm:gap-5 mb-2">
                          <span
                            className={`text-xs sm:text-sm font-mono tracking-wider transition-all duration-300 ${
                              isExpanded || isHovered
                                ? "text-primary"
                                : "text-tertiary"
                            }`}
                          >
                            {skill.number}
                          </span>
                          <h3
                            className={`text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight transition-all duration-300 ${
                              isExpanded
                                ? "text-primary"
                                : isHovered
                                ? "text-primary"
                                : "text-primary"
                            }`}
                          >
                            {skill.title}
                          </h3>
                        </div>

                        {/* Expandable content */}
                        <div
                          className={`grid transition-all duration-500 ease-in-out ${
                            isExpanded
                              ? "grid-rows-[1fr] opacity-100 mt-4"
                              : "grid-rows-[0fr] opacity-0 mt-0"
                          }`}
                        >
                          <div className="overflow-hidden">
                            <p className="text-base sm:text-lg text-secondary leading-relaxed pb-1">
                              {skill.hint}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Plus/Minus icon */}
                      <div className="relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 shrink-0">
                        {/* Circle background */}
                        <div
                          className={`absolute inset-0 rounded-full border transition-all duration-500 ${
                            isExpanded
                              ? "border-light-text-primary dark:border-dark-text-primary scale-100 rotate-90"
                              : isHovered
                              ? "border-light-text-primary dark:border-dark-text-primary scale-110"
                              : "border-light-border dark:border-dark-border scale-100"
                          }`}
                        />

                        {/* Horizontal line */}
                        <div
                          className={`absolute w-4 h-px transition-all duration-300 ${
                            isExpanded || isHovered
                              ? "bg-light-text-primary dark:bg-dark-text-primary"
                              : "bg-tertiary"
                          }`}
                        />

                        {/* Vertical line */}
                        <div
                          className={`absolute h-4 w-px transition-all duration-500 ${
                            isExpanded
                              ? "bg-transparent scale-0 rotate-90"
                              : isHovered
                              ? "bg-light-text-primary dark:bg-dark-text-primary scale-100"
                              : "bg-tertiary scale-100"
                          }`}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Bottom border */}
                  <div
                    className={`h-px bg-gradient-to-r transition-all duration-500 ${
                      isExpanded || isHovered
                        ? "from-light-border via-light-text-primary/20 to-transparent dark:from-dark-border dark:via-dark-text-primary/20"
                        : "from-transparent via-light-border to-transparent dark:via-dark-border"
                    }`}
                  />
                </button>
              </div>
            );
          })}
        </div>

        {/* Tech stack footer */}
        <div
          className={`mt-20 sm:mt-24 pt-12 border-t border-light-border dark:border-dark-border transition-all duration-700 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-sm sm:text-base">
            <span className="text-tertiary">Primary stack:</span>
            <span className="font-medium text-primary">React</span>
            <span className="text-tertiary opacity-50">·</span>
            <span className="font-medium text-primary">JavaScript</span>
            <span className="text-tertiary opacity-50">·</span>
            <span className="font-medium text-primary">TypeScript</span>
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-2 sm:gap-3 text-sm sm:text-base">
            <span className="text-tertiary">UI & styling:</span>
            <span className="font-medium text-primary">Tailwind CSS</span>
            <span className="text-tertiary opacity-50">·</span>
            <span className="font-medium text-primary">Bootstrap</span>
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-2 sm:gap-3 text-sm sm:text-base">
            <span className="text-tertiary">Backend & services:</span>
            <span className="font-medium text-primary">Node.js</span>
            <span className="text-tertiary opacity-50">·</span>
            <span className="font-medium text-primary">Firebase</span>
          </div>
        </div>
      </div>
    </section>
  );
}
