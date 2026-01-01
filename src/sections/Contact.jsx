// src/sections/Contact.jsx
import { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";
import contactAnimation from "../assets/Contact.json";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="section-padding">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div
          className={`mb-12 transition-all duration-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-light-text-primary dark:bg-dark-text-primary" />
            <span className="text-xs uppercase tracking-[0.2em] text-tertiary font-medium">
              Contact
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary tracking-tight">
            Let’s Work Together
          </h2>
        </div>

        {/* Content */}
        <div className="grid gap-12 md:grid-cols-2 items-start">
          {/* Left: Text */}
          <div
            className={`transition-all duration-500 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
          >
            <p className="text-secondary max-w-xl leading-relaxed">
              I’m open to frontend roles, full-stack opportunities, and
              selective freelance work. If you’re building something meaningful
              and want a developer who focuses on clean structure and long-term
              clarity, feel free to reach out.
            </p>

            {/* Lottie (desktop visible, mobile below) */}
            <div className="hidden md:block mt-10 max-w-sm">
              <Lottie
                animationData={contactAnimation}
                loop
                autoplay
                aria-hidden
              />
            </div>
          </div>

          {/* Right: Form */}
          <div
            className={`transition-all duration-500 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
          >
            <div className="relative rounded-2xl border border-light-border dark:border-dark-border bg-light-bg-secondary/60 dark:bg-dark-bg-secondary/60 backdrop-blur p-6 sm:p-8">
              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                className="space-y-4"
              >
                <input
                  type="hidden"
                  name="access_key"
                  value="779369ea-1486-467a-8ae6-6da2d59e3963"
                />

                <div>
                  <label className="block text-sm text-tertiary mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full rounded-lg border border-light-border dark:border-dark-border bg-transparent px-4 py-2 text-primary focus:outline-none focus:border-light-text-primary dark:focus:border-dark-text-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm text-tertiary mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full rounded-lg border border-light-border dark:border-dark-border bg-transparent px-4 py-2 text-primary focus:outline-none focus:border-light-text-primary dark:focus:border-dark-text-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm text-tertiary mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    required
                    className="w-full rounded-lg border border-light-border dark:border-dark-border bg-transparent px-4 py-2 text-primary focus:outline-none focus:border-light-text-primary dark:focus:border-dark-text-primary"
                  />
                </div>

                <button type="submit" className="btn-primary w-full mt-4">
                  Send Message
                </button>
              </form>
            </div>

            {/* Lottie for mobile */}
            <div className="md:hidden mt-10 max-w-sm mx-auto">
              <Lottie
                animationData={contactAnimation}
                loop
                autoplay
                aria-hidden
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
