import Link from "next/link"

export function SiteHeader() {
  return (
    <div className="nav">
      <div className="container nav-inner">
        <Link className="logo" href="/">RobotHome</Link>
        <div className="nav-links">
          <Link href="/library">机器人库</Link>
          <Link href="/rankings">评分系统</Link>
          <Link href="/selector">选型引擎</Link>
          <Link href="/costs">成本数据库</Link>
          <Link href="/news">资讯</Link>
          <Link href="/pricing">定价</Link>
          <Link href="/ai">AI分析</Link>
          <Link href="/account">账户</Link>
          <Link href="/admin">后台</Link>
        </div>
      </div>
    </div>
  )
}
