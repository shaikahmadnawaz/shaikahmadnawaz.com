import rehypePrism from "@mapbox/rehype-prism";
import nextMDX from "@next/mdx";
import remarkGfm from "remark-gfm";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
  images: {
    remotePatterns: [ {protocol: 'https',
    hostname: 's3.ap-south-1.amazonaws.com',
    port: '',
  }],
  },
};

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
});

export default withMDX(nextConfig);
