import { SectionTitle } from '../components/ui/SectionTitle';
import { achievements } from '../data/portfolio';
import { useCounter } from '../hooks/useCounter';

function CounterCard({ label, value }: { label: string; value: number }) {
  const { elementRef, value: count } = useCounter(value);
  return (
    <div className="glass rounded-xl p-6 text-center">
      <span ref={elementRef} className="text-4xl font-extrabold gradient-text">{count.toLocaleString()}+</span>
      <p className="mt-2 text-sm font-semibold text-slate-300">{label}</p>
    </div>
  );
}

export function Achievements() {
  return (
    <section className="section">
      <SectionTitle eyebrow="Achievements" title="Momentum built through practice" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {achievements.map(([label, value]) => <CounterCard key={label} label={label as string} value={value as number} />)}
      </div>
    </section>
  );
}
