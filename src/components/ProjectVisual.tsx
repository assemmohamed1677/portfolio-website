import type { projects } from '../data/portfolio';

type Variant = (typeof projects)[number]['variant'];

export function ProjectVisual({ variant }: { variant: Variant }) {
  if (variant === 'kanban') {
    return (
      <div className="grid h-48 grid-cols-3 gap-3 rounded-lg bg-slate-950 p-4">
        {['To Do', 'Doing', 'Done'].map((column, index) => (
          <div key={column} className="rounded-lg bg-white/5 p-2">
            <p className="mb-3 text-xs font-bold text-slate-300">{column}</p>
            {[0, 1, 2].slice(0, 3 - (index === 2 ? 1 : 0)).map((item) => (
              <div key={item} className="mb-2 h-9 rounded-md bg-gradient-to-r from-primary/30 to-cyan/20" />
            ))}
          </div>
        ))}
      </div>
    );
  }

  if (variant === 'shop') {
    return (
      <div className="h-48 rounded-lg bg-slate-950 p-4">
        <div className="mb-4 h-8 rounded-lg bg-white/8" />
        <div className="grid grid-cols-3 gap-3">
          {[1, 2, 3].map((item) => (
            <div key={item} className="rounded-lg bg-white/5 p-2">
              <div className="mb-2 aspect-square rounded-md bg-gradient-to-br from-primary/40 to-cyan/30" />
              <div className="h-2 rounded bg-slate-700" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (variant === 'game') {
    return (
      <div className="grid h-48 place-items-center rounded-lg bg-slate-950 p-4 font-mono">
        <div className="text-center">
          <p className="mb-4 text-4xl font-bold tracking-[0.35em] text-cyan">H_NGM_N</p>
          <div className="mx-auto mb-4 h-20 w-20 rounded-full border-4 border-primary/70" />
          <p className="text-sm text-slate-400">Score 240 / Hard Mode</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-48 rounded-lg bg-slate-950 p-4">
      <div className="mb-4 grid grid-cols-3 gap-3">
        {[82, 64, 91].map((value) => (
          <div key={value} className="rounded-lg bg-white/5 p-3">
            <p className="text-xl font-bold text-white">{value}%</p>
            <div className="mt-2 h-2 rounded bg-cyan/40" />
          </div>
        ))}
      </div>
      <div className="h-20 rounded-lg bg-gradient-to-r from-primary/30 via-cyan/20 to-primary/10" />
    </div>
  );
}
