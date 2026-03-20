import { getAllRobots } from "@/lib/queries"
import { getDemoUser, isPro } from "@/lib/auth"
import { Paywall } from "@/components/user/paywall"

export default function CostsPage() {
  const user = getDemoUser()
  if (!isPro(user)) {
    return <div className="page-wrap"><Paywall /></div>
  }

  const robots = getAllRobots()

  return (
    <div className="page-wrap">
      <h1>机器人价格 / 成本数据库</h1>
      <table className="table card">
        <thead>
          <tr>
            <th>机型</th>
            <th>价格</th>
            <th>BOM</th>
            <th>执行器</th>
            <th>电池</th>
            <th>传感器</th>
            <th>芯片</th>
            <th>结构件</th>
            <th>毛利判断</th>
          </tr>
        </thead>
        <tbody>
          {robots.map((robot) => (
            <tr key={robot.id}>
              <td>{robot.name}<div className="muted">{robot.brand}</div></td>
              <td>{robot.priceText}</td>
              <td>${robot.cost.bomUsd.toLocaleString()}</td>
              <td>${robot.cost.actuatorUsd.toLocaleString()}</td>
              <td>${robot.cost.batteryUsd.toLocaleString()}</td>
              <td>${robot.cost.sensorUsd.toLocaleString()}</td>
              <td>${robot.cost.chipUsd.toLocaleString()}</td>
              <td>${robot.cost.structureUsd.toLocaleString()}</td>
              <td>{robot.cost.grossMarginHint}<div className="muted">{robot.cost.note}</div></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
