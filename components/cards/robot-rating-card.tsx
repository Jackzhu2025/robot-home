import Link from "next/link"
import { calcTotalScore } from "@/lib/rating"
import { RobotRadarChart } from "@/components/charts/robot-radar-chart"
import { RobotTags } from "@/components/analysis/robot-tags"
import { FavoriteButton } from "@/components/user/favorite-button"

export function RobotRatingCard({ robot }) {
  const total = calcTotalScore(robot.rating)

  return (
    <div className="card">
      <img src={robot.image} alt={robot.name} className="news-cover" />
      <div style={{ marginTop: 12 }}>
        <div className="muted" style={{ fontSize: 12 }}>{robot.brand}</div>
        <h3 style={{ margin: "6px 0" }}>{robot.name}</h3>
        <div className="metric">{total}</div>
        <div className="muted" style={{ fontSize: 12 }}>综合评分</div>
        <RobotTags tags={robot.tags} />
        <div className="detail-grid" style={{ marginTop: 10 }}>
          <div className="kv">技术：{robot.rating.tech}</div>
          <div className="kv">商业化：{robot.rating.commercialization}</div>
          <div className="kv">产业：{robot.rating.industry}</div>
          <div className="kv">成本：{robot.rating.cost}</div>
          <div className="kv">扩展：{robot.rating.scalability}</div>
        </div>
        <RobotRadarChart rating={robot.rating} />
        <div style={{ display: "flex", gap: 10, marginTop: 10 }}>
          <Link className="btn" href={`/library/${robot.slug}`}>查看详情</Link>
          <FavoriteButton targetId={robot.id} />
        </div>
      </div>
    </div>
  )
}
