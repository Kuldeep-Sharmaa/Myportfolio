export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "Instagram", url: "https://www.instagram.com/rohan_.x01" },
    { name: "X", url: "https://twitter.com/RohanKS140" },
    { name: "GitHub", url: "https://github.com/Kuldeep-Sharmaa" },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/kuldeep-sharma-015619307",
    },
  ];

  return (
    <footer className="border-t border-light-border dark:border-dark-border bg-light-surface/20 dark:bg-dark-surface/20">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-16 sm:py-20">
        <div className="grid gap-12 sm:grid-cols-[1fr,auto]">
          {/* Brand + Description */}
          <div className="max-w-md">
            <h3 className="text-xl sm:text-2xl font-semibold text-primary tracking-tight">
              Kuldeep Sharma{" "}
              <span className="text-base sm:text-lg text-tertiary font-normal">
                (Rohan)
              </span>
            </h3>
            <p className="mt-3 text-sm sm:text-base text-secondary leading-relaxed">
              Frontend engineer focused on building clean, scalable, and
              user-focused web interfaces.
            </p>
          </div>

          {/* Social Links */}
          <div>
            <span className="text-xs uppercase tracking-[0.15em] text-tertiary font-medium block mb-4">
              Connect
            </span>
            <nav className="flex flex-col gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors duration-200 w-fit"
                >
                  <span className="relative">
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-light-text-primary dark:bg-dark-text-primary transition-all duration-300 group-hover:w-full" />
                  </span>
                  <svg
                    className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-light-border dark:border-dark-border">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-tertiary">
            <p>
              © {currentYear} Kuldeep Sharma. Built with React & Tailwind CSS.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="mailto:rhnkldp@gmail.com"
                className="hover:text-primary transition-colors duration-200"
              >
                Email
              </a>
              <span className="opacity-30">·</span>
              <a
                href="#about"
                className="hover:text-primary transition-colors duration-200"
              >
                Back to top
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
