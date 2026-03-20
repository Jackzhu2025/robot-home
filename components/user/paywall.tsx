import Link from "next/link"

export function Paywall() {
  return (
    <div className="paywall">
      <h2>升级 Pro 解锁完整能力</h2>
      <p className="muted">完整评分解释、成本数据库、AI分析、收藏与跟踪全部开放。</p>
      <ul>
        <li>完整投资评分与分榜单</li>
        <li>成本结构与 BOM 拆解</li>
        <li>AI 深度分析</li>
      </ul>
      <div style={{ marginTop: 14, display: "flex", gap: 10 }}>
        <Link className="btn" href="/pricing">查看定价</Link>
        <Link className="btn secondary" href="/register">免费注册</Link>
      </div>
    </div>
  )
}
