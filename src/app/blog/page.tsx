import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { BlogWithSlug, getAllBlogs } from "@/lib/blog";
import Link from "next/link";

const Blog = ({ blog }: { blog: BlogWithSlug }) => {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <CardTitle>
          <Link href={`/blog/${blog.slug}`}> {blog.title}</Link>
        </CardTitle>

        <CardDescription>{blog.description}</CardDescription>
      </Card>
    </article>
  );
};

const BlogPage = async () => {
  const blogs = await getAllBlogs();
  return (
    <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
      <div className="flex max-w-3xl flex-col space-y-16">
        {blogs.map((blog) => (
          <Blog key={blog.slug} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
