export function RobotRatingExplain({ robot }) {
  const item = (title: string, list: string[]) => (
    <div style={{ marginBottom: 18 }}>
      <div style={{ fontWeight: 700, marginBottom: 8 }}>{title}</div>
      <ul>
        {list.map((x, i) => <li key={i}>{x}</li>)}
      </ul>
    </div>
  )

  return (
    <div className="detail-card">
      <h2>评分解释（Why）</h2>
      {item("技术壁垒", robot.explain.tech)}
      {item("商业化能力", robot.explain.commercialization)}
      {item("产业位置", robot.explain.industry)}
      {item("成本结构", robot.explain.cost)}
      {item("扩展性", robot.explain.scalability)}
    </div>
  )
}
