import { motion } from 'framer-motion';

export function DeveloperIllustration() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-lg">
      <motion.div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl" animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.72, 0.4] }} transition={{ repeat: Infinity, duration: 5 }} />
      <motion.div className="glass absolute inset-6 rounded-2xl p-4" animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}>
        <div className="rounded-xl border border-white/10 bg-slate-950/80 p-4">
          <div className="mb-4 flex gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-400" />
          </div>
          <div className="space-y-3 font-mono text-[clamp(0.7rem,2vw,0.95rem)]">
            <p><span className="text-cyan">const</span> developer = <span className="text-primary">{'{'}</span></p>
            <p className="pl-5 text-slate-300">name: <span className="text-green-300">'Assem'</span>,</p>
            <p className="pl-5 text-slate-300">stack: [<span className="text-green-300">'MERN'</span>, <span className="text-green-300">'MEAN'</span>],</p>
            <p className="pl-5 text-slate-300">focus: <span className="text-green-300">'scalable apps'</span></p>
            <p><span className="text-primary">{'}'}</span>;</p>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-3">
          {['API', 'DB', 'UI'].map((item, index) => (
            <motion.div key={item} className="rounded-lg border border-white/10 bg-white/5 p-3 text-center font-mono text-sm text-cyan" animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 3, delay: index * 0.3 }}>
              {item}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
