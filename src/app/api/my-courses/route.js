import dbConnect from "@/lib/db";
import Subscription from "@/models/Subscription";
import "@/models/Course"; // Ensure Course model is registered for populate
import { authMiddleware } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const user = authMiddleware(req);
    if (!user) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    await dbConnect();

    const subscriptions = await Subscription.find({ userId: user.userId })
      .populate("courseId")
      .sort({ subscribedAt: -1 });

    return NextResponse.json(subscriptions, { status: 200 });
  } catch (error) {
    console.error("Fetch subscriptions error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
