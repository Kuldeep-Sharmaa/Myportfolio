import { useEffect, useRef, useState } from "react";
import { projects } from "../data/projects";

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const featured = projects.find((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="projects" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div
          className={`mb-16 transition-all duration-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-light-text-primary dark:bg-dark-text-primary" />
            <span className="text-xs uppercase tracking-[0.2em] text-tertiary font-medium">
              Work
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary tracking-tight">
            Selected Projects
          </h2>
        </div>

        {/* Featured Project */}
        {featured && (
          <article
            className={`group mb-8 transition-all duration-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "150ms" }}
          >
            <div className="relative overflow-hidden rounded-xl bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border">
              <div className="p-8 sm:p-12">
                {/* Tags */}
                <div className="flex flex-wrap items-center gap-2 mb-5">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider border border-light-border dark:border-dark-border rounded text-tertiary">
                    <span className="w-1 h-1 rounded-full bg-light-text-primary dark:bg-dark-text-primary" />
                    Featured
                  </span>
                  <span className="text-sm text-tertiary">/</span>
                  <span className="text-sm text-tertiary">{featured.type}</span>
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-primary mb-3 tracking-tight">
                  {featured.title}
                </h3>

                {/* Role */}
                <p className="text-sm text-tertiary mb-4">{featured.role}</p>

                {/* Description */}
                <p className="text-base sm:text-lg text-secondary leading-relaxed max-w-3xl mb-6">
                  {featured.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {featured.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-light-surface dark:bg-dark-surface text-secondary rounded-md border border-light-border dark:border-dark-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={featured.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-2 text-sm font-medium text-primary"
                >
                  <span className="relative">
                    View Live Site
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-light-text-primary dark:bg-dark-text-primary transition-all duration-300 group-hover/link:w-full" />
                  </span>
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>

              {/* Subtle bottom accent */}
              <div className="h-px bg-gradient-to-r from-transparent via-light-border dark:via-dark-border to-transparent" />
            </div>
          </article>
        )}

        {/* Other Projects */}
        <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
          {others.map((project, i) => (
            <article
              key={project.title}
              className={`group transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${250 + i * 100}ms` }}
            >
              <div className="h-full rounded-xl bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border transition-colors duration-300 hover:border-light-text-tertiary dark:hover:border-dark-text-tertiary">
                <div className="p-6 sm:p-8 h-full flex flex-col">
                  {/* Type */}
                  <span className="text-xs uppercase tracking-[0.15em] text-tertiary font-medium mb-4">
                    {project.type}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-2 tracking-tight">
                    {project.title}
                  </h3>

                  {/* Role */}
                  <p className="text-xs text-tertiary mb-4">{project.role}</p>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-secondary leading-relaxed mb-5 flex-grow">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 text-[11px] font-medium bg-light-surface dark:bg-dark-surface text-secondary rounded border border-light-border dark:border-dark-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-2 text-sm font-medium text-primary mt-auto"
                  >
                    <span className="relative">
                      View Live Site
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-light-text-primary dark:bg-dark-text-primary transition-all duration-300 group-hover/link:w-full" />
                    </span>
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
