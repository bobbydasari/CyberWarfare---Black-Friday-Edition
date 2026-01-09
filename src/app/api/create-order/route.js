import Razorpay from "razorpay";
import { NextResponse } from "next/server";
import { authMiddleware } from "@/lib/auth";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export async function POST(req) {
  try {
    const user = authMiddleware(req);
    if (!user) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const { amount, currency = "INR" } = await req.json();

    if (!amount) {
      return NextResponse.json(
        { message: "Amount is required" },
        { status: 400 }
      );
    }

    const options = {
      amount: Math.round(amount * 100), // amount in the smallest currency unit (paise)
      currency,
      receipt: `receipt_order_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);

    if (!order) {
      return NextResponse.json(
        { message: "Failed to create order" },
        { status: 500 }
      );
    }

    return NextResponse.json(order, { status: 200 });
  } catch (error) {
    console.error("Razorpay order error:", error);
    return NextResponse.json(
      { message: "Internal Server Error", error: error.message },
      { status: 500 }
    );
  }
}
