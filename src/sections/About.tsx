import { motion } from 'framer-motion';
import { GraduationCap, Rocket, Sparkles } from 'lucide-react';
import { SectionTitle } from '../components/ui/SectionTitle';

export function About() {
  const cards = [
    ['Faculty of Engineering Graduate', 'Strong analytical foundation with a practical software development focus.', GraduationCap],
    ['ITI Training', 'Professional full stack web development training using modern JavaScript technologies.', Sparkles],
    ['Builder Mindset', 'I enjoy solving real problems, learning continuously, and shipping scalable applications.', Rocket],
  ];

  return (
    <section id="about" className="section">
      <SectionTitle eyebrow="About" title="Software-first engineering mindset" description="A focused introduction built around craft, learning, and practical full stack delivery." />
      <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
        <motion.div className="glass rounded-xl p-7" initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <p className="text-lg leading-9 text-slate-300">
            I am a passionate Full Stack Developer specializing in both MERN and MEAN stacks. I enjoy building scalable web applications, solving real-world problems, and continuously learning modern technologies that improve product quality and developer experience.
          </p>
          <p className="mt-5 text-lg leading-9 text-slate-300">
            I graduated from the Faculty of Engineering and completed training at ITI, where I strengthened my full stack workflow across frontend architecture, backend APIs, databases, authentication, and deployment-ready application structure.
          </p>
        </motion.div>
        <div className="grid gap-4">
          {cards.map(([title, text, Icon], index) => (
            <motion.div key={title as string} className="glass rounded-xl p-5 transition hover:-translate-y-1 hover:border-cyan/40" initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }}>
              <Icon className="mb-4 text-cyan" size={28} />
              <h3 className="text-lg font-bold text-white">{title as string}</h3>
              <p className="mt-2 leading-7 text-slate-400">{text as string}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
