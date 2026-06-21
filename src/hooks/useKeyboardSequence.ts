import { useEffect, useState } from 'react';

export function useKeyboardSequence(sequence: string) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    let typed = '';

    function onKeyDown(event: KeyboardEvent) {
      if (event.ctrlKey || event.metaKey || event.altKey) return;
      if (event.key.length !== 1) return;

      typed = (typed + event.key.toLowerCase()).slice(-sequence.length);
      if (typed === sequence) {
        setActive(true);
        window.setTimeout(() => setActive(false), 1200);
      }
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [sequence]);

  return active;
}
