export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="px-6 pt-20 mx-auto space-y-8 max-w-5xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
      {children}
    </div>
  );
}
