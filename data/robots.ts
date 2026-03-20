export type Robot = {
  slug: string;
  name: string;
  company: string;
  category: string;
  stage: string;
  summary: string;

  cover: string;
  images?: string[];

  specs: {
    height?: string;
    weight?: string;
    payload?: string;
    battery?: string;
    speed?: string;
    dof?: string;
  };

  scenarios: string[];

  score: number;

  rating: {
    overall: number;
    tech: number;
    business: number;
    supply: number;
    cost: number;
    expand: number;
  };

  cost: {
    bomUsd: number;
    actuatorUsd: number;
    batteryUsd: number;
    sensorUsd: number;
    chipUsd: number;
    structureUsd: number;
  };

  highlights: string[];
  risks: string[];
  competitors: string[];

  confidence: "high" | "medium" | "low";
};

export const robots: Robot[] = [
  {
    slug: "tesla-optimus",
    name: "Optimus",
    company: "Tesla",
    category: "Humanoid",
    stage: "Prototype",
    summary:
      "Tesla推出的人形机器人，目标替代重复劳动，依托自动驾驶与AI能力构建通用机器人平台。",
    cover: "/robots/optimus.jpg",
    specs: {
      height: "173 cm",
      weight: "73 kg",
      payload: "20 kg",
      battery: "2.3 kWh",
      speed: "5 km/h",
      dof: "28+",
    },
    scenarios: ["制造业", "仓储", "通用劳动"],
    score: 9.2,
    rating: {
      overall: 9.2,
      tech: 9.5,
      business: 8.8,
      supply: 9.6,
      cost: 8.7,
      expand: 9.4,
    },
    cost: {
      bomUsd: 50000,
      actuatorUsd: 16000,
      batteryUsd: 3500,
      sensorUsd: 9000,
      chipUsd: 7000,
      structureUsd: 14500,
    },
    highlights: ["AI能力强（FSD迁移）", "供应链能力极强", "长期降本潜力大"],
    risks: ["尚未量产", "真实落地未验证"],
    competitors: ["Figure 02", "Digit", "Unitree H1"],
    confidence: "medium",
  },

  {
    slug: "figure-02",
    name: "Figure 02",
    company: "Figure AI",
    category: "Humanoid",
    stage: "Pilot",
    summary:
      "Figure第二代人形机器人，已进入宝马工厂测试，强调AI与工业场景结合。",
    cover: "/robots/figure02.jpg",
    specs: {
      height: "168 cm",
      weight: "60 kg",
      payload: "20 kg",
      speed: "4 km/h",
      dof: "未知",
    },
    scenarios: ["汽车制造", "物流"],
    score: 8.8,
    rating: {
      overall: 8.8,
      tech: 9.1,
      business: 8.5,
      supply: 7.9,
      cost: 7.8,
      expand: 9.0,
    },
    cost: {
      bomUsd: 60000,
      actuatorUsd: 19000,
      batteryUsd: 3200,
      sensorUsd: 12000,
      chipUsd: 9000,
      structureUsd: 16800,
    },
    highlights: ["宝马合作验证", "AI能力领先", "商业路径清晰"],
    risks: ["成本较高", "规模化未验证"],
    competitors: ["Optimus", "Digit"],
    confidence: "medium",
  },

  {
    slug: "unitree-g1",
    name: "G1",
    company: "Unitree",
    category: "Humanoid",
    stage: "Commercial",
    summary: "Unitree推出的低成本人形机器人，主打性价比和规模化。",
    cover: "/robots/g1.jpg",
    specs: {
      height: "127 cm",
      weight: "35 kg",
      payload: "3 kg",
      battery: "约0.9 kWh",
      speed: "2 m/s",
      dof: "23-43（不同版本）",
    },
    scenarios: ["教育", "开发者", "轻工业"],
    score: 8.5,
    rating: {
      overall: 8.5,
      tech: 8.1,
      business: 8.4,
      supply: 9.1,
      cost: 9.2,
      expand: 8.0,
    },
    cost: {
      bomUsd: 16000,
      actuatorUsd: 6500,
      batteryUsd: 1200,
      sensorUsd: 2500,
      chipUsd: 1800,
      structureUsd: 4000,
    },
    highlights: ["价格优势明显", "量产能力强", "供应链成熟"],
    risks: ["高端能力不足", "应用场景受限"],
    competitors: ["Optimus", "Figure 02"],
    confidence: "medium",
  },

  {
    slug: "digit",
    name: "Digit",
    company: "Agility Robotics",
    category: "Humanoid",
    stage: "Commercial",
    summary:
      "Digit是最接近商业化落地的人形机器人之一，已进入物流场景。",
    cover: "/robots/digit.jpg",
    specs: {
      height: "175 cm",
      weight: "65 kg",
      payload: "16 kg",
      battery: "可更换电池",
      speed: "未知",
      dof: "未知",
    },
    scenarios: ["仓储物流"],
    score: 8.9,
    rating: {
      overall: 8.9,
      tech: 8.7,
      business: 9.2,
      supply: 8.3,
      cost: 7.6,
      expand: 8.5,
    },
    cost: {
      bomUsd: 75000,
      actuatorUsd: 24000,
      batteryUsd: 4000,
      sensorUsd: 14000,
      chipUsd: 7000,
      structureUsd: 21000,
    },
    highlights: ["商业落地领先", "场景清晰", "稳定性强"],
    risks: ["泛化能力弱", "扩展性有限"],
    competitors: ["Figure 02", "Optimus"],
    confidence: "high",
  },

  {
    slug: "spot",
    name: "Spot",
    company: "Boston Dynamics",
    category: "Quadruped",
    stage: "Commercial",
    summary:
      "Spot是全球最成熟的四足机器人之一，广泛应用于巡检与工业。",
    cover: "/robots/spot.jpg",
    specs: {
      height: "84 cm",
      weight: "32 kg",
      payload: "14 kg",
      battery: "可更换电池",
      speed: "1.6 m/s",
      dof: "12+",
    },
    scenarios: ["巡检", "安防", "工业"],
    score: 9.0,
    rating: {
      overall: 9.0,
      tech: 9.1,
      business: 9.0,
      supply: 8.6,
      cost: 7.2,
      expand: 8.8,
    },
    cost: {
      bomUsd: 85000,
      actuatorUsd: 30000,
      batteryUsd: 3500,
      sensorUsd: 15000,
      chipUsd: 6500,
      structureUsd: 30000,
    },
    highlights: ["成熟度极高", "商业化成功", "可靠性强"],
    risks: ["成本较高", "AI能力有限"],
    competitors: ["ANYmal", "Unitree B2"],
    confidence: "high",
  },

  {
    slug: "anymal",
    name: "ANYmal",
    company: "ANYbotics",
    category: "Quadruped",
    stage: "Commercial",
    summary: "ANYmal专注工业巡检，是欧洲工业机器人代表。",
    cover: "/robots/anymal.jpg",
    specs: {
      height: "未知",
      weight: "50 kg",
      payload: "10 kg+",
      battery: "工业级可换电",
      speed: "未知",
      dof: "12+",
    },
    scenarios: ["能源巡检", "工业"],
    score: 8.7,
    rating: {
      overall: 8.7,
      tech: 8.8,
      business: 8.5,
      supply: 7.9,
      cost: 7.1,
      expand: 8.4,
    },
    cost: {
      bomUsd: 90000,
      actuatorUsd: 32000,
      batteryUsd: 4000,
      sensorUsd: 18000,
      chipUsd: 7000,
      structureUsd: 29000,
    },
    highlights: ["工业客户多", "稳定性高"],
    risks: ["价格高", "规模受限"],
    competitors: ["Spot"],
    confidence: "high",
  },
];
