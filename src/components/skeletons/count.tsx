import { Skeleton } from "../ui/skeleton";

export function Count() {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 h-6 w-[5.5rem]" />
    </div>
  );
}
