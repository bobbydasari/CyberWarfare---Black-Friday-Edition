import mongoose from "mongoose";

const SubscriptionSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
    pricePaid: {
      type: Number,
      required: true,
    },
    paymentId: {
      type: String,
      required: false,
    },
    subscribedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Subscription ||
  mongoose.model("Subscription", SubscriptionSchema);
