// src/sections/About.jsx
import { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";
import aboutAnimation from "../assets/about-system.json";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -80px 0px",
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
    <section id="about" ref={sectionRef} className="section-padding">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section label */}
        <div
          className={`mb-12 sm:mb-16 transition-all duration-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-6 sm:w-8 h-px bg-light-text-primary dark:bg-dark-text-primary" />
            <span className="text-xs uppercase tracking-[0.2em] text-tertiary font-medium">
              About Me
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary tracking-tight">
            How I Build
          </h2>
        </div>

        <div className="grid gap-12  items-center lg:grid-cols-2">
          {/* Lottie Animation */}
          <div
            className={`flex justify-center transition-all duration-700 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <div className="w-full max-w-lg">
              <Lottie
                animationData={aboutAnimation}
                loop
                autoplay
                className="w-full"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-5 max-w-xl lg:max-w-none">
            <h2
              className={`text-3xl sm:text-4xl leading-tight font-semibold tracking-tight text-primary transition-all duration-700 ease-out ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              Building clean, scalable frontend systems
            </h2>

            <div
              className={`space-y-3 text-base leading-relaxed text-secondary transition-all duration-700 ease-out ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <p>
                I build frontend applications with a focus on clean structure,
                reusable components, and predictable behavior. My goal is to
                write code that stays easy to maintain as products grow.
              </p>

              <p>
                I’ve shipped React-based client projects and internal tools, and
                I’m currently expanding into full-stack development to own
                features end-to-end.
              </p>
            </div>

            {/* Core focus */}
            <div
              className={`pt-1 grid grid-cols-1 sm:grid-cols-2 gap-3 transition-all duration-700 ease-out ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              {[
                {
                  label: "Frontend Architecture",
                  desc: "Scalable UI patterns",
                },
                { label: "Performance", desc: "Fast, reliable interfaces" },
                {
                  label: "Design Systems",
                  desc: "Consistent UI building blocks",
                },
                {
                  label: "Full-Stack Growth",
                  desc: "API & backend fundamentals",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-3 p-3 rounded-lg border border-light-border dark:border-dark-border"
                >
                  <span className="mt-1 w-1 h-1 rounded-full bg-light-text-primary dark:bg-dark-text-primary shrink-0" />
                  <div>
                    <div className="text-sm font-medium text-primary">
                      {item.label}
                    </div>
                    <div className="text-xs text-tertiary mt-0.5">
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
