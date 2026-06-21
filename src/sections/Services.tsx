import { motion } from 'framer-motion';
import { Code2, Database, Gauge, KeyRound, Layout, Server } from 'lucide-react';
import { SectionTitle } from '../components/ui/SectionTitle';
import { services } from '../data/portfolio';

const icons = [Code2, Server, Layout, Layout, Server, Database, KeyRound, Layout, Code2, Gauge];

export function Services() {
  return (
    <section id="services" className="section">
      <SectionTitle eyebrow="Services" title="Practical development services" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {services.map((service, index) => {
          const Icon = icons[index];
          return (
            <motion.div key={service} className="glass rounded-xl p-5 transition hover:-translate-y-1 hover:border-cyan/40" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.04 }}>
              <Icon className="mb-4 text-cyan" size={26} />
              <h3 className="text-base font-bold text-white">{service}</h3>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
