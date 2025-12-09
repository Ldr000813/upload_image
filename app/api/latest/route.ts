import { NextResponse } from "next/server";

let latestImageBase64 = "";

export async function GET() {
  return NextResponse.json({ imageBase64: latestImageBase64 });
}

export async function POST(req: Request) {
  const { imageBase64 } = await req.json();
  latestImageBase64 = imageBase64;
  return NextResponse.json({ ok: true });
}
