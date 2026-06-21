import { useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';
import { navItems } from '../data/portfolio';

type CommandPaletteProps = {
  open: boolean;
  onClose: () => void;
};

export function CommandPalette({ open, onClose }: CommandPaletteProps) {
  const commands = useMemo(() => navItems.map((item) => ({ label: `Go to ${item}`, href: `#${item.toLowerCase()}` })), []);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        if (open) onClose();
      }
      if (event.key === 'Escape') onClose();
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose, open]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div className="fixed inset-0 z-[70] grid place-items-start bg-black/60 px-4 pt-24 backdrop-blur-sm sm:place-items-center sm:pt-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
          <motion.div
            className="glass w-full max-w-xl overflow-hidden rounded-xl"
            initial={{ scale: 0.96, y: 18 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.96, y: 18 }}
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
          >
            <div className="flex items-center gap-3 border-b border-white/10 px-4 py-4">
              <Search className="text-cyan" size={20} />
              <input autoFocus className="w-full bg-transparent text-white placeholder:text-slate-500" placeholder="Jump to a section..." aria-label="Search commands" />
            </div>
            <div className="p-2">
              {commands.map((command) => (
                <a key={command.label} href={command.href} onClick={onClose} className="block rounded-lg px-4 py-3 text-sm text-slate-200 hover:bg-white/8">
                  {command.label}
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
