import type { AnchorHTMLAttributes, ReactNode } from 'react';

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: 'primary' | 'ghost';
  children: ReactNode;
};

export function Button({ variant = 'primary', className = '', children, ...props }: ButtonProps) {
  const styles =
    variant === 'primary'
      ? 'bg-primary text-white shadow-glow hover:bg-blue-500'
      : 'border border-slate-700/80 bg-white/5 text-slate-100 hover:border-cyan hover:text-cyan';

  return (
    <a
      className={`inline-flex min-h-12 items-center justify-center rounded-lg px-5 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan ${styles} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
