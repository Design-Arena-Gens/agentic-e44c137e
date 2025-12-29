import { ChatScenario } from "@/components/ChatScenario";
import { ContactPanel } from "@/components/ContactPanel";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Footer } from "@/components/Footer";
import { KpiPanel } from "@/components/KpiPanel";
import { TeamGrid } from "@/components/TeamGrid";
import { WorkflowBoard } from "@/components/WorkflowBoard";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-x-0 top-[-240px] z-0 h-[520px] bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.45)_0,_rgba(15,23,42,0)_70%)]" />
      <div className="absolute inset-y-0 left-1/2 hidden w-px bg-white/10 xl:block" />
      <main className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-20 px-6 pb-20 pt-16 md:px-12 lg:px-20">
        <header className="flex flex-col gap-10 rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-lg md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-400/40 bg-sky-400/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-sky-100">
              Signal Desk Collective
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
              Your always-on customer agent for product-first tech teams.
            </h1>
            <p className="text-lg text-white/70">
              Ship a concierge-grade support desk without hiring overnight staff. We ingest your
              knowledge base, monitor every channel, and give customers proactive answers in your
              brand voice — humans looped in where it matters.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex h-12 items-center justify-center rounded-xl bg-gradient-to-r from-sky-500 to-sky-400 px-6 text-sm font-semibold text-slate-950 shadow-[0_18px_40px_-20px_rgba(56,189,248,0.8)] transition hover:from-sky-400 hover:to-sky-300"
              >
                Book a working session
              </a>
              <a
                href="#workflow"
                className="inline-flex h-12 items-center justify-center rounded-xl border border-white/20 px-6 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
              >
                See the playbooks
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-white/70 backdrop-blur-lg md:w-80">
            <div className="text-xs uppercase tracking-[0.3em] text-sky-200">
              Trusted by
            </div>
            <div className="grid gap-3">
              <div className="rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white">
                Layered API teams
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white">
                Security SaaS scale-ups
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white">
                Connected hardware crews
              </div>
            </div>
            <p className="text-xs text-white/50">
              “We sleep knowing every incident, renewal, and enterprise customer is handled before
              we wake up.” — CTO, Orbit Labs
            </p>
          </div>
        </header>

        <section className="space-y-10">
          <div className="flex flex-col gap-6">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-200">
              Why teams plug us in
            </span>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="text-sm font-semibold text-white">
                  Multi-channel co-pilot
                </div>
                <p className="mt-3 text-sm text-white/70">
                  Syncs Slack, Intercom, email, and incident tooling into a single thread. Nothing
                  slips between tabs.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="text-sm font-semibold text-white">
                  Guardrailed automation
                </div>
                <p className="mt-3 text-sm text-white/70">
                  Drafts responses, ships follow-ups, and only acts with agent approval on high-risk
                  accounts.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="text-sm font-semibold text-white">Signals that close the loop</div>
                <p className="mt-3 text-sm text-white/70">
                  Surfaces insights to product and engineering so the same bug never reaches your
                  inbox twice.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-3xl font-semibold text-white md:text-4xl">A desk that moves as fast as your releases.</h2>
              <p className="mt-3 max-w-2xl text-base text-white/70">
                Toggle through real conversations to see how the agent blends automation with the
                humans on shift. Every workflow is co-designed to match your escalation policies.
              </p>
            </div>
            <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-sky-200">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Live demo
            </div>
          </div>
          <ChatScenario />
        </section>

        <section id="workflow" className="space-y-10">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-200">
              Automations & rituals
            </span>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              Playbooks we ship with every engagement.
            </h2>
            <p className="max-w-2xl text-base text-white/70">
              Designed with your lead agent to keep customers informed, engineering aligned, and
              leadership in the know.
            </p>
          </div>
          <WorkflowBoard />
        </section>

        <section className="space-y-10">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-200">
              Proof in the numbers
            </span>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              Operators love the capacity unlock.
            </h2>
            <p className="max-w-2xl text-base text-white/70">
              Every engagement includes a metrics dashboard so you can track sentiment and SLA lift
              in real-time.
            </p>
          </div>
          <KpiPanel />
        </section>

        <section className="space-y-10">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-200">
              Meet the crew
            </span>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              Specialists who embed with your team.
            </h2>
            <p className="max-w-2xl text-base text-white/70">
              We partner with your existing customer advocates to install the automations and coach
              the hand-offs.
            </p>
          </div>
          <TeamGrid />
        </section>

        <section id="faq" className="space-y-10">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-200">
              Questions
            </span>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              We keep humans in the loop where it counts.
            </h2>
            <p className="max-w-2xl text-base text-white/70">
              Transparency is critical for customer trust. Here’s how we operate with fast-moving
              product teams.
            </p>
          </div>
          <FaqAccordion />
        </section>

        <section id="contact" className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-white/70 backdrop-blur">
            <div className="text-xs uppercase tracking-[0.3em] text-sky-200">
              Partnership path
            </div>
            <ol className="mt-4 space-y-5 text-sm leading-6 text-white/70">
              <li>
                <span className="text-white">Day 0:</span> Map your support stack, escalation
                policies, and tone of voice.
              </li>
              <li>
                <span className="text-white">Day 2:</span> Sync knowledge base, import macros, and
                tune automations.
              </li>
              <li>
                <span className="text-white">Day 5:</span> Agent covers your channels with approvals
                on; weekly insight reports kick off.
              </li>
            </ol>
            <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/70 p-4 text-xs text-white/60">
              “We cut response time in half and reclaimed product cycles from triage. It felt like
              hiring three teammates who never sleep.” — Head of Support, Arcjet
            </div>
          </div>
          <ContactPanel />
        </section>

        <Footer />
      </main>
    </div>
  );
}
