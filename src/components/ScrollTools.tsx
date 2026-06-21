import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export function ScrollTools() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
      setVisible(window.scrollY > 600);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div className="fixed left-0 top-0 z-[80] h-1 bg-gradient-to-r from-primary to-cyan" style={{ width: `${progress}%` }} />
      {visible ? (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-5 right-5 z-50 rounded-lg border border-white/10 bg-primary p-3 text-white shadow-glow transition hover:-translate-y-1"
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </button>
      ) : null}
    </>
  );
}
