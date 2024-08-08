import prisma from "@/src/utils/connect";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const promotions = await prisma.promotion.findMany({
      orderBy: { createdAt: 'desc' }
    });

    return new NextResponse(
      JSON.stringify({ promotions }),
      {
        status: 200,
        headers: {
          'Cache-Control': 'no-store', // Disable caching
        },
      }
    );
  } catch (err) {
    console.error(err);
    return new NextResponse(
      JSON.stringify({ message: 'Something went wrong!' }),
      { status: 500 }
    );
  }
}
