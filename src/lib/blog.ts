import glob from "fast-glob";

interface Blog {
  title: string;
  description: string;
  author: string;
  date: string;
}

export interface BlogWithSlug extends Blog {
  slug: string;
}
export async function importBlog(blogFilename: string): Promise<BlogWithSlug> {
  let { blog } = (await import(`../app/blog/${blogFilename}`)) as {
    default: React.ComponentType;
    blog: Blog;
  };
  return {
    slug: blogFilename.replace(/(\/page)?\.mdx$/, ""),
    ...blog,
  };
}

export async function getAllBlogs() {
  let blogFilenames = await glob("*/page.mdx", {
    cwd: "./src/app/blog",
  });
  let blogs = await Promise.all(blogFilenames.map(importBlog));
  return blogs.sort((a, z) => +new Date(z.date) - +new Date(a.date));
}
