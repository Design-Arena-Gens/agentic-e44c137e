import { type ReactNode } from "react";

type FeatureCardProps = {
  icon: ReactNode;
  title: string;
  copy: string;
  footer?: ReactNode;
};

export function FeatureCard({ icon, title, copy, footer }: FeatureCardProps) {
  return (
    <div className="group rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_30px_60px_-30px_rgba(15,23,42,0.45)] backdrop-blur transition hover:-translate-y-1 hover:border-sky-300/40 hover:bg-white/10">
      <div className="flex items-center gap-3">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-500/40 bg-sky-500/20 text-sky-100">
          {icon}
        </span>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      <p className="mt-4 text-sm leading-6 text-white/70">{copy}</p>
      {footer ? <div className="mt-6 text-xs text-sky-200">{footer}</div> : null}
    </div>
  );
}
