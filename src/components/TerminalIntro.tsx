import { motion } from 'framer-motion';

export function TerminalIntro() {
  const lines = ['> npm run dev', '> Building modern web experiences...', '> Full Stack Developer Ready.'];

  return (
    <motion.div className="glass rounded-xl p-5 font-mono text-sm text-slate-200" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}>
      <div className="mb-4 flex gap-2">
        <span className="h-3 w-3 rounded-full bg-red-400" />
        <span className="h-3 w-3 rounded-full bg-yellow-400" />
        <span className="h-3 w-3 rounded-full bg-green-400" />
      </div>
      <div className="space-y-3">
        {lines.map((line, index) => (
          <motion.p key={line} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 + index * 0.25 }}>
            {line}
          </motion.p>
        ))}
      </div>
    </motion.div>
  );
}
