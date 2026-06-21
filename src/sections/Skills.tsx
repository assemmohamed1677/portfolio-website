import { motion } from 'framer-motion';
import { SectionTitle } from '../components/ui/SectionTitle';
import { skills } from '../data/portfolio';

export function Skills() {
  return (
    <section id="skills" className="section">
      <SectionTitle eyebrow="Skills" title="Balanced across frontend, backend, data, and tools" />
      <div className="grid gap-6 lg:grid-cols-2">
        {skills.map((group, index) => (
          <motion.div key={group.group} className="glass rounded-xl p-6" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }}>
            <h3 className="mb-6 text-xl font-bold text-white">{group.group}</h3>
            <div className="space-y-4">
              {group.items.map(([name, level]) => (
                <div key={name}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="font-medium text-slate-200">{name}</span>
                    <span className="font-mono text-cyan">{level}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                    <motion.div className="h-full rounded-full bg-gradient-to-r from-primary to-cyan" initial={{ width: 0 }} whileInView={{ width: `${level}%` }} viewport={{ once: true }} transition={{ duration: 0.9, ease: 'easeOut' }} />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
