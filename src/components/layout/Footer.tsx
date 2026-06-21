import { Github, Linkedin, Mail } from 'lucide-react';
import { navItems, profile } from '../../data/portfolio';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20">
      <div className="section py-10">
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-mono text-xl font-bold text-white">Assem Mohamed</p>
            <p className="mt-3 max-w-md text-sm leading-7 text-slate-400">
              Designed & Developed by Assem Mohamed. Building fast, accessible, and scalable web applications.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-white">Quick Links</h3>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {navItems.slice(0, 6).map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-sm text-slate-400 hover:text-cyan">
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-white">Social Links</h3>
            <div className="mt-4 flex gap-3">
              <a aria-label="GitHub" href={profile.github} className="rounded-lg border border-white/10 p-3 text-slate-300 hover:border-cyan hover:text-cyan"><Github size={18} /></a>
              <a aria-label="LinkedIn" href={profile.linkedin} className="rounded-lg border border-white/10 p-3 text-slate-300 hover:border-cyan hover:text-cyan"><Linkedin size={18} /></a>
              <a aria-label="Email" href={`mailto:${profile.email}`} className="rounded-lg border border-white/10 p-3 text-slate-300 hover:border-cyan hover:text-cyan"><Mail size={18} /></a>
            </div>
          </div>
        </div>
        <p className="mt-10 text-sm text-slate-500">Copyright © {new Date().getFullYear()} Assem Mohamed. All rights reserved.</p>
      </div>
    </footer>
  );
}
