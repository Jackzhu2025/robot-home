import { getAllRobots } from "@/lib/queries"
import { getDemoUser, isPro } from "@/lib/auth"
import { Paywall } from "@/components/user/paywall"

export default function CostsPage() {
  const user = getDemoUser()

  if (!isPro(user)) {
    return (
      <div className="page-wrap">
        <Paywall />
      </div>
    )
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
          {robots.map((robot) => {
            const cost = robot.cost ?? {}

            return (
              <tr key={robot.id}>
                <td>
                  {robot.name}
                  <div className="muted">{robot.brand}</div>
                </td>
                <td>{robot.priceText ?? "-"}</td>
                <td>{cost.bomUsd != null ? `$${cost.bomUsd.toLocaleString()}` : "-"}</td>
                <td>{cost.actuatorUsd != null ? `$${cost.actuatorUsd.toLocaleString()}` : "-"}</td>
                <td>{cost.batteryUsd != null ? `$${cost.batteryUsd.toLocaleString()}` : "-"}</td>
                <td>{cost.sensorUsd != null ? `$${cost.sensorUsd.toLocaleString()}` : "-"}</td>
                <td>{cost.chipUsd != null ? `$${cost.chipUsd.toLocaleString()}` : "-"}</td>
                <td>{cost.structureUsd != null ? `$${cost.structureUsd.toLocaleString()}` : "-"}</td>
                <td>
                  {cost.grossMarginHint ?? "-"}
                  <div className="muted">{cost.note ?? ""}</div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
