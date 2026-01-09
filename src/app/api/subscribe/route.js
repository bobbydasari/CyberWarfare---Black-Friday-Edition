import dbConnect from "@/lib/db";
import Subscription from "@/models/Subscription";
import Course from "@/models/Course";
import { authMiddleware } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const user = authMiddleware(req);
    if (!user) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const {
      courseId,
      promoCode,
      razorpay_payment_id,
      razorpay_order_id,
      razorpay_signature,
    } = await req.json();

    await dbConnect();

    // Check if already subscribed
    const existingSub = await Subscription.findOne({
      userId: user.userId,
      courseId,
    });
    if (existingSub) {
      return NextResponse.json(
        { message: "Already subscribed to this course" },
        { status: 400 }
      );
    }

    const course = await Course.findById(courseId);
    if (!course) {
      return NextResponse.json(
        { message: "Course not found" },
        { status: 404 }
      );
    }

    let finalPrice = course.price;

    if (course.price > 0) {
      if (promoCode === "BFSALE25") {
        finalPrice = course.price * 0.5;
      } else if (!promoCode && !razorpay_payment_id) {
        // Fallback or explicit check: if no promo and no payment id, it's an error
        return NextResponse.json(
          { message: "Payment required for paid courses" },
          { status: 400 }
        );
      }

      // Basic verification: In a real app, we would verify the signature here.
      // For this mini course app, we'll accept the payment_id as proof of payment.
      if (!razorpay_payment_id) {
        return NextResponse.json(
          { message: "Payment verification failed: No payment ID" },
          { status: 400 }
        );
      }
    }

    const subscription = await Subscription.create({
      userId: user.userId,
      courseId,
      pricePaid: finalPrice,
      subscribedAt: new Date(),
      paymentId: razorpay_payment_id, // Store payment ID
    });

    return NextResponse.json(
      { message: "Successfully subscribed", subscription },
      { status: 201 }
    );
  } catch (error) {
    console.error("Subscription error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
