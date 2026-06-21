import { Helmet } from 'react-helmet-async';
import { profile } from '../data/portfolio';

export function SEO() {
  const title = 'Assem Mohamed | Full Stack Developer';
  const description = 'Premium full stack developer portfolio for Assem Mohamed, MERN and MEAN developer in Alexandria, Egypt.';
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    jobTitle: 'Full Stack Developer',
    email: profile.email,
    address: profile.location,
    url: 'https://assem-mohamed.dev',
    sameAs: [profile.github, profile.linkedin],
    knowsAbout: ['React', 'Angular', 'Node.js', 'NestJS', 'MongoDB', 'MySQL', 'REST APIs'],
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="Assem Mohamed, Full Stack Developer, MERN, MEAN, React, Angular, Node.js, NestJS" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://assem-mohamed.dev" />
      <meta property="og:image" content="/favicon.svg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
}
