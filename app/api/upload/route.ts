import { NextRequest, NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";

export async function POST(req: NextRequest) {
  try {
    // raw binary を取得
    const arrayBuffer = await req.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // 保存先
    const fileName = `upload_${Date.now()}.png`;
    const filePath = path.join(process.cwd(), "public", "uploads", fileName);

    // 保存
    await writeFile(filePath, buffer);

    // フロントで表示可能なURLを返す
    return NextResponse.json({
      url: `/uploads/${fileName}`
    });
  } catch (error) {
    console.error(error);
    return new NextResponse("Error uploading file", { status: 500 });
  }
}
