import { NextRequest, NextResponse } from "next/server";
export async function POST(req: NextRequest) {
  const arrayBuffer = await req.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const base64 = buffer.toString("base64");
  const dataUrl = `data:image/png;base64,${base64}`;

  // save to latest
  await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/latest`, {
    method: "POST",
    body: JSON.stringify({ imageBase64: dataUrl }),
    headers: { "Content-Type": "application/json" }
  });

  return NextResponse.json({
    status: "received"
  });
}
