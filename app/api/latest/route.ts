let latestImageBase64 = "";

export async function GET() {
  return Response.json({ imageBase64: latestImageBase64 });
}

export async function POST(req: Request) {
  const { imageBase64 } = await req.json();
  latestImageBase64 = imageBase64;
  return Response.json({ ok: true });
}
