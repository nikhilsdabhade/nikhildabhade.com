import type { NextConfig } from "next";
import createMDX from '@next/mdx';

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [],
    rehypePlugins: [
      [
        'rehype-pretty-code',
        {
          theme: 'github-dark',
        },
      ],
    ],
  },
})

export default withMDX(nextConfig);
