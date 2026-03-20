"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { getAllRobots } from "@/lib/queries"
import { getMatchScore } from "@/lib/selector"

export default function SelectorPage() {
  const robots = getAllRobots()
  const [scenario, setScenario] = useState("")
  const [environment, setEnvironment] = useState("")
  const [category, setCategory] = useState("")
  const [budgetLevel, setBudgetLevel] = useState("")
  const [payloadKg, setPayloadKg] = useState("")

  const results = useMemo(() => {
    return robots
      .map((robot) => ({
        robot,
        ...getMatchScore(robot, {
          scenario,
          environment,
          category,
          budgetLevel,
          payloadKg: payloadKg ? Number(payloadKg) : 0
        })
      }))
      .sort((a, b) => b.score - a.score)
  }, [robots, scenario, environment, category, budgetLevel, payloadKg])

  return (
    <div className="page-wrap">
      <h1>机器人选型决策引擎</h1>
      <div className="card">
        <div className="grid grid-4">
          <select value={scenario} onChange={(e) => setScenario(e.target.value)}>
            <option value="">全部场景</option>
            <option value="factory">工厂</option>
            <option value="logistics">物流</option>
            <option value="inspection">巡检</option>
            <option value="research">科研</option>
          </select>
          <select value={environment} onChange={(e) => setEnvironment(e.target.value)}>
            <option value="">全部环境</option>
            <option value="indoor">室内</option>
            <option value="outdoor">户外</option>
          </select>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">全部类别</option>
            <option value="humanoid">人形</option>
            <option value="quadruped">机器狗</option>
          </select>
          <select value={budgetLevel} onChange={(e) => setBudgetLevel(e.target.value)}>
            <option value="">全部预算</option>
            <option value="low">低预算</option>
            <option value="mid">中预算</option>
            <option value="high">高预算</option>
          </select>
        </div>
        <div style={{ marginTop: 12 }}>
          <input placeholder="最低载荷（kg）" value={payloadKg} onChange={(e) => setPayloadKg(e.target.value)} />
        </div>
      </div>

      <div className="grid grid-2" style={{ marginTop: 20 }}>
        {results.map(({ robot, score, reasons }) => (
          <div className="card" key={robot.id}>
            <div style={{ display: "flex", gap: 12 }}>
              <img className="small-cover" src={robot.image} alt={robot.name} />
              <div style={{ flex: 1 }}>
                <h3 style={{ margin: 0 }}>{robot.name}</h3>
                <div className="muted">{robot.brand}</div>
                <div className="metric" style={{ fontSize: 24, marginTop: 8 }}>{score}</div>
                <div className="muted">匹配度</div>
              </div>
            </div>
            <ul>
              {reasons.map((x, i) => <li key={i}>{x}</li>)}
            </ul>
            <Link className="btn ghost" href={`/library/${robot.slug}`}>查看详情</Link>
          </div>
        ))}
      </div>
    </div>
  )
}
