import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      default: 0, // 0 means free
    },
    image: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Course || mongoose.model("Course", CourseSchema);
