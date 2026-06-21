import { Code2 } from 'lucide-react';

type EasterEggProps = {
  active: boolean;
};

export function EasterEgg({ active }: EasterEggProps) {
  if (!active) return null;

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-16 z-[90] flex justify-center">
      <div className="easter-burst rounded-xl border border-cyan/40 bg-ink/90 px-5 py-3 text-sm font-semibold text-cyan shadow-glow">
        <span className="inline-flex items-center gap-2"><Code2 size={18} /> Hello, developer mode unlocked.</span>
      </div>
    </div>
  );
}
