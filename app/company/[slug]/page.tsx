import { notFound } from "next/navigation"
import { getCompanyBySlug, getAllRobots } from "@/lib/queries"

export default function CompanyPage({ params }) {
  const company = getCompanyBySlug(params.slug)
  if (!company) return notFound()
  const robots = getAllRobots().filter((r) => r.company.slug === company.slug)

  return (
    <div className="page-wrap">
      <div className="card">
        <h1>{company.name}</h1>
        <p className="muted">{company.listed ? `已上市 · ${company.exchange || ""} ${company.ticker || ""}` : "未上市"}</p>
        <p>{company.summary}</p>
        <h2>投资主线</h2>
        <p>{company.thesis}</p>
        <h2>主要风险</h2>
        <ul>{company.risks.map((r) => <li key={r}>{r}</li>)}</ul>
      </div>

      <div className="section">
        <h2>相关机器人</h2>
        <div className="grid grid-3">
          {robots.map((robot) => (
            <div className="card" key={robot.id}>
              <img className="news-cover" src={robot.image} alt={robot.name} />
              <h3>{robot.name}</h3>
              <p className="muted">{robot.shortDescription}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
