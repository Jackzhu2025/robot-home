import Link from "next/link"
import { getFeaturedRobots, getAllNews } from "@/lib/queries"
import { calcTotalScore } from "@/lib/rating"

export default function HomePage() {
  const featured = getFeaturedRobots()
  const news = getAllNews()

  return (
    <div className="page-wrap">
      <section className="hero">
        <div className="kicker">RobotHome v10</div>
        <h1>机器人行业的投资决策平台</h1>
        <p>评分模型 + 成本数据库 + 选型引擎 + AI 分析，帮助你从信息浏览走向可执行判断。</p>
        <div className="hero-actions">
          <Link href="/register" className="btn">免费开始</Link>
          <Link href="/rankings" className="btn secondary">查看评分榜</Link>
        </div>
      </section>

      <section className="section">
        <div className="grid grid-3">
          <div className="card"><h3>投资评分系统</h3><p className="muted">技术、商业化、产业位置、成本、扩展性五维模型。</p></div>
          <div className="card"><h3>选型决策引擎</h3><p className="muted">输入场景与预算，直接输出最匹配机器人。</p></div>
          <div className="card"><h3>价格 / 成本数据库</h3><p className="muted">拆解 BOM 与毛利逻辑，判断降本空间。</p></div>
        </div>
      </section>

      <section className="section">
        <h2>评分精选</h2>
        <div className="grid grid-4 robot-grid">
          {featured.map((robot) => (
            <div className="card" key={robot.id}>
              <img src={robot.image} alt={robot.name} />
              <h3>{robot.name}</h3>
              <p className="muted">{robot.shortDescription}</p>
              <div className="metric">{calcTotalScore(robot.rating)}</div>
              <Link className="btn ghost" href={`/library/${robot.slug}`}>查看详情</Link>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>最新内容</h2>
        <div className="grid grid-2">
          {news.map((item) => (
            <div className="card" key={item.id}>
              <img className="news-cover" src={item.cover} alt={item.title} />
              <h3>{item.title}</h3>
              <p className="muted">{item.summary}</p>
              <Link className="btn ghost" href={`/news/${item.slug}`}>阅读全文</Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
