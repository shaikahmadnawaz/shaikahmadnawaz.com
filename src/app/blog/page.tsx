import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { BlogWithSlug, getAllBlogs } from "@/lib/blog";
import Link from "next/link";

const Blog = ({ blog }: { blog: BlogWithSlug }) => {
  return (
    <article className="flex">
      <Card className="">
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
    <div className="md:border-l md:border-zinc-100 mx-auto md:dark:border-zinc-700/40 my-20">
      <div className="flex max-w-6xl mx-auto flex-col space-y-16">
        {blogs.map((blog) => (
          <Blog key={blog.slug} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
