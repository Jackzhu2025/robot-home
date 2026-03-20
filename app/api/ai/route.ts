export async function POST(req: Request) {
  const { prompt } = await req.json()

  if (!process.env.OPENAI_API_KEY) {
    return Response.json({
      answer:
        "这是演示结果。当前未配置 OPENAI_API_KEY，所以返回本地示例输出。\n\n结论：\n1. 该机器人具备一定技术壁垒。\n2. 商业化仍需看客户验证与成本下降。\n3. 若要做投资判断，应同时看公司估值与兑现节奏。"
    })
  }

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "You are an investment research assistant specialized in robotics. Reply in Chinese, structured, concise, and practical."
        },
        { role: "user", content: prompt }
      ]
    })
  })

  const data = await response.json()
  const answer = data?.choices?.[0]?.message?.content || "无结果"
  return Response.json({ answer })
}
