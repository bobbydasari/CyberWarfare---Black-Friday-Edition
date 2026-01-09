import dbConnect from "@/lib/db";
import Course from "@/models/Course";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    const { id } = await params;
    await dbConnect();

    const course = await Course.findById(id);

    if (!course) {
      return NextResponse.json(
        { message: "Course not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(course, { status: 200 });
  } catch (error) {
    console.error("Course fetch error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
