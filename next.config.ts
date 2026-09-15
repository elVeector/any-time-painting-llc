import type { NextConfig } from 'next';

const isGitHubPages = process.env.GITHUB_PAGES === 'true';
const repositoryBasePath = '/any-time-painting-llc';

const nextConfig: NextConfig = {
  ...(isGitHubPages && {
    output: 'export',
    basePath: repositoryBasePath,
    assetPrefix: repositoryBasePath,
  }),
};

export default nextConfig;
