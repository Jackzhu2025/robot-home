"use client"

import { useState } from "react"
import { RichEditor } from "@/components/admin/rich-editor"
import { FileUploader } from "@/components/admin/file-uploader"
import { StatusBadge } from "@/components/admin/status-badge"

const demoItems = [
  { id: "1", title: "GTC 2026", type: "news", status: "published" },
  { id: "2", title: "Optimus 成本拆解", type: "research", status: "draft" }
]

export default function AdminPage() {
  const [title, setTitle] = useState("新内容草稿")
  const [summary, setSummary] = useState("这里填写摘要。")
  const [content, setContent] = useState("<h2>开始写内容</h2><p>这里是富文本正文。</p>")
  const [cover, setCover] = useState("")

  return (
    <div className="page-wrap">
      <h1>管理后台</h1>
      <div className="grid grid-2">
        <div className="card">
          <h2>内容工作台</h2>
          <table className="table">
            <thead><tr><th>标题</th><th>类型</th><th>状态</th></tr></thead>
            <tbody>
              {demoItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>{item.type}</td>
                  <td><StatusBadge status={item.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="card">
          <h2>编辑器</h2>
          <input value={title} onChange={(e) => setTitle(e.target.value)} style={{ width: "100%", marginBottom: 10 }} />
          <textarea value={summary} onChange={(e) => setSummary(e.target.value)} rows={3} style={{ width: "100%", marginBottom: 10 }} />
          <RichEditor value={content} onChange={setContent} />
          <div style={{ marginTop: 12 }}>
            <FileUploader onUploaded={setCover} />
            {cover ? <img src={cover} alt="cover" className="news-cover" style={{ marginTop: 12 }} /> : null}
          </div>
          <div style={{ display: "flex", gap: 10, marginTop: 12 }}>
            <button className="btn secondary">保存草稿</button>
            <button className="btn ghost">提交审核</button>
            <button className="btn">发布</button>
            <button className="btn danger">归档</button>
          </div>
        </div>
      </div>
    </div>
  )
}
