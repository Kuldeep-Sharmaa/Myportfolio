// src/sections/Hero.jsx
import { useEffect, useState } from "react";
import { useRotatingWords } from "../hooks/useRotatingWords";
import {
  TbLayoutGrid,
  TbCode,
  TbLayoutDashboard,
  TbBriefcase,
} from "react-icons/tb";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const rotatingWords = [
    "interfaces",
    "dashboards",
    "web products",
    "client solutions",
  ];

  const specialties = [
    { icon: TbLayoutGrid, label: "UI Systems" },
    { icon: TbCode, label: "React Apps" },
    { icon: TbLayoutDashboard, label: "SaaS Dashboards" },
    { icon: TbBriefcase, label: "Client Work" },
  ];

  const { word, isAnimating } = useRotatingWords(rotatingWords, 3000);

  // Entrance animation
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Rotate highlighted specialty
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % specialties.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [specialties.length]);

  return (
    <section className="relative overflow-hidden min-h-[calc(100vh-4rem)] mt-5 flex items-center">
      {/* Background grid */}
      <div className="absolute inset-0 bg-linear-grid pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full section-padding">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center">
          {/* Heading - Much bigger */}
          <h1
            className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight text-primary leading-[1.1] transition-all duration-700 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            Frontend Engineer building clean, production-ready{" "}
            <span
              className={`inline-block transition-all duration-500 ${
                isAnimating
                  ? "opacity-0 blur-sm scale-95"
                  : "opacity-100 blur-0 scale-100"
              }`}
            >
              {word}
            </span>
            .
          </h1>

          {/* Subtext - Bigger */}
          <p
            className={`mt-6 text-lg sm:text-xl lg:text-2xl text-secondary max-w-3xl mx-auto transition-all duration-700 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "150ms" }}
          >
            Focused on building reliable, user-focused interfaces that scale in
            real products.
          </p>

          {/* Specialties - Bigger */}
          <div
            className={`mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-8 transition-all duration-700 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "250ms" }}
          >
            {specialties.map((item, i) => {
              const isActive = i === activeIndex;
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className={`flex items-center gap-2.5 text-base transition-all duration-300 ${
                    isActive
                      ? "text-primary font-medium"
                      : "text-secondary opacity-60"
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 transition-opacity duration-300 ${
                      isActive ? "opacity-100" : "opacity-50"
                    }`}
                    aria-hidden
                  />
                  <span>{item.label}</span>
                </div>
              );
            })}
          </div>

          {/* CTAs - Bigger */}
          <div
            className={`mt-10 flex flex-wrap gap-4 justify-center transition-all duration-700 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "350ms" }}
          >
            <a
              href="#projects"
              className="bg-light-text-primary dark:bg-dark-text-primary text-light-bg dark:text-dark-bg px-7 py-3.5 rounded-lg text-base font-medium hover:opacity-90 transition-opacity duration-150"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-light-border dark:border-dark-border text-light-text-primary dark:text-dark-text-primary px-7 py-3.5 rounded-lg text-base font-medium hover:bg-light-surface dark:hover:bg-dark-surface transition-colors duration-150"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-700 ease-out ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
        style={{ transitionDelay: "500ms" }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-tertiary uppercase tracking-wider">
            Scroll
          </span>
          <svg
            className="w-4 h-4 text-tertiary animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
