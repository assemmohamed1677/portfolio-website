import { useEffect, useState } from 'react';

export function useTypewriter(words: string[], speed = 68, pause = 1300) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    const complete = displayed === word;
    const empty = displayed === '';
    const delay = complete && !deleting ? pause : deleting ? speed / 2 : speed;

    const timeout = window.setTimeout(() => {
      if (complete && !deleting) {
        setDeleting(true);
      } else if (empty && deleting) {
        setDeleting(false);
        setIndex((current) => current + 1);
      } else {
        setDisplayed(word.slice(0, displayed.length + (deleting ? -1 : 1)));
      }
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [deleting, displayed, index, pause, speed, words]);

  return displayed;
}
