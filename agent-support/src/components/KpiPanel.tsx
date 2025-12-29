const kpis = [
  {
    value: "3m 12s",
    label: "Average time to resolution",
    delta: "42% faster with automation",
  },
  {
    value: "94%",
    label: "CSAT in the last 90 days",
    delta: "up from 87% pre-agent",
  },
  {
    value: "68%",
    label: "Conversations handled without escalation",
    delta: "handled autonomously with guardrails",
  },
];

export function KpiPanel() {
  return (
    <div className="grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur md:grid-cols-3">
      {kpis.map((kpi) => (
        <div key={kpi.label} className="rounded-2xl bg-white/5 p-4">
          <div className="text-xs uppercase tracking-[0.3em] text-sky-200">
            {kpi.label}
          </div>
          <div className="mt-3 text-3xl font-semibold text-white">{kpi.value}</div>
          <div className="mt-2 text-xs text-emerald-200">{kpi.delta}</div>
        </div>
      ))}
    </div>
  );
}
