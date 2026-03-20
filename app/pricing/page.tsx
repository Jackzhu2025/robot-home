"use client"

import { useUser } from "@/lib/useUser"

export default function PricingPage() {
  const { user } = useUser()

  const handleSubscribe = async () => {
    const res = await fetch("/api/stripe/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId: user?.id, email: user?.email })
    })
    const data = await res.json()
    if (data.url) window.location.href = data.url
  }

  return (
    <div className="page-wrap">
      <h1 style={{ textAlign: "center" }}>选择你的方案</h1>
      <p style={{ textAlign: "center" }} className="muted">Free / Pro / Enterprise 三档结构，Pro 为主转化层。</p>
      <div className="grid grid-3" style={{ marginTop: 30 }}>
        <div className="card">
          <h3>Free</h3>
          <div className="metric">$0</div>
          <ul>
            <li>机器人库浏览</li>
            <li>基础评分</li>
            <li>资讯内容</li>
          </ul>
          <button className="btn secondary" disabled>当前方案</button>
        </div>

        <div className="card pricing-highlight">
          <h3>Pro ⭐</h3>
          <div className="metric">$9.9/月</div>
          <ul>
            <li>完整评分系统</li>
            <li>成本数据库</li>
            <li>AI分析</li>
            <li>收藏与跟踪</li>
            <li>完整评分解释</li>
          </ul>
          <button className="btn" onClick={handleSubscribe}>立即升级</button>
        </div>

        <div className="card">
          <h3>Enterprise</h3>
          <div className="metric">定制</div>
          <ul>
            <li>API 访问</li>
            <li>数据导出</li>
            <li>定制报告</li>
            <li>多账号协作</li>
          </ul>
          <button className="btn secondary">联系我们</button>
        </div>
      </div>
      <div className="notice" style={{ marginTop: 20 }}>
        一次深度行业报告的价值通常远高于月费。Pro 的本质不是内容浏览，而是决策效率。
      </div>
    </div>
  )
}
