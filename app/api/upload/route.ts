import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    // バイナリ取得
    const arrayBuffer = await req.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // base64へ変換
    const base64 = buffer.toString("base64");
    const dataUrl = `data:image/png;base64,${base64}`;

    // 保存処理
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/latest`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ imageBase64: dataUrl }),
    });

    return NextResponse.json({ status: "ok" });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
