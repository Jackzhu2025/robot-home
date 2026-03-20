import Link from "next/link"

export function RobotCompany({ company }) {
  return (
    <div className="detail-card">
      <h2>公司映射</h2>
      <p><strong>{company.name}</strong></p>
      <p className="muted">{company.listed ? "已上市" : "未上市"} {company.ticker ? `· ${company.exchange} ${company.ticker}` : ""}</p>
      {company.note ? <p>{company.note}</p> : null}
      <Link className="btn ghost" href={`/company/${company.slug}`}>查看公司页</Link>
    </div>
  )
}
