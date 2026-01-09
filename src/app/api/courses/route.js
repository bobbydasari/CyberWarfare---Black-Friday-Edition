import dbConnect from "@/lib/db";
import Course from "@/models/Course";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await dbConnect();

    let courses = await Course.find({});

    // Seed mock data if empty
    if (courses.length === 0) {
      const mockCourses = [
        {
          title: "Full-Stack Web Development",
          description: "Learn React, Node, and MongoDB from scratch.",
          price: 99,
          image:
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&h=250",
        },
        {
          title: "Mastering JavaScript",
          description: "Deep dive into JS ES6+, Async/Await, and more.",
          price: 0, // Free
          image:
            "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=400&h=250",
        },
        {
          title: "UI/UX Design Essentials",
          description: "Master Figma and design principles.",
          price: 49,
          image:
            "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=400&h=250",
        },
        {
          title: "Python for Data Science",
          description: "Pandas, Numpy, and Matplotlib tutorial.",
          price: 0, // Free
          image:
            "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=400&h=250",
        },
        {
          title: "Next.js 15 Masterclass",
          description: "Learn Next.js App Router and Server Components.",
          price: 149,
          image:
            "https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=400&h=250",
        },
      ];
      await Course.insertMany(mockCourses);
      courses = await Course.find({});
    }

    return NextResponse.json(courses, { status: 200 });
  } catch (error) {
    console.error("Courses fetch error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
