'use client';

import { useMemo, useState } from "react";

type ChatMessage = {
  sender: "customer" | "agent" | "automation";
  text: string;
  delay: number;
};

type Scenario = {
  id: string;
  label: string;
  industry: string;
  summary: string;
  messages: ChatMessage[];
};

const scenarios: Scenario[] = [
  {
    id: "onboarding",
    label: "Product onboarding",
    industry: "SaaS",
    summary:
      "Walks new users through setup, answers billing questions, and schedules a follow-up call.",
    messages: [
      {
        sender: "customer",
        text: "Hi! We just signed up and need help connecting our CRM. How do we get started?",
        delay: 0,
      },
      {
        sender: "agent",
        text: "Great to have you onboard! I can push the guided checklist to your workspace. Would you like me to schedule a 15-minute call too?",
        delay: 800,
      },
      {
        sender: "customer",
        text: "Yes please, and we also need the SOC2 paperwork for our security review.",
        delay: 850,
      },
      {
        sender: "automation",
        text: "Automation shared “CRM Integration Checklist” and attached SOC2 Type II report from Knowledge Base.",
        delay: 900,
      },
      {
        sender: "agent",
        text: "Documentation is now in your inbox. I’ve booked the call with Maya for tomorrow at 10:30 AM PST — confirm?",
        delay: 950,
      },
    ],
  },
  {
    id: "incident",
    label: "Incident response",
    industry: "DevOps",
    summary:
      "Aggregates telemetry, shares status page updates, and keeps customers in the loop while engineers fix production issues.",
    messages: [
      {
        sender: "customer",
        text: "Our webhook deliveries started failing 20 minutes ago. Status page says all green though?",
        delay: 0,
      },
      {
        sender: "automation",
        text: "Automation posted incident digest: Elevated 5XX rate on Webhook API (EU-West). Engineers mitigated at 14:22 UTC.",
        delay: 800,
      },
      {
        sender: "agent",
        text: "Thanks for flagging. We’re rolling out a patch now and expect stability in the next 5 minutes. Want SMS updates?",
        delay: 850,
      },
      {
        sender: "customer",
        text: "Yes, please send to +44 7700 900123.",
        delay: 900,
      },
      {
        sender: "automation",
        text: "Automation subscribed contact to incident channel #202 for SMS updates and shared mitigation timeline.",
        delay: 950,
      },
      {
        sender: "agent",
        text: "Patch is live and error rates are back down. Can you confirm things look good on your side?",
        delay: 1000,
      },
    ],
  },
  {
    id: "hardware",
    label: "Hardware diagnostics",
    industry: "IoT",
    summary:
      "Triages device outages, collects telemetry, and dispatches technicians when the agent approves.",
    messages: [
      {
        sender: "customer",
        text: "We have 18 gateways offline in Austin. Local reboot didn’t help.",
        delay: 0,
      },
      {
        sender: "automation",
        text: "Automation pulled device health snapshot and detected corrupted firmware on batch GW-4.4. Suggested remote patch.",
        delay: 700,
      },
      {
        sender: "agent",
        text: "I can deploy the patch remotely and queue a field tech in case we need hands on-site. Deploy now?",
        delay: 900,
      },
      {
        sender: "customer",
        text: "Deploy, and if more than 5 stay offline send someone tomorrow morning.",
        delay: 950,
      },
      {
        sender: "automation",
        text: "Automation deployed firmware 4.4.6 and set threshold alert. Dispatch ticket opened with FieldOps for 09:00 AM visit.",
        delay: 1000,
      },
    ],
  },
];

const senderStyles: Record<ChatMessage["sender"], string> = {
  customer: "bg-slate-900/70 border border-white/10 text-white/80",
  agent:
    "bg-gradient-to-r from-sky-500/80 to-sky-400/60 border border-sky-300/40 text-slate-950",
  automation: "bg-emerald-500/20 border border-emerald-300/40 text-emerald-100",
};

export function ChatScenario() {
  const [activeScenarioId, setActiveScenarioId] = useState<Scenario["id"]>("onboarding");
  const [timestamp] = useState(() => Date.now());

  const activeScenario = useMemo(
    () => scenarios.find((scenario) => scenario.id === activeScenarioId) ?? scenarios[0],
    [activeScenarioId],
  );

  return (
    <div className="grid gap-6 lg:grid-cols-[340px_minmax(0,1fr)]">
      <div className="flex flex-col rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-200">
          Scenarios
        </span>
        <div className="mt-5 flex flex-col gap-3">
          {scenarios.map((scenario) => (
            <button
              key={scenario.id}
              onClick={() => setActiveScenarioId(scenario.id)}
              className={`rounded-2xl border px-4 py-3 text-left transition ${
                activeScenarioId === scenario.id
                  ? "border-sky-300/40 bg-sky-500/20 text-white shadow-lg shadow-sky-800/50"
                  : "border-white/5 bg-white/[0.02] text-white/60 hover:border-white/15 hover:bg-white/[0.04]"
              }`}
            >
              <div className="text-sm font-semibold text-white">{scenario.label}</div>
              <div className="text-xs uppercase tracking-[0.25em] text-sky-200">
                {scenario.industry}
              </div>
              <p className="mt-2 text-xs text-white/60">{scenario.summary}</p>
            </button>
          ))}
        </div>
      </div>
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80 p-6">
        <div className="absolute inset-x-0 -top-52 h-64 bg-sky-500/40 blur-[120px]" />
        <div className="relative flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-white">Live desk assistant</h3>
            <p className="text-xs text-white/50">
              Synthesized transcript at {new Date(timestamp).toLocaleTimeString()}
            </p>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-1 text-xs text-white/60">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400" />
            Automation assisting
          </div>
        </div>
        <div className="mt-6 grid gap-4">
          {activeScenario.messages.map((message, index) => (
            <div
              key={`${activeScenario.id}-${index}`}
              className={`w-full rounded-2xl border px-4 py-3 shadow-[0_20px_40px_-30px_rgba(14,165,233,0.5)] ${senderStyles[message.sender]}`}
            >
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-white/50">
                <span className="text-white/70">
                  {message.sender === "customer"
                    ? "Customer"
                    : message.sender === "agent"
                      ? "Agent"
                      : "Automation"}
                </span>
                <div className="h-[1px] flex-1 bg-white/10" />
                <span>{Math.round(message.delay / 100 + index + 1)}s</span>
              </div>
              <p className="mt-3 text-sm leading-6">
                {message.sender === "automation" ? (
                  <span className="font-medium text-emerald-100">{message.text}</span>
                ) : (
                  message.text
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
