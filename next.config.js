 const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],   // Add remark plugins here (Markdown transformations)
    rehypePlugins: [],   // Add rehype plugins here (HTML transformations)
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],         // Add external image domains if needed
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'], // Support MDX pages
};

module.exports = withMDX(nextConfig);
