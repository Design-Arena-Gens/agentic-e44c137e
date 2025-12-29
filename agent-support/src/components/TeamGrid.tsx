const team = [
  {
    name: "Maya Reyes",
    role: "Lead Incident Manager",
    focus: "Stabilizes critical incidents with automation-assisted playbooks.",
    avatar: "M",
  },
  {
    name: "Jordan Patel",
    role: "Customer Intelligence Lead",
    focus: "Turns conversation data into product priorities every sprint.",
    avatar: "J",
  },
  {
    name: "Lena Kim",
    role: "Lifecycle Engineer",
    focus: "Builds automations to keep customers informed around the clock.",
    avatar: "L",
  },
];

export function TeamGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {team.map((member) => (
        <div
          key={member.name}
          className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 text-white backdrop-blur"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-300/40 bg-sky-500/20 text-lg font-semibold text-sky-100">
              {member.avatar}
            </span>
            <div>
              <div className="text-sm font-semibold">{member.name}</div>
              <div className="text-xs uppercase tracking-[0.25em] text-sky-200">
                {member.role}
              </div>
            </div>
          </div>
          <p className="text-sm text-white/70">{member.focus}</p>
        </div>
      ))}
    </div>
  );
}
