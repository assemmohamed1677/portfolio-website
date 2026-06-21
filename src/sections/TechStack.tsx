import { motion } from 'framer-motion';
import { SectionTitle } from '../components/ui/SectionTitle';
import { techIcons } from '../data/portfolio';

export function TechStack() {
  return (
    <section className="section">
      <SectionTitle eyebrow="Tech Stack" title="Tools I use to build modern apps" />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {techIcons.map(({ label, Icon }, index) => (
          <motion.div key={label} className="glass rounded-xl p-5 text-center transition hover:-translate-y-1 hover:border-cyan/40" initial={{ opacity: 0, scale: 0.94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.025 }}>
            <Icon className="mx-auto mb-3 text-3xl text-cyan" aria-hidden="true" />
            <p className="text-sm font-semibold text-slate-200">{label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
