// app/api/posts/route.js
import prisma from "@/src/utils/connect";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Fetch all promotions from the database
    const promotions = await prisma.promotion.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ promotions }, { status: 200 });
  } catch (err) {
    console.error("Error fetching promotions:", err);
    return NextResponse.json({ message: "Something went wrong!" }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    // Parse the request body to get promotion data
    const data = await request.json();

    // Validate the input (optional)
    if (!data.title || !data.description || !data.link) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    // Create a new promotion in the database
    const newPromotion = await prisma.promotion.create({
      data,
    });

    return NextResponse.json({ promotion: newPromotion }, { status: 201 });
  } catch (err) {
    console.error("Error adding promotion:", err);
    return NextResponse.json({ message: "Failed to create promotion!" }, { status: 500 });
  }
}
