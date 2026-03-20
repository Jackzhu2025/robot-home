export function getMatchScore(robot, input) {
  let score = 0
  const reasons: string[] = []

  if (!input.scenario || robot.scenario.includes(input.scenario)) {
    score += 40
    if (input.scenario) reasons.push(`匹配场景：${input.scenario}`)
  }

  if (!input.environment || robot.environment.includes(input.environment)) {
    score += 20
    if (input.environment) reasons.push(`适配环境：${input.environment}`)
  }

  if (!input.category || robot.category === input.category) {
    score += 10
    if (input.category) reasons.push(`匹配类别：${input.category}`)
  }

  const budgetRank = { low: 1, mid: 2, high: 3 }
  if (!input.budgetLevel || budgetRank[robot.budgetLevel] <= budgetRank[input.budgetLevel]) {
    score += 15
    reasons.push("预算匹配")
  }

  if (!input.payloadKg || robot.payloadKg >= input.payloadKg) {
    score += 15
    reasons.push(`满足载荷需求：${robot.payloadKg}kg`)
  }

  return { score, reasons }
}
