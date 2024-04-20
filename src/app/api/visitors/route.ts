import { NextResponse } from "next/server";

import { redis } from "@/lib/redis";

export async function GET() {
  const key = "visitor_count";

  try {
    // Check if visitor count key exists
    const countStr = await redis.get(key);
    let count = parseInt(countStr as string) || 0;

    // Increment visitor count
    count++;

    // Save visitor count
    await redis.incr(key);

    return NextResponse.json({
      success: true,
      count,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Failed to get visitor count",
    });
  }
}
