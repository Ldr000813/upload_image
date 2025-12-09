"use client";
import { useState } from "react";

export default function UploadTest() {
  const [imgSrc, setImgSrc] = useState<string | null>(null);

  const handleUpload = async (e: any) => {
    const file = e.target.files[0];
    const res = await fetch("/api/upload", {
      method: "POST",
      body: file
    });
    const data = await res.json();
    setImgSrc(data.image);
  };

  return (
    <div className="p-4">
      <h1>Upload Test</h1>

      <input type="file" onChange={handleUpload} />

      {imgSrc && (
        <img
          src={imgSrc}
          alt="uploaded"
          style={{ width: "300px", marginTop: "20px" }}
        />
      )}
    </div>
  );
}
