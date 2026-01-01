// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  // Auto-hide navbar on scroll (desktop only)
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll <= 0) {
        setVisible(true);
        return;
      }

      if (currentScroll > lastScroll && currentScroll > 80) {
        // Scrolling down
        setVisible(false);
      } else {
        // Scrolling up
        setVisible(true);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  return (
    <>
      {/* Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-light-bg/80 dark:bg-dark-bg/80 backdrop-blur-md border-b border-light-border dark:border-dark-border transition-transform duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container-custom h-16 flex items-center justify-between">
          {/* Brand */}
          <a
            href="#"
            className="text-lg font-semibold tracking-tight text-primary"
          >
            Kuldeep Sharma
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-secondary hover:text-primary relative group transition-colors duration-150"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-light-text-primary dark:bg-dark-text-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop Theme Toggle */}
          <div className="hidden md:block">
            <ThemeToggle />
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden relative w-10 h-10 rounded-lg hover:bg-light-surface dark:hover:bg-dark-surface transition-colors duration-150 flex items-center justify-center"
            aria-label="Open menu"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span className="w-full h-0.5 bg-light-text-primary dark:bg-dark-text-primary rounded-full" />
              <span className="w-full h-0.5 bg-light-text-primary dark:bg-dark-text-primary rounded-full" />
              <span className="w-full h-0.5 bg-light-text-primary dark:bg-dark-text-primary rounded-full" />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Mobile Sidebar */}
      <aside
        className={`md:hidden fixed top-0 right-0 bottom-0 w-72 bg-light-bg dark:bg-dark-bg border-l border-light-border dark:border-dark-border z-50 transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between px-6 h-16 border-b border-light-border dark:border-dark-border">
            <span className="text-lg font-semibold text-primary">Menu</span>
            <button
              onClick={() => setOpen(false)}
              className="w-10 h-10 rounded-lg hover:bg-light-surface dark:hover:bg-dark-surface transition-colors duration-150 flex items-center justify-center"
              aria-label="Close menu"
            >
              <svg
                className="w-5 h-5 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Nav Links */}
          <nav className="flex-1 px-6 py-6 space-y-1 overflow-y-auto">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block text-secondary hover:text-primary py-3 px-4 rounded-lg hover:bg-light-surface dark:hover:bg-dark-surface transition-all duration-200 ${
                  open ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
                }`}
                style={{
                  transitionDelay: open ? `${i * 50 + 100}ms` : "0ms",
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Theme Toggle in Sidebar */}
          <div className="px-6 py-6 border-t border-light-border dark:border-dark-border">
            <div className="flex items-center justify-between">
              <span className="text-sm text-secondary">Theme</span>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
