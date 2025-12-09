"use client";

import { useState } from "react";

export default function Home() {
  const [imageSrc, setImageSrc] = useState("");

  async function fetchLatest() {
    const res = await fetch("/api/latest", { cache: "no-store" });
    const data = await res.json();
    setImageSrc(data.imageBase64);
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Uploaded Image Viewer</h1>

      <button onClick={fetchLatest}>
        最新の画像を読み込む
      </button>

      {imageSrc && (
        <div style={{ marginTop: 20 }}>
          <img src={imageSrc} width="300" />
        </div>
      )}
    </div>
  );
}
