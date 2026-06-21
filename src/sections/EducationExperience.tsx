import { motion } from 'framer-motion';
import { BookOpen, BriefcaseBusiness } from 'lucide-react';
import { SectionTitle } from '../components/ui/SectionTitle';

export function EducationExperience() {
  const education = [
    ['Faculty of Engineering', "Bachelor's Degree", 'Graduated'],
    ['ITI', 'Professional Full Stack Web Development Training', 'Focus on modern web development using JavaScript technologies.'],
  ];
  const experience = ['Personal Projects', 'Open Source Learning', 'Self-driven Development', 'Hands-on Full Stack Training'];

  return (
    <section id="education" className="section">
      <SectionTitle eyebrow="Journey" title="Education and practical experience" />
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="glass rounded-xl p-6">
          <BookOpen className="mb-5 text-cyan" size={30} />
          <h3 className="mb-6 text-2xl font-bold text-white">Education</h3>
          <div className="space-y-5 border-l border-primary/30 pl-5">
            {education.map(([title, subtitle, text], index) => (
              <motion.div key={title} className="relative" initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <span className="absolute -left-[1.85rem] top-1 h-3 w-3 rounded-full bg-cyan shadow-glow" />
                <h4 className="font-bold text-white">{title}</h4>
                <p className="text-sm font-semibold text-blue-200">{subtitle}</p>
                <p className="mt-1 text-sm text-slate-400">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="glass rounded-xl p-6">
          <BriefcaseBusiness className="mb-5 text-cyan" size={30} />
          <h3 className="mb-4 text-2xl font-bold text-white">Experience</h3>
          <p className="leading-8 text-slate-400">
            As a junior developer, my experience is grounded in continuous learning, practical implementation, and hands-on full stack training across complete web application workflows.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {experience.map((item) => (
              <div key={item} className="rounded-lg bg-white/5 p-4 text-sm font-semibold text-slate-200">{item}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
