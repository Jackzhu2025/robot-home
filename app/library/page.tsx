import Link from "next/link"
import { getAllRobots } from "@/lib/queries"

export default function LibraryPage() {
  const robots = getAllRobots()

  return (
    <div className="page-wrap">
      <h1>机器人库</h1>
      <div className="grid grid-3 robot-grid">
        {robots.map((robot) => (
          <div className="card" key={robot.id}>
            <img src={robot.image} alt={robot.name} />
            <div className="muted" style={{ fontSize: 12, marginTop: 10 }}>{robot.brand}</div>
            <h3>{robot.name}</h3>
            <p className="muted">{robot.shortDescription}</p>
            <div style={{ display: "flex", gap: 10 }}>
              <Link className="btn" href={`/library/${robot.slug}`}>详情</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
