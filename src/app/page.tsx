"use client";

import { Count } from "@/components/skeletons/count";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";

export default function Home() {
  const [visitorCount, setVisitorCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch("http://localhost:3000/api/visitors");
        const data = await response.json();
        console.log(data);

        if (data.success) {
          setVisitorCount(data.count);
        } else {
          setError(data.message);
        }
      } catch (error) {
        console.error("Error fetching visitor count:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <main className="h-[80vh] mx-auto items-center justify-center w-full flex">
      {isLoading && <Count />}
      {error && <p>Error: {error}</p>}
      {visitorCount > 0 && <Badge>Visitors: {visitorCount}</Badge>}
    </main>
  );
}
