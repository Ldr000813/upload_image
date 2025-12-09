import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { imageBase64 } = await req.json();

  const dataUrl = `data:image/png;base64,${imageBase64}`;

  await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/latest`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageBase64: dataUrl })
  });

  return NextResponse.json({ ok: true });
}
