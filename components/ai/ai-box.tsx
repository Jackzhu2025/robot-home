"use client"

import { useState } from "react"

export function AIBox() {
  const [q, setQ] = useState("Optimus 投资价值如何？")
  const [answer, setAnswer] = useState("")
  const [loading, setLoading] = useState(false)

  const ask = async () => {
    setLoading(true)
    setAnswer("")
    const res = await fetch("/api/ai", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: q })
    })
    const data = await res.json()
    setAnswer(data.answer || "暂无结果")
    setLoading(false)
  }

  return (
    <div className="card">
      <h3>AI 投研分析</h3>
      <textarea value={q} onChange={(e) => setQ(e.target.value)} rows={5} style={{ width: "100%", borderRadius: 12, border: "1px solid #cbd5e1", padding: 12 }} />
      <div style={{ marginTop: 12, display: "flex", gap: 10 }}>
        <button className="btn" onClick={ask}>开始分析</button>
      </div>
      {loading ? <p className="muted">分析中...</p> : null}
      {answer ? <div className="detail-card" style={{ marginTop: 14, whiteSpace: "pre-wrap" }}>{answer}</div> : null}
    </div>
  )
}
