import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const arrayBuffer = await req.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // base64 にして返す
    const base64 = buffer.toString("base64");

    return NextResponse.json({
      image: `data:image/png;base64,${base64}`
    });
  } catch (error) {
    console.error(error);
    return new NextResponse("Error", { status: 500 });
  }
}
