export type Robot = {
  slug: string;
  name: string;
  company: string;
  category: string;
  stage: string;
  summary: string;

  cover: string;
  images?: string[];
  officialUrl?: string;

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

  positioning?: string;
  commercialProgress?: string[];
  investmentView?: string[];

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
      "Tesla 推出的人形机器人，核心目标是替代通用重复劳动，并复用 Tesla 在视觉、控制与端侧算力上的长期积累。",
    cover: "/robots/optimus.jpg",
    images: ["/robots/optimus.jpg"],
    officialUrl: "https://www.tesla.com/AI",
    specs: {
      height: "173 cm",
      weight: "73 kg",
      payload: "20 kg",
      battery: "2.3 kWh",
      speed: "5 km/h",
      dof: "28+",
    },
    scenarios: ["制造业", "仓储", "厂内物流", "通用劳动"],
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
    highlights: [
      "可复用 Tesla 视觉与控制能力",
      "制造供应链与降本能力极强",
      "长期平台化空间大",
    ],
    risks: ["尚未量产", "真实部署效果仍待验证", "安全与可靠性门槛高"],
    competitors: ["Figure 02", "Digit", "Unitree H1", "Apptronik Apollo"],
    positioning: "平台期权型资产，短期看验证，长期看通用机器人平台价值。",
    commercialProgress: [
      "仍以样机迭代与场景验证为主",
      "核心看点在于量产节奏与单机成本曲线",
    ],
    investmentView: [
      "若量产验证成功，将显著提升 Tesla 在具身智能领域估值想象空间",
      "短期更偏战略叙事，中期才看订单与部署",
    ],
    confidence: "medium",
  },

  {
    slug: "figure-02",
    name: "Figure 02",
    company: "Figure AI",
    category: "Humanoid",
    stage: "Pilot",
    summary:
      "Figure 第二代人形机器人，强调更强的手部操作、结构集成与工业场景落地能力。",
    cover: "/robots/figure02.jpg",
    images: ["/robots/figure02.jpg"],
    officialUrl: "https://www.figure.ai/company",
    specs: {
      height: "168 cm",
      weight: "60 kg",
      payload: "20 kg",
      battery: "未公开",
      speed: "4 km/h",
      dof: "未公开",
    },
    scenarios: ["汽车制造", "物流", "工厂物料搬运"],
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
    highlights: ["工业验证节奏快", "AI 叙事强", "手部与机身集成优化明显"],
    risks: ["规模化制造仍在爬坡", "成本较高", "客户集中度高"],
    competitors: ["Optimus", "Digit", "Apollo"],
    positioning: "高技术弹性的人形机器人新势力代表。",
    commercialProgress: [
      "已在汽车制造场景进行验证",
      "更关键的里程碑是从试点走向连续稳定部署",
    ],
    investmentView: [
      "若工业场景验证持续推进，估值弹性较大",
      "中期要看从 demo 到 ROI 的跨越",
    ],
    confidence: "medium",
  },

  {
    slug: "unitree-g1",
    name: "G1",
    company: "Unitree",
    category: "Humanoid",
    stage: "Commercial",
    summary:
      "Unitree 推出的低成本人形机器人，主打高性价比、开发者生态与快速量产能力。",
    cover: "/robots/g1.jpg",
    images: ["/robots/g1.jpg"],
    officialUrl: "https://www.unitree.com/g1",
    specs: {
      height: "127 cm",
      weight: "35 kg",
      payload: "3 kg",
      battery: "约 0.9 kWh",
      speed: "2 m/s",
      dof: "23~43",
    },
    scenarios: ["教育", "开发者平台", "展示", "轻工业"],
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
    highlights: ["性价比高", "量产速度快", "供应链成熟"],
    risks: ["高载荷和复杂操作能力有限", "高端工业落地仍需时间"],
    competitors: ["Unitree H1", "Figure 02", "Optimus"],
    positioning: "更偏开发者与早期商业化入口的人形产品。",
    commercialProgress: [
      "适合做样本库与开发者入口",
      "商业重点在于快速出货与低成本迭代",
    ],
    investmentView: [
      "更适合作为中国机器人供应链与量产能力的观察样本",
      "估值逻辑偏产品放量与生态扩张",
    ],
    confidence: "medium",
  },

  {
    slug: "unitree-h1",
    name: "H1",
    company: "Unitree",
    category: "Humanoid",
    stage: "Commercial",
    summary:
      "Unitree 的高性能全尺寸人形机器人，强调运动能力、通用性与展示效应。",
    cover: "/robots/h1.jpg",
    images: ["/robots/h1.jpg"],
    officialUrl: "https://shop.unitree.com/",
    specs: {
      height: "约 180 cm",
      weight: "约 47 kg",
      payload: "未公开",
      battery: "未公开",
      speed: "高速步行 / 奔跑能力突出",
      dof: "未公开",
    },
    scenarios: ["科研", "展示", "开发者平台", "具身智能训练"],
    score: 8.6,
    rating: {
      overall: 8.6,
      tech: 8.7,
      business: 8.0,
      supply: 9.0,
      cost: 8.6,
      expand: 8.7,
    },
    cost: {
      bomUsd: 38000,
      actuatorUsd: 14500,
      batteryUsd: 2400,
      sensorUsd: 5500,
      chipUsd: 3800,
      structureUsd: 11800,
    },
    highlights: ["运动性能突出", "品牌传播效果强", "中国链条响应快"],
    risks: ["落地场景还偏前期", "任务泛化能力仍待验证"],
    competitors: ["Optimus", "Apollo", "Figure 02"],
    positioning: "高性能展示型与研发型平台。",
    commercialProgress: [
      "更适合作为技术展示与研发平台",
      "离大规模工业落地仍有距离",
    ],
    investmentView: [
      "对供应链和品牌有示范意义",
      "对收入贡献更多取决于后续场景突破",
    ],
    confidence: "medium",
  },

  {
    slug: "apollo",
    name: "Apollo",
    company: "Apptronik",
    category: "Humanoid",
    stage: "Pilot",
    summary:
      "Apptronik 推出的人形机器人，定位工业与企业场景，强调可部署性与通用劳动力替代。",
    cover: "/robots/apollo.jpg",
    images: ["/robots/apollo.jpg"],
    officialUrl: "https://apptronik.com/apollo",
    specs: {
      height: "173 cm",
      weight: "72 kg",
      payload: "25 kg",
      battery: "4 小时可更换电池",
      speed: "未公开",
      dof: "未公开",
    },
    scenarios: ["制造业", "物流", "仓库", "企业服务"],
    score: 8.4,
    rating: {
      overall: 8.4,
      tech: 8.6,
      business: 8.1,
      supply: 7.8,
      cost: 7.9,
      expand: 8.5,
    },
    cost: {
      bomUsd: 55000,
      actuatorUsd: 18000,
      batteryUsd: 4200,
      sensorUsd: 9000,
      chipUsd: 6500,
      structureUsd: 17300,
    },
    highlights: ["工业定位清晰", "通用劳动力叙事直接", "单机参数较均衡"],
    risks: ["生态与供应链规模不及头部", "量产验证仍需推进"],
    competitors: ["Optimus", "Figure 02", "Digit"],
    positioning: "工业落地方向明确的人形挑战者。",
    commercialProgress: [
      "目前更偏试点验证",
      "看点在于客户复购与持续部署能力",
    ],
    investmentView: [
      "中期价值取决于量产与部署节奏",
      "若切入更多工业客户，弹性可提升",
    ],
    confidence: "medium",
  },

  {
    slug: "digit",
    name: "Digit",
    company: "Agility Robotics",
    category: "Humanoid",
    stage: "Commercial",
    summary:
      "Digit 是当前最接近真实商业部署的人形机器人之一，重点面向仓储与物流工作流。",
    cover: "/robots/digit.jpg",
    images: ["/robots/digit.jpg"],
    officialUrl: "https://www.agilityrobotics.com/resources/spec-sheet",
    specs: {
      height: "约 175 cm",
      weight: "约 65 kg",
      payload: "16 kg",
      battery: "可更换电池",
      speed: "未公开",
      dof: "未公开",
    },
    scenarios: ["仓储物流", "搬运", "分拣辅助"],
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
    highlights: ["商业部署领先", "场景明确", "ROI 逻辑更清晰"],
    risks: ["适用场景相对聚焦", "单机成本仍高", "泛化能力有限"],
    competitors: ["Figure 02", "Optimus", "Apollo"],
    positioning: "商业化最领先的人形工作流机器人之一。",
    commercialProgress: [
      "已经进入生产部署与商业合作阶段",
      "后续关键在于持续运行小时数与客户扩展",
    ],
    investmentView: [
      "是衡量人形机器人商业化可行性的关键样本",
      "中短期更偏业务兑现，不只是故事",
    ],
    confidence: "high",
  },

  {
    slug: "neo-gamma",
    name: "NEO Gamma",
    company: "1X",
    category: "Humanoid",
    stage: "Prototype",
    summary:
      "1X 面向家庭与日常环境的人形机器人版本，强调安全、柔和外观与居家交互场景。",
    cover: "/robots/neo-gamma.jpg",
    images: ["/robots/neo-gamma.jpg"],
    officialUrl: "https://www.1x.tech/",
    specs: {
      height: "未公开",
      weight: "未公开",
      payload: "未公开",
      battery: "未公开",
      speed: "未公开",
      dof: "未公开",
    },
    scenarios: ["家庭", "陪伴", "轻服务", "日常辅助"],
    score: 7.9,
    rating: {
      overall: 7.9,
      tech: 8.2,
      business: 7.2,
      supply: 6.8,
      cost: 6.9,
      expand: 8.7,
    },
    cost: {
      bomUsd: 42000,
      actuatorUsd: 13500,
      batteryUsd: 2600,
      sensorUsd: 8000,
      chipUsd: 5200,
      structureUsd: 12700,
    },
    highlights: ["家用方向差异化明显", "产品风格更贴近日常环境", "具备想象空间"],
    risks: ["家用需求验证更慢", "安全和成本要求更高", "商业闭环较远"],
    competitors: ["Figure 03", "Walker", "Optimus"],
    positioning: "更偏家庭服务长期方向的人形平台。",
    commercialProgress: [
      "目前仍处于概念验证与能力演进阶段",
      "短期更看技术演示，中长期看家用需求成立与否",
    ],
    investmentView: [
      "家用赛道一旦成立空间很大",
      "但落地路径和时间表不确定性更强",
    ],
    confidence: "low",
  },

  {
    slug: "phoenix",
    name: "Phoenix",
    company: "Sanctuary AI",
    category: "Humanoid",
    stage: "Pilot",
    summary:
      "Sanctuary AI 的人形机器人平台，强调通用操作与人类级任务执行框架。",
    cover: "/robots/phoenix.jpg",
    images: ["/robots/phoenix.jpg"],
    officialUrl: "https://sanctuary.ai/",
    specs: {
      height: "未公开",
      weight: "未公开",
      payload: "未公开",
      battery: "未公开",
      speed: "未公开",
      dof: "未公开",
    },
    scenarios: ["零售", "轻工业", "通用操作"],
    score: 8.0,
    rating: {
      overall: 8.0,
      tech: 8.5,
      business: 7.4,
      supply: 6.9,
      cost: 6.8,
      expand: 8.5,
    },
    cost: {
      bomUsd: 58000,
      actuatorUsd: 18000,
      batteryUsd: 3000,
      sensorUsd: 11000,
      chipUsd: 7000,
      structureUsd: 19000,
    },
    highlights: ["通用操作叙事强", "技术路线有辨识度", "适合做能力样本"],
    risks: ["规模化商业验证不足", "成本与量产路径不清晰"],
    competitors: ["Figure 02", "Apollo", "Optimus"],
    positioning: "偏技术路线验证与通用操作能力展示。",
    commercialProgress: [
      "目前更偏试点与能力展示",
      "距离大规模部署还有距离",
    ],
    investmentView: [
      "更适合放在技术弹性篮子里观察",
      "商业兑现节奏慢于工业落地型选手",
    ],
    confidence: "low",
  },

  {
    slug: "gr-1",
    name: "GR-1",
    company: "Fourier",
    category: "Humanoid",
    stage: "Commercial",
    summary:
      "Fourier 的人形机器人平台，依托公司在康复机器人与机电控制方面的积累向通用人形延展。",
    cover: "/robots/gr1.jpg",
    images: ["/robots/gr1.jpg"],
    officialUrl: "https://www.fftai.com/",
    specs: {
      height: "约 165 cm",
      weight: "约 55 kg",
      payload: "约 50 kg 静态负载（研究口径）",
      battery: "可更换",
      speed: "未公开",
      dof: "未公开",
    },
    scenarios: ["科研", "康复延展", "展示", "具身智能训练"],
    score: 8.1,
    rating: {
      overall: 8.1,
      tech: 8.2,
      business: 7.8,
      supply: 8.4,
      cost: 7.9,
      expand: 8.0,
    },
    cost: {
      bomUsd: 30000,
      actuatorUsd: 11000,
      batteryUsd: 1800,
      sensorUsd: 4500,
      chipUsd: 3000,
      structureUsd: 9700,
    },
    highlights: ["中国供应链优势", "运动控制基础较好", "有产业落地延展空间"],
    risks: ["大规模场景落地仍在早期", "品牌与生态仍需强化"],
    competitors: ["Unitree H1", "G1", "Walker S1"],
    positioning: "中国人形平台中的均衡型选手。",
    commercialProgress: [
      "适合做研发、展示与早期落地样本",
      "后续看客户结构与持续出货能力",
    ],
    investmentView: [
      "更适合作为中国人形产业链观察标的",
      "关键在于从样机到稳定交付的跨越",
    ],
    confidence: "medium",
  },

  {
    slug: "walker-s1",
    name: "Walker S1",
    company: "UBTECH",
    category: "Humanoid",
    stage: "Pilot",
    summary:
      "UBTECH 面向工业场景的人形机器人，强调进入制造场景的可部署性。",
    cover: "/robots/walker-s1.jpg",
    images: ["/robots/walker-s1.jpg"],
    officialUrl: "https://www.ubtrobot.com/",
    specs: {
      height: "未公开",
      weight: "未公开",
      payload: "未公开",
      battery: "未公开",
      speed: "未公开",
      dof: "未公开",
    },
    scenarios: ["制造业", "装配辅助", "工厂内物流"],
    score: 8.0,
    rating: {
      overall: 8.0,
      tech: 8.1,
      business: 7.9,
      supply: 7.8,
      cost: 7.5,
      expand: 8.3,
    },
    cost: {
      bomUsd: 45000,
      actuatorUsd: 15000,
      batteryUsd: 2500,
      sensorUsd: 8500,
      chipUsd: 4500,
      structureUsd: 14500,
    },
    highlights: ["工业方向明确", "中国整机厂能力较完整", "场景落地可跟踪"],
    risks: ["公开参数有限", "持续部署能力仍待验证"],
    competitors: ["GR-1", "Unitree H1", "Apollo"],
    positioning: "中国工业人形落地样本之一。",
    commercialProgress: [
      "看点在于汽车与制造场景验证",
      "关键指标是连续运行、客户复购与交付节奏",
    ],
    investmentView: [
      "更适合跟踪产业验证，而不是短期财务兑现",
      "若工业场景稳定落地，估值中枢有上修空间",
    ],
    confidence: "medium",
  },

  {
    slug: "spot",
    name: "Spot",
    company: "Boston Dynamics",
    category: "Quadruped",
    stage: "Commercial",
    summary:
      "Spot 是全球最成熟的四足机器人之一，广泛应用于巡检、安防和工业检查。",
    cover: "/robots/spot.jpg",
    images: ["/robots/spot.jpg"],
    officialUrl: "https://bostondynamics.com/products/spot/",
    specs: {
      height: "84 cm",
      weight: "32 kg",
      payload: "14 kg",
      battery: "可更换电池",
      speed: "1.6 m/s",
      dof: "12+",
    },
    scenarios: ["巡检", "安防", "工业", "能源设施"],
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
    highlights: ["成熟度极高", "可靠性强", "商业化最成功的四足之一"],
    risks: ["价格高", "通用操作能力有限", "更多偏专用场景"],
    competitors: ["ANYmal", "Unitree B2"],
    positioning: "四足机器人商业化标杆。",
    commercialProgress: [
      "已在多行业形成稳定应用样本",
      "更多看续单与行业渗透率",
    ],
    investmentView: [
      "是观察专用机器人商业化成熟度的标杆样本",
      "对比人形机器人，更偏稳定兑现而非高弹性故事",
    ],
    confidence: "high",
  },

  {
    slug: "anymal",
    name: "ANYmal",
    company: "ANYbotics",
    category: "Quadruped",
    stage: "Commercial",
    summary:
      "ANYmal 专注工业巡检，是欧洲工业四足机器人代表之一，强调高可靠性与恶劣环境适应性。",
    cover: "/robots/anymal.jpg",
    images: ["/robots/anymal.jpg"],
    officialUrl: "https://www.anybotics.com/robotics/anymal/",
    specs: {
      height: "未公开",
      weight: "50 kg",
      payload: "10 kg+",
      battery: "工业级可换电",
      speed: "未公开",
      dof: "12+",
    },
    scenarios: ["能源巡检", "化工", "工业设施", "危险环境检查"],
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
    highlights: ["工业环境适应性强", "客户质量高", "欧洲工业样本典型"],
    risks: ["价格高", "规模化受限", "更偏专用场景"],
    competitors: ["Spot", "Unitree B2"],
    positioning: "工业巡检型四足机器人代表。",
    commercialProgress: [
      "已经形成工业客户基础",
      "后续看全球化扩张与软件服务收入",
    ],
    investmentView: [
      "更适合拿来观察工业专用机器人的可复制商业模式",
      "弹性不如人形，但兑现度更高",
    ],
    confidence: "high",
  },
];
