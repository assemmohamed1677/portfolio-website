import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { ProjectVisual } from '../components/ProjectVisual';
import { SectionTitle } from '../components/ui/SectionTitle';
import { projects } from '../data/portfolio';

export function Projects() {
  return (
    <section id="projects" className="section">
      <SectionTitle eyebrow="Featured Projects" title="Product-minded full stack work" />
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article key={project.title} className="glass overflow-hidden rounded-xl transition hover:-translate-y-1 hover:border-cyan/40" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }}>
            <ProjectVisual variant={project.variant} />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              <p className="mt-3 leading-7 text-slate-400">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-blue-200">{tech}</span>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.features.map((feature) => (
                  <span key={feature} className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300">{feature}</span>
                ))}
              </div>
              <div className="mt-6 flex gap-3">
                <a href={project.liveDemo} className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500" aria-label={`Open ${project.title} live demo`}>
                  Live Demo <ExternalLink size={16} />
                </a>
                <a href={project.githubUrl} className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm font-semibold text-slate-200 hover:border-cyan hover:text-cyan" aria-label={`Open ${project.title} GitHub repository`}>
                  GitHub <Github size={16} />
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
