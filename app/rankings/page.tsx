import { getAllRobots } from "@/lib/queries"
import { calcTotalScore, sortByRatingKey } from "@/lib/rating"
import { RobotRatingCard } from "@/components/cards/robot-rating-card"

export default function RankingsPage() {
  const robots = getAllRobots()
  const totalRank = [...robots].sort((a, b) => calcTotalScore(b.rating) - calcTotalScore(a.rating))
  const techRank = sortByRatingKey(robots, "tech")
  const commercialRank = sortByRatingKey(robots, "commercialization")
  const costRank = sortByRatingKey(robots, "cost")

  return (
    <div className="page-wrap">
      <h1>机器人投资评分系统</h1>
      <p className="muted">综合榜 + 分榜单，帮助你快速定位技术优势、商业化进展与成本优势。</p>

      <h2>综合评分榜</h2>
      <div className="grid grid-3">{totalRank.map((r) => <RobotRatingCard key={r.id} robot={r} />)}</div>

      <h2 style={{ marginTop: 40 }}>技术壁垒榜</h2>
      <div className="grid grid-3">{techRank.slice(0, 3).map((r) => <RobotRatingCard key={r.id} robot={r} />)}</div>

      <h2 style={{ marginTop: 40 }}>商业化能力榜</h2>
      <div className="grid grid-3">{commercialRank.slice(0, 3).map((r) => <RobotRatingCard key={r.id} robot={r} />)}</div>

      <h2 style={{ marginTop: 40 }}>成本优势榜</h2>
      <div className="grid grid-3">{costRank.slice(0, 3).map((r) => <RobotRatingCard key={r.id} robot={r} />)}</div>
    </div>
  )
}
