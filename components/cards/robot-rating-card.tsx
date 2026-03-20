import Link from "next/link"
import { calcTotalScore } from "@/lib/rating"

export function RobotRatingCard({ robot }) {
  const rating = robot?.rating ?? {}

  const tech = rating.tech ?? 0
  const commercialization = rating.commercialization ?? 0
  const cost = rating.cost ?? 0
  const total = calcTotalScore(rating)

  return (
    <div className="card" style={{ padding: 16 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
        <div>
          <h3 style={{ margin: 0 }}>
            {robot?.slug ? (
              <Link href={`/robots/${robot.slug}`}>{robot?.name ?? "未知机型"}</Link>
            ) : (
              robot?.name ?? "未知机型"
            )}
          </h3>
          <div className="muted" style={{ marginTop: 4 }}>
            {robot?.brand ?? "-"}
          </div>
        </div>

        <div
          style={{
            minWidth: 64,
            textAlign: "center",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 12,
            padding: "8px 10px",
          }}
        >
          <div className="muted" style={{ fontSize: 12 }}>总分</div>
          <div style={{ fontSize: 22, fontWeight: 700 }}>{total}</div>
        </div>
      </div>

      <p className="muted" style={{ marginTop: 12 }}>
        {robot?.summary ?? "暂无摘要"}
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginTop: 16 }}>
        <div className="card" style={{ padding: 12 }}>
          <div className="muted" style={{ fontSize: 12 }}>技术壁垒</div>
          <div style={{ fontSize: 20, fontWeight: 700, marginTop: 6 }}>{tech}</div>
        </div>

        <div className="card" style={{ padding: 12 }}>
          <div className="muted" style={{ fontSize: 12 }}>商业化</div>
          <div style={{ fontSize: 20, fontWeight: 700, marginTop: 6 }}>{commercialization}</div>
        </div>

        <div className="card" style={{ padding: 12 }}>
          <div className="muted" style={{ fontSize: 12 }}>成本优势</div>
          <div style={{ fontSize: 20, fontWeight: 700, marginTop: 6 }}>{cost}</div>
        </div>
      </div>
    </div>
  )
}
