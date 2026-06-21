import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { DeveloperIllustration } from '../components/DeveloperIllustration';
import { TerminalIntro } from '../components/TerminalIntro';
import { profile } from '../data/portfolio';
import { useTypewriter } from '../hooks/useTypewriter';

export function Hero() {
  const role = useTypewriter(['Full Stack Developer', 'React Developer', 'Angular Developer', 'Node.js Developer', 'NestJS Developer']);

  return (
    <section id="home" className="aurora relative overflow-hidden pt-28">
      <div className="absolute inset-0 bg-grid bg-[size:42px_42px] opacity-40" />
      <div className="section relative grid min-h-[calc(100vh-5rem)] items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <motion.p className="font-mono text-sm font-semibold uppercase tracking-[0.3em] text-cyan" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
            MERN Stack Developer / MEAN Stack Developer
          </motion.p>
          <motion.h1 className="mt-5 text-5xl font-extrabold leading-tight gradient-text sm:text-6xl lg:text-7xl" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            {profile.name}
          </motion.h1>
          <motion.p className="mt-5 min-h-9 text-2xl font-bold text-white sm:text-3xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}>
            {role}<span className="text-cyan">|</span>
          </motion.p>
          <motion.p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            I build polished full stack products with React, Angular, Node.js, NestJS, and databases that turn real problems into fast, maintainable web experiences.
          </motion.p>
          <motion.div className="mt-8 flex flex-col gap-3 sm:flex-row" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.38 }}>
            <Button href="#projects">View Projects <ArrowRight className="ml-2" size={18} /></Button>
            <Button href="/Assem-Mohamed-Resume.pdf" variant="ghost">Download Resume <Download className="ml-2" size={18} /></Button>
            <Button href={`mailto:${profile.email}`} variant="ghost">Contact Me <Mail className="ml-2" size={18} /></Button>
          </motion.div>
          <div className="mt-8 max-w-xl">
            <TerminalIntro />
          </div>
        </div>
        <DeveloperIllustration />
      </div>
    </section>
  );
}
