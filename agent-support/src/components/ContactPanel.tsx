'use client';

import { useState } from "react";

type FormState =
  | { status: "idle" }
  | { status: "submitting" }
  | { status: "success"; reference: string }
  | { status: "error"; message: string };

export function ContactPanel() {
  const [formState, setFormState] = useState<FormState>({ status: "idle" });

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormState({ status: "submitting" });

    try {
      await new Promise((resolve) => setTimeout(resolve, 900));
      const reference = `SR-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
      setFormState({ status: "success", reference });
      (event.currentTarget as HTMLFormElement).reset();
    } catch {
      setFormState({
        status: "error",
        message: "Something went wrong. Please try again.",
      });
    }
  }

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-white shadow-[0_30px_80px_-60px_rgba(14,165,233,0.9)] backdrop-blur">
      <h3 className="text-lg font-semibold text-white">
        Ready to give your customers a real agent experience?
      </h3>
      <p className="mt-2 text-sm text-white/60">
        Share a bit about your support volume and we’ll wire the automations in under a week.
      </p>
      <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
        <div className="grid gap-3 md:grid-cols-2">
          <label className="grid gap-2 text-xs uppercase tracking-[0.3em] text-white/60">
            Name
            <input
              name="name"
              required
              placeholder="Taylor Morgan"
              className="h-11 rounded-xl border border-white/10 bg-white/10 px-3 text-sm text-white placeholder:text-white/30 focus:border-sky-300/60 focus:outline-none focus:ring-2 focus:ring-sky-400/40"
            />
          </label>
          <label className="grid gap-2 text-xs uppercase tracking-[0.3em] text-white/60">
            Company
            <input
              name="company"
              required
              placeholder="Orbit Labs"
              className="h-11 rounded-xl border border-white/10 bg-white/10 px-3 text-sm text-white placeholder:text-white/30 focus:border-sky-300/60 focus:outline-none focus:ring-2 focus:ring-sky-400/40"
            />
          </label>
        </div>
        <label className="grid gap-2 text-xs uppercase tracking-[0.3em] text-white/60">
          Email
          <input
            name="email"
            type="email"
            required
            placeholder="support@orbitlabs.dev"
            className="h-11 rounded-xl border border-white/10 bg-white/10 px-3 text-sm text-white placeholder:text-white/30 focus:border-sky-300/60 focus:outline-none focus:ring-2 focus:ring-sky-400/40"
          />
        </label>
        <label className="grid gap-2 text-xs uppercase tracking-[0.3em] text-white/60">
          Support Priority
          <select
            name="priority"
            defaultValue="standard"
            className="h-11 rounded-xl border border-white/10 bg-white/10 px-3 text-sm text-white focus:border-sky-300/60 focus:outline-none focus:ring-2 focus:ring-sky-400/40"
          >
            <option value="standard" className="bg-slate-900 text-white">
              Standard SLA (&lt; 500 tickets/mo)
            </option>
            <option value="premium" className="bg-slate-900 text-white">
              Premium SLA (500 - 5k tickets/mo)
            </option>
            <option value="mission-critical" className="bg-slate-900 text-white">
              Mission critical (&gt; 5k tickets/mo)
            </option>
          </select>
        </label>
        <label className="grid gap-2 text-xs uppercase tracking-[0.3em] text-white/60">
          What can we take off your plate?
          <textarea
            name="message"
            required
            rows={4}
            placeholder="24/7 monitoring, incident comms, proactive outreach..."
            className="rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-white/30 focus:border-sky-300/60 focus:outline-none focus:ring-2 focus:ring-sky-400/40"
          />
        </label>
        <button
          type="submit"
          disabled={formState.status === "submitting"}
          className="h-12 rounded-xl bg-gradient-to-r from-sky-500 to-sky-400 text-sm font-semibold text-slate-950 transition hover:from-sky-400 hover:to-sky-300 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {formState.status === "submitting" ? "Sending..." : "Book a walkthrough"}
        </button>
      </form>
      {formState.status === "success" ? (
        <p className="mt-4 rounded-xl border border-emerald-400/50 bg-emerald-500/20 px-3 py-2 text-xs text-emerald-100">
          We locked it in. Reference: {formState.reference}. Our agent will reach out within 6
          business hours.
        </p>
      ) : null}
      {formState.status === "error" ? (
        <p className="mt-4 rounded-xl border border-rose-400/50 bg-rose-500/20 px-3 py-2 text-xs text-rose-100">
          {formState.message}
        </p>
      ) : null}
    </div>
  );
}
