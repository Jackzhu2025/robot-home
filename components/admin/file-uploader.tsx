"use client"

import { useState } from "react"

export function FileUploader({ onUploaded }) {
  const [uploading, setUploading] = useState(false)

  const handleFile = async (file: File) => {
    setUploading(true)
    const url = URL.createObjectURL(file)
    onUploaded(url)
    setUploading(false)
  }

  return (
    <div className="card">
      <div style={{ marginBottom: 8, fontWeight: 700 }}>文件上传</div>
      <input type="file" accept="image/*" onChange={(e) => {
        const f = e.target.files?.[0]
        if (f) handleFile(f)
      }} />
      {uploading ? <p className="muted">上传中...</p> : <p className="muted">演示版默认返回本地预览 URL；接入 Supabase Storage 后可替换为正式上传。</p>}
    </div>
  )
}
