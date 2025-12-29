'use client';

import { useState } from "react";

const faqs = [
  {
    question: "How fast can we launch the agent?",
    answer:
      "Most teams go live in 5 business days. We ingest your existing conversations, layer knowledge base syncs, and co-design automations with your leads so nothing ships without human guardrails.",
  },
  {
    question: "Does this replace our helpdesk?",
    answer:
      "Think of the agent as a neural layer on top of your helpdesk. We integrate with Zendesk, Intercom, Freshdesk, or straight Slack. Your team still owns the relationship — the agent handles the busy work and drafts perfect responses.",
  },
  {
    question: "Can we keep humans in the loop for sensitive cases?",
    answer:
      "Absolutely. You control escalation rules, approval flows, and which accounts are automation-only vs. monitored. Analytics surface where agents step in so you can fine-tune trust over time.",
  },
  {
    question: "What about data security?",
    answer:
      "We support SOC2, GDPR, and HIPAA workflows. Data never leaves your region, secrets stay encrypted, and you get full audit trails for every automated action.",
  },
];

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => {
        const isOpen = index === openIndex;
        return (
          <div
            key={faq.question}
            className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition hover:border-sky-200/30"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="flex w-full items-center justify-between px-6 py-5 text-left"
            >
              <span className="text-sm font-semibold text-white">{faq.question}</span>
              <span className="h-7 w-7 rounded-full border border-white/20 text-center text-lg text-white">
                {isOpen ? "−" : "+"}
              </span>
            </button>
            {isOpen ? (
              <div className="px-6 pb-6 text-sm leading-6 text-white/70">{faq.answer}</div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
