import { getDemoUser, isPro } from "@/lib/auth"
import { AIBox } from "@/components/ai/ai-box"
import { Paywall } from "@/components/user/paywall"

export default function AIPage() {
  const user = getDemoUser()
  return (
    <div className="page-wrap">
      <h1>AI 分析</h1>
      {isPro(user) ? <AIBox /> : <Paywall />}
    </div>
  )
}
