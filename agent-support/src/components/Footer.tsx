export function Footer() {
  return (
    <footer className="mt-16 flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
      <div>© {new Date().getFullYear()} Signal Desk Collective. Built for high-trust support.</div>
      <div className="flex flex-wrap gap-4">
        <a
          className="transition hover:text-sky-200"
          href="mailto:hello@signaldesk.co"
          rel="noreferrer"
        >
          Contact
        </a>
        <a
          className="transition hover:text-sky-200"
          href="#workflow"
          rel="noreferrer"
        >
          Playbooks
        </a>
        <a
          className="transition hover:text-sky-200"
          href="#faq"
          rel="noreferrer"
        >
          FAQs
        </a>
      </div>
    </footer>
  );
}
