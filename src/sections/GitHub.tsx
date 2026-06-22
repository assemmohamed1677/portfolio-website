import { Github, Star } from 'lucide-react';
import { SectionTitle } from '../components/ui/SectionTitle';
import { profile } from '../data/portfolio';
import { useGithub } from '../hooks/useGithub';

const fallbackRepos = [
  {
    id: 1,
    name: 'portfolio-website',
    html_url: 'https://github.com/assemmohamed1677/portfolio-website',
    description: 'Premium full stack developer portfolio built with React, Vite, TypeScript, and Tailwind CSS.',
    language: 'TypeScript',
    stargazers_count: 0,
  },
  {
    id: 2,
    name: 'studytrack',
    html_url: 'https://github.com/assemmohamed1677',
    description: 'Student management dashboard concept with authentication, CRUD flows, and progress tracking.',
    language: 'React',
    stargazers_count: 0,
  },
];

export function GitHub() {
  const { user, repos, loading, error } = useGithub(profile.githubUser);
  const visibleRepos = repos.length > 0 ? repos.slice(0, 4) : fallbackRepos;

  return (
    <section id="github" className="section">
      <SectionTitle eyebrow="GitHub" title="Live repository activity" description="Repository count, followers, latest repositories, and a contribution-style activity grid pulled from GitHub when available." />
      <div className="grid items-start gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="glass rounded-xl p-6 lg:sticky lg:top-24">
          <Github className="mb-5 text-cyan" size={34} />
          <p className="text-sm text-slate-400">GitHub Username</p>
          <h3 className="mt-1 text-2xl font-bold text-white">@{profile.githubUser}</h3>
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-white/5 p-4">
              <p className="text-3xl font-bold text-white">{loading ? '...' : user?.public_repos ?? 30}</p>
              <p className="text-sm text-slate-400">Repositories</p>
            </div>
            <div className="rounded-lg bg-white/5 p-4">
              <p className="text-3xl font-bold text-white">{loading ? '...' : user?.followers ?? 0}</p>
              <p className="text-sm text-slate-400">Followers</p>
            </div>
          </div>
          {error ? <p className="mt-4 text-sm text-amber-300">{error}</p> : null}
          <a href={profile.github} className="mt-6 inline-flex rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500">View GitHub Profile</a>
        </div>
        <div className="glass rounded-xl p-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h3 className="text-xl font-bold text-white">Contribution Graph</h3>
              <p className="mt-1 text-sm text-slate-400">A compact activity preview inspired by GitHub contributions.</p>
            </div>
            <span className="rounded-full border border-cyan/30 bg-cyan/10 px-3 py-1 text-xs font-semibold text-cyan">Active learning</span>
          </div>
          <div className="mt-5 grid gap-1" style={{ gridTemplateColumns: 'repeat(14, minmax(0, 1fr))' }} aria-label="Contribution activity preview">
            {Array.from({ length: 84 }).map((_, index) => (
              <span key={index} className={`aspect-square rounded-[3px] ${index % 7 === 0 ? 'bg-cyan/70' : index % 5 === 0 ? 'bg-primary/60' : index % 3 === 0 ? 'bg-primary/25' : 'bg-white/5'}`} />
            ))}
          </div>
          <h3 className="mb-4 mt-7 text-xl font-bold text-white">Latest Repositories</h3>
          <div className="grid gap-3 md:grid-cols-2">
            {visibleRepos.map((repo) => (
              <a key={repo.id} href={repo.html_url} className="rounded-lg border border-white/10 bg-white/5 p-4 transition hover:border-cyan/50">
                <div className="flex items-center justify-between gap-3">
                  <h4 className="font-semibold text-white">{repo.name}</h4>
                  <span className="inline-flex items-center gap-1 text-xs text-slate-400"><Star size={13} /> {repo.stargazers_count}</span>
                </div>
                <p className="mt-2 line-clamp-2 text-sm text-slate-400">{repo.description ?? 'Full stack project repository.'}</p>
                <p className="mt-3 text-xs font-semibold text-cyan">{repo.language ?? 'Code'}</p>
              </a>
            ))}
          </div>
          {!loading && repos.length === 0 ? <p className="mt-4 text-sm text-slate-400">Showing curated repositories while live GitHub data is unavailable.</p> : null}
        </div>
      </div>
    </section>
  );
}
