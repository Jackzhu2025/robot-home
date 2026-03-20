"use client"

import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from "recharts"

export function RobotRadarChart({ rating }) {
  const data = [
    { subject: "技术", value: rating.tech },
    { subject: "商业化", value: rating.commercialization },
    { subject: "产业", value: rating.industry },
    { subject: "成本", value: rating.cost },
    { subject: "扩展", value: rating.scalability }
  ]

  return (
    <div style={{ width: "100%", height: 280 }}>
      <ResponsiveContainer>
        <RadarChart data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <Radar dataKey="value" stroke="#2563eb" fill="#2563eb" fillOpacity={0.35} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}
