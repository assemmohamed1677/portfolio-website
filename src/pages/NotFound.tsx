import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-ink px-4 text-center">
      <Helmet><title>404 | Assem Mohamed</title></Helmet>
      <div className="glass max-w-lg rounded-xl p-8">
        <p className="font-mono text-cyan">404</p>
        <h1 className="mt-3 text-4xl font-extrabold gradient-text">Page not found</h1>
        <p className="mt-4 text-slate-300">This route does not exist, but the portfolio is ready back at the homepage.</p>
        <Link to="/" className="mt-6 inline-flex rounded-lg bg-primary px-5 py-3 text-sm font-bold text-white hover:bg-blue-500">Back Home</Link>
      </div>
    </main>
  );
}
