const workflows = [
  {
    name: "Context sync",
    steps: [
      "Ingest tickets from Slack, Intercom, and email",
      "Summarize customer history & risk signals",
      "Hand off to the right pod with SLA timer",
    ],
  },
  {
    name: "Resolution assistant",
    steps: [
      "Suggest fixes pulled from knowledge base & changelog",
      "Draft reply in brand tone and wait for agent approval",
      "Trigger follow-up automation when shipped",
    ],
  },
  {
    name: "Insights loop",
    steps: [
      "Cluster feedback by product area",
      "Alert engineering when thresholds are crossed",
      "Publish weekly digest to Notion & Slack",
    ],
  },
];

export function WorkflowBoard() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {workflows.map((workflow) => (
        <div
          key={workflow.name}
          className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950/70 via-slate-900/40 to-sky-950/40 p-6 shadow-[0_20px_60px_-40px_rgba(56,189,248,0.6)]"
        >
          <div className="text-sm font-semibold text-white">{workflow.name}</div>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            {workflow.steps.map((step, index) => (
              <li key={step} className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full border border-sky-300/30 bg-sky-500/20 text-xs font-semibold text-sky-100">
                  {index + 1}
                </span>
                <p>{step}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
