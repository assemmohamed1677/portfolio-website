import { useEffect, useState } from 'react';
import { Command, Menu, X } from 'lucide-react';
import { navItems, profile } from '../../data/portfolio';

type NavbarProps = {
  onCommandOpen: () => void;
};

export function Navbar({ onCommandOpen }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition ${scrolled ? 'border-b border-white/10 bg-ink/78 backdrop-blur-xl' : 'bg-transparent'}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <a href="#home" className="font-mono text-lg font-bold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan">
          <span className="text-primary">A</span>M
        </a>
        <div className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-slate-300 transition hover:text-cyan">
              {item}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onCommandOpen}
            className="hidden items-center gap-2 rounded-lg border border-slate-800 bg-white/5 px-3 py-2 text-sm text-slate-300 transition hover:border-cyan hover:text-white sm:flex"
            aria-label="Open command palette"
          >
            <Command size={16} />
            Ctrl K
          </button>
          <a href={profile.github} className="hidden rounded-lg bg-white px-4 py-2 text-sm font-semibold text-ink transition hover:bg-cyan sm:inline-flex">
            GitHub
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="rounded-lg border border-slate-800 bg-white/5 p-2 text-white lg:hidden"
            aria-expanded={open}
            aria-label="Toggle mobile menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>
      {open ? (
        <div className="border-t border-white/10 bg-ink/95 px-4 py-4 backdrop-blur-xl lg:hidden">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-3 text-slate-200 hover:bg-white/5">
              {item}
            </a>
          ))}
        </div>
      ) : null}
    </header>
  );
}
