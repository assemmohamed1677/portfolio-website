import { useEffect, useState } from 'react';
import type { GitHubRepo, GitHubUser } from '../types/github';

type GitHubState = {
  user: GitHubUser | null;
  repos: GitHubRepo[];
  loading: boolean;
  error: string | null;
};

export function useGithub(username: string) {
  const [state, setState] = useState<GitHubState>({ user: null, repos: [], loading: true, error: null });

  useEffect(() => {
    const controller = new AbortController();

    async function loadGithub() {
      try {
        const [userResponse, repoResponse] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`, { signal: controller.signal }),
          fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`, { signal: controller.signal }),
        ]);

        if (!userResponse.ok || !repoResponse.ok) {
          throw new Error('GitHub API request failed');
        }

        const user = (await userResponse.json()) as GitHubUser;
        const repos = ((await repoResponse.json()) as GitHubRepo[]).filter((repo) => !repo.fork);
        setState({ user, repos, loading: false, error: null });
      } catch (error) {
        if (error instanceof DOMException && error.name === 'AbortError') return;
        setState({
          user: { public_repos: 30, followers: 0, html_url: `https://github.com/${username}` },
          repos: [],
          loading: false,
          error: 'Live GitHub data is unavailable right now.',
        });
      }
    }

    loadGithub();
    return () => controller.abort();
  }, [username]);

  return state;
}
