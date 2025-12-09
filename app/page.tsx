"use client";

import { useState } from "react";

export default function UploadView() {
  const [imageUrl, setImageUrl] = useState("");

  async function uploadTest() {
    // テスト用（Power Automate から来る実データとは別）
    const res = await fetch("/api/upload", {
      method: "POST",
      body: new Blob(["test"], { type: "image/png" }) // ダミー送信
    });

    const data = await res.json();
    setImageUrl(data.url);
  }

  return (
    <div>
      <button onClick={uploadTest}>Upload Test</button>
      {imageUrl && (
        <>
          <h2>Uploaded Image:</h2>
          <img src={imageUrl} alt="uploaded image" />
        </>
      )}
    </div>
  );
}
