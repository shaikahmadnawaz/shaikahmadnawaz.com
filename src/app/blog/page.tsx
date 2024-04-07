import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { BlogWithSlug, getAllBlogs } from "@/lib/blog";
import Image from "next/image";
import Link from "next/link";

const Blog = ({ blog }: { blog: BlogWithSlug }) => {
  return (
    <Card>
      <Link href={`/blog/${blog.slug}`}>
        <CardHeader>
          <Image
            src={
              "https://s3.ap-south-1.amazonaws.com/shaikahmadnawaz.com/A+Beginner's+Journey+into+GraphQL.png"
            }
            width={300}
            height={300}
            alt="Picture of the author"
          />

          <CardTitle>{blog.title}</CardTitle>
        </CardHeader>
      </Link>
    </Card>
  );
};

const BlogPage = async () => {
  const blogs = await getAllBlogs();
  return (
    <div className="mx-auto space-y-8 md:space-y-16">
      <div className="max-w-2xl mx-auto lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Blog</h2>
        <p className="mt-4 text-muted-foreground">
          A collection of my thoughts and ideas on various topics.
        </p>
      </div>
      <div className="w-full h-px bg-primary" />

      <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
        {blogs.map((blog) => (
          <Blog key={blog.slug} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
