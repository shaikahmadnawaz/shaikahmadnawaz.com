"use client";
import { BlogWithSlug } from "@/lib/blog";
import { formatDate } from "@/lib/format-date";
import { useRouter } from "next/navigation";
import { Prose } from "../../components/prose";

const Blog = ({
  blog,
  children,
}: {
  blog: BlogWithSlug;
  children: React.ReactNode;
}) => {
  let router = useRouter();

  return (
    <div className="mx-auto relative overflow-hidden py-24 sm:py-32">
      <header className="flex flex-col">
        <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
          {blog.title}
        </h1>

        <time
          dateTime={blog.date}
          className="order-first flex items-center text-base text-zinc-500"
        >
          <span className="h-4 w-0.5 rounded-full bg-zinc-500" />
          <span className="ml-3">{formatDate(blog.date)}</span>
        </time>
      </header>
      <Prose className="mt-8" data-mdx-content>
        {children}
      </Prose>
    </div>
  );
};

export default Blog;
