import "./globals.css"
import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"

export const metadata = {
  title: "RobotHome - 机器人产业投研平台",
  description: "机器人评分系统、成本数据库、选型引擎与 AI 分析平台。",
  keywords: ["robot investment", "humanoid robot", "robot cost breakdown", "robot analysis"]
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  )
}
