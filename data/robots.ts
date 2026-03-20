export type Rating = {
  tech: number
  commercialization: number
  industry: number
  cost: number
  scalability: number
}

export type Robot = {
  id: string
  slug: string
  name: string
  brand: string
  category: "humanoid" | "quadruped"
  image: string
  shortDescription: string
  longDescription: string
  scenario: string[]
  environment: string[]
  budgetLevel: "low" | "mid" | "high"
  payloadKg: number
  speed: string
  dof: number
  weightKg: number
  heightCm?: number
  priceText: string
  priceBand: "entry" | "commercial" | "enterprise"
  rating: Rating
  tags: string[]
  company: {
    slug: string
    name: string
    listed: boolean
    ticker?: string
    exchange?: string
    note?: string
  }
  explain: {
    tech: string[]
    commercialization: string[]
    industry: string[]
    cost: string[]
    scalability: string[]
  }
  cost: {
    bomUsd: number
    actuatorUsd: number
    batteryUsd: number
    sensorUsd: number
    chipUsd: number
    structureUsd: number
    grossMarginHint: string
    note: string
  }
}

const img = (label: string) => `https://placehold.co/1200x800/png?text=${encodeURIComponent(label)}`

export const robots: Robot[] = [
  {
    id: "optimus",
    slug: "optimus",
    name: "Optimus Gen-2",
    brand: "Tesla",
    category: "humanoid",
    image: img("Optimus"),
    shortDescription: "AI驱动通用人形机器人，瞄准工厂与长期家庭场景。",
    longDescription: "Optimus 代表了人形机器人与自动驾驶 AI 能力融合的方向。当前商业化仍处前期，但技术势能与资本关注度极高。",
    scenario: ["factory", "sorting", "assembly"],
    environment: ["indoor"],
    budgetLevel: "high",
    payloadKg: 20,
    speed: "0.8m/s",
    dof: 28,
    weightKg: 57,
    heightCm: 173,
    priceText: "$20,000-$30,000 (target)",
    priceBand: "enterprise",
    rating: { tech: 95, commercialization: 85, industry: 98, cost: 80, scalability: 90 },
    tags: ["Tesla链", "AI驱动", "高天花板", "量产前期"],
    company: { slug: "tesla", name: "Tesla", listed: true, ticker: "TSLA", exchange: "NASDAQ", note: "人形机器人战略与自动驾驶、算力、制造体系深度绑定。" },
    explain: {
      tech: ["FSD 同源感知与控制能力可迁移。", "执行器与整机控制迭代速度快。", "具备大模型与端侧实时控制协同潜力。"],
      commercialization: ["尚未形成大规模外部收入。", "工厂内部验证具备现实场景意义。"],
      industry: ["头部品牌心智强。", "在资本市场上具备最高关注度之一。"],
      cost: ["长期目标价低，说明战略上明确追求规模降本。", "规模化与供应链协同是核心变量。"],
      scalability: ["工厂、仓储、家务等多个方向具备扩张可能。", "平台化 AI 能力可复用。"]
    },
    cost: {
      bomUsd: 18000,
      actuatorUsd: 7600,
      batteryUsd: 2400,
      sensorUsd: 1800,
      chipUsd: 2800,
      structureUsd: 3400,
      grossMarginHint: "早期毛利承压，长期依赖规模化改善",
      note: "执行器仍是最大成本项，Tesla 若打通自研与规模采购，降本弹性最大。"
    }
  },
  {
    id: "figure-02",
    slug: "figure-02",
    name: "Figure 02",
    brand: "Figure AI",
    category: "humanoid",
    image: img("Figure 02"),
    shortDescription: "面向工业与物流部署的人形机器人，商业合作推进较快。",
    longDescription: "Figure 在商业合作、融资与对外叙事方面进展较快，是当前美国人形创业公司中的明星标的之一。",
    scenario: ["factory", "logistics", "sorting"],
    environment: ["indoor"],
    budgetLevel: "high",
    payloadKg: 25,
    speed: "1.2m/s",
    dof: 16,
    weightKg: 70,
    heightCm: 168,
    priceText: "$130,000 (est.)",
    priceBand: "enterprise",
    rating: { tech: 90, commercialization: 88, industry: 92, cost: 68, scalability: 82 },
    tags: ["商业化较快", "工业场景", "高估值"],
    company: { slug: "figure-ai", name: "Figure AI", listed: false, note: "未上市，属于人形机器人头部创业公司。" },
    explain: {
      tech: ["运动与抓取能力较强。", "在模型与场景适配上进展较快。"],
      commercialization: ["与工业客户合作积极。", "对外商业化节奏快于多数同行。"],
      industry: ["资本关注度高。", "属于美国头部人形创业公司。"],
      cost: ["当前成本仍高。", "短期依赖高价商用而非大众化。"],
      scalability: ["工业与物流具备复制路径。", "家庭场景仍需时间。"]
    },
    cost: {
      bomUsd: 54000,
      actuatorUsd: 21000,
      batteryUsd: 4500,
      sensorUsd: 5600,
      chipUsd: 8300,
      structureUsd: 14600,
      grossMarginHint: "高ASP支撑早期商业化",
      note: "更适合通过工业部署先建立收入，而不是直接走消费级规模。"
    }
  },
  {
    id: "digit",
    slug: "digit",
    name: "Digit",
    brand: "Agility Robotics",
    category: "humanoid",
    image: img("Digit"),
    shortDescription: "物流场景商业化最明确的人形机器人之一。",
    longDescription: "Digit 是最接近现实物流商业场景的人形之一，其真正价值在于对工作流的适配而非炫技。",
    scenario: ["logistics", "warehouse"],
    environment: ["indoor"],
    budgetLevel: "high",
    payloadKg: 16,
    speed: "1.5m/s",
    dof: 28,
    weightKg: 65,
    heightCm: 175,
    priceText: "RaaS / enterprise",
    priceBand: "enterprise",
    rating: { tech: 84, commercialization: 92, industry: 86, cost: 65, scalability: 80 },
    tags: ["物流先行", "商业验证强"],
    company: { slug: "agility-robotics", name: "Agility Robotics", listed: false, note: "未上市，物流商业化路径清晰。" },
    explain: {
      tech: ["技术不一定最炫，但足够稳定。"],
      commercialization: ["物流场景验证深入。", "商业收入确定性强于多数玩家。"],
      industry: ["在物流垂直赛道具有标杆性。"],
      cost: ["更适合高价值工业与物流部署。"],
      scalability: ["垂直赛道复制性较好。"]
    },
    cost: {
      bomUsd: 47000,
      actuatorUsd: 18500,
      batteryUsd: 3800,
      sensorUsd: 4200,
      chipUsd: 6500,
      structureUsd: 14000,
      grossMarginHint: "RaaS 模式更利于平滑初始高成本",
      note: "不是最低成本路线，而是最先形成明确商业回报的路线。"
    }
  },
  {
    id: "g1",
    slug: "g1",
    name: "G1",
    brand: "Unitree",
    category: "humanoid",
    image: img("G1"),
    shortDescription: "极具价格冲击力的人形机器人，适合研究与开发者生态。",
    longDescription: "G1 的最大意义是把人形机器人价格打下来，为开发者和高校市场打开了新的入口。",
    scenario: ["research", "education", "demo"],
    environment: ["indoor"],
    budgetLevel: "low",
    payloadKg: 3,
    speed: "2.0m/s",
    dof: 43,
    weightKg: 35,
    heightCm: 127,
    priceText: "$13,500+",
    priceBand: "entry",
    rating: { tech: 82, commercialization: 80, industry: 90, cost: 95, scalability: 84 },
    tags: ["低价冲击", "开发者友好", "中国供应链"],
    company: { slug: "unitree", name: "Unitree", listed: false, note: "未上市，消费与开发者价格带最具冲击力。" },
    explain: {
      tech: ["运动控制成熟。", "整机完成度高于同价位产品。"],
      commercialization: ["开发者与高校市场较清晰。"],
      industry: ["在价格带上形成强品牌效应。"],
      cost: ["中国供应链优势显著。", "具备极强成本竞争力。"],
      scalability: ["更容易向教育、开发者、轻工业场景扩散。"]
    },
    cost: {
      bomUsd: 9000,
      actuatorUsd: 3600,
      batteryUsd: 900,
      sensorUsd: 700,
      chipUsd: 1200,
      structureUsd: 2600,
      grossMarginHint: "以规模换毛利",
      note: "G1 核心不是单台利润，而是通过低价切入扩大生态与数据。"
    }
  },
  {
    id: "spot",
    slug: "spot",
    name: "Spot",
    brand: "Boston Dynamics",
    category: "quadruped",
    image: img("Spot"),
    shortDescription: "最成熟的商用四足机器人之一，工业巡检标杆。",
    longDescription: "Spot 已经形成稳定品牌认知与工业巡检应用，是机器狗赛道最典型的商用标杆。",
    scenario: ["inspection", "security"],
    environment: ["indoor", "outdoor"],
    budgetLevel: "high",
    payloadKg: 14,
    speed: "1.6m/s",
    dof: 12,
    weightKg: 32,
    priceText: "$74,500+",
    priceBand: "commercial",
    rating: { tech: 88, commercialization: 90, industry: 94, cost: 62, scalability: 78 },
    tags: ["工业巡检", "成熟商用", "品牌标杆"],
    company: { slug: "boston-dynamics", name: "Boston Dynamics", listed: false, note: "未上市，工业机器人与四足品牌资产极强。" },
    explain: {
      tech: ["整机稳定性与可靠性高。", "软硬件系统成熟。"],
      commercialization: ["已形成较多商用部署案例。"],
      industry: ["品牌认知几乎等于赛道代名词。"],
      cost: ["ASP 高，适合高价值工业场景。"],
      scalability: ["以工业巡检为中心扩展。"]
    },
    cost: {
      bomUsd: 31000,
      actuatorUsd: 11500,
      batteryUsd: 1800,
      sensorUsd: 3200,
      chipUsd: 4200,
      structureUsd: 10300,
      grossMarginHint: "高价支撑，但规模天花板受场景限制",
      note: "Spot 的护城河在可靠性和品牌，而不是极致性价比。"
    }
  },
  {
    id: "go2-pro",
    slug: "go2-pro",
    name: "Go2 Pro",
    brand: "Unitree",
    category: "quadruped",
    image: img("Go2 Pro"),
    shortDescription: "机器狗价格带最有代表性的产品之一。",
    longDescription: "Go2 Pro 兼顾价格、性能与生态，是机器狗从展示产品走向更广泛用户群体的重要节点。",
    scenario: ["inspection", "research", "education", "demo"],
    environment: ["indoor", "outdoor"],
    budgetLevel: "low",
    payloadKg: 7,
    speed: "3.5m/s",
    dof: 12,
    weightKg: 15,
    priceText: "¥11,800+",
    priceBand: "entry",
    rating: { tech: 80, commercialization: 86, industry: 90, cost: 96, scalability: 88 },
    tags: ["高性价比", "机器狗标杆", "开发者生态"],
    company: { slug: "unitree", name: "Unitree", listed: false, note: "在四足赛道具有极强价格带优势。" },
    explain: {
      tech: ["性能足以覆盖多数轻量场景。"],
      commercialization: ["教育、开发者、轻行业均可切入。"],
      industry: ["品牌扩散度高。"],
      cost: ["同价位几乎最强。"],
      scalability: ["更易于规模扩张。"]
    },
    cost: {
      bomUsd: 4500,
      actuatorUsd: 1600,
      batteryUsd: 500,
      sensorUsd: 300,
      chipUsd: 700,
      structureUsd: 1400,
      grossMarginHint: "以规模与生态带动长期价值",
      note: "Go2 Pro 的核心在于价格带占位和开发者生态扩张。"
    }
  }
]
