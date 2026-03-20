import Link from "next/link"
import { notFound } from "next/navigation"
import { getRobotBySlug } from "@/lib/queries"
import { calcTotalScore } from "@/lib/rating"
import { RobotRadarChart } from "@/components/charts/robot-radar-chart"
import { RobotRatingExplain } from "@/components/analysis/robot-rating-explain"
import { RobotTags } from "@/components/analysis/robot-tags"
import { RobotCompany } from "@/components/analysis/robot-company"
import { FavoriteButton } from "@/components/user/favorite-button"

export default function RobotDetailPage({ params }) {
  const robot = getRobotBySlug(params.slug)
  if (!robot) return notFound()

  return (
    <div className="page-wrap">
      <div className="grid grid-2">
        <div className="sidebar">
          <div className="detail-card">
            <img className="company-cover" src={robot.image} alt={robot.name} />
            <div className="muted" style={{ marginTop: 10 }}>{robot.brand}</div>
            <h1>{robot.name}</h1>
            <p>{robot.longDescription}</p>
            <RobotTags tags={robot.tags} />
            <div style={{ marginTop: 12, display: "flex", gap: 10 }}>
              <FavoriteButton targetId={robot.id} />
              <Link className="btn ghost" href="/selector">去选型引擎</Link>
              <Link className="btn ghost" href="/costs">看成本库</Link>
            </div>
          </div>

          <div className="detail-card">
            <h2>关键参数</h2>
            <div className="detail-grid">
              <div className="kv">分类：{robot.category}</div>
              <div className="kv">自由度：{robot.dof}</div>
              <div className="kv">最大载荷：{robot.payloadKg}kg</div>
              <div className="kv">速度：{robot.speed}</div>
              <div className="kv">重量：{robot.weightKg}kg</div>
              <div className="kv">价格：{robot.priceText}</div>
            </div>
          </div>

          <RobotCompany company={robot.company} />
        </div>

        <div className="sidebar">
          <div className="detail-card">
            <h2>投资评分</h2>
            <div className="metric">{calcTotalScore(robot.rating)}</div>
            <div className="muted">综合评分</div>
            <div className="detail-grid" style={{ marginTop: 12 }}>
              <div className="kv">技术壁垒：{robot.rating.tech}</div>
              <div className="kv">商业化：{robot.rating.commercialization}</div>
              <div className="kv">产业位置：{robot.rating.industry}</div>
              <div className="kv">成本结构：{robot.rating.cost}</div>
              <div className="kv">扩展性：{robot.rating.scalability}</div>
            </div>
            <RobotRadarChart rating={robot.rating} />
          </div>

          <div className="detail-card">
            <h2>成本快照</h2>
            <div className="detail-grid">
              <div className="kv">BOM：${robot.cost.bomUsd.toLocaleString()}</div>
              <div className="kv">执行器：${robot.cost.actuatorUsd.toLocaleString()}</div>
              <div className="kv">电池：${robot.cost.batteryUsd.toLocaleString()}</div>
              <div className="kv">传感器：${robot.cost.sensorUsd.toLocaleString()}</div>
              <div className="kv">芯片：${robot.cost.chipUsd.toLocaleString()}</div>
              <div className="kv">结构件：${robot.cost.structureUsd.toLocaleString()}</div>
            </div>
            <p><strong>毛利判断：</strong>{robot.cost.grossMarginHint}</p>
            <p className="muted">{robot.cost.note}</p>
          </div>

          <RobotRatingExplain robot={robot} />
        </div>
      </div>
    </div>
  )
}
