import { NextResponse } from 'next/server';
import prisma from '@/src/utils/connect';
import { getAuthSession } from '@/src/utils/auth';

// GET FEATURED POSTS
export async function GET(req) {
  try {
    const posts = await prisma.post.findMany({
      where: { featured: true }, // Adjust based on your schema
      orderBy: { createdAt: 'desc' }, // Adjust ordering as needed
    });

    return NextResponse.json({ posts });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: 'Failed to fetch featured posts' }, { status: 500 });
  }
}

// CREATE A FEATURED POST
export async function POST(req) {
  const session = await getAuthSession();

  if (!session) {
    return NextResponse.json({ message: 'Not Authenticated!' }, { status: 401 });
  }

  try {
    const body = await req.json();
    const { keywords, ...postData } = body;

    const post = await prisma.post.create({
      data: { ...postData, userEmail: session.user.email, featured: true },
    });

    if (keywords && keywords.length > 0) {
      const keywordPromises = keywords.map((keyword) =>
        prisma.keyword.create({
          data: { keyword, postSlug: post.slug },
        })
      );
      await Promise.all(keywordPromises);
    }

    return NextResponse.json(post);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: 'Failed to create featured post' }, { status: 500 });
  }
}
