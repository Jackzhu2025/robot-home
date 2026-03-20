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

  highlights: string[];
  risks: string[];

  competitors: string[];

  confidence: "high" | "medium" | "low";
};

export const robots: Robot[] = [{
  slug: "tesla-optimus",
  name: "Optimus",
  company: "Tesla",
  category: "Humanoid",
  stage: "Prototype",

  summary: "Tesla推出的人形机器人，核心目标是替代重复性劳动，依托自动驾驶与AI能力构建通用机器人平台。",

  cover: "/robots/optimus.jpg",

  specs: {
    height: "173 cm",
    weight: "73 kg",
    payload: "20 kg",
    battery: "2.3 kWh",
    speed: "5 km/h",
    dof: "28+"
  },

  scenarios: ["制造业", "仓储", "通用劳动"],

  score: 9.2,

  highlights: [
    "AI能力强（FSD迁移）",
    "成本控制潜力大",
    "供应链能力极强"
  ],

  risks: [
    "尚未量产",
    "真实落地能力未验证"
  ],

  competitors: ["Figure 02", "Digit", "Unitree H1"],

  confidence: "medium"
}
 {
  slug: "figure-02",
  name: "Figure 02",
  company: "Figure AI",
  category: "Humanoid",
  stage: "Pilot",

  summary: "Figure推出的第二代人形机器人，已进入宝马工厂测试阶段，强调AI与工业场景结合。",

  cover: "/robots/figure02.jpg",

  specs: {
    height: "168 cm",
    weight: "60 kg",
    payload: "20 kg",
    speed: "4 km/h"
  },

  scenarios: ["汽车制造", "物流"],

  score: 8.8,

  highlights: [
    "与宝马合作",
    "商业化路径清晰",
    "AI模型能力领先"
  ],

  risks: [
    "成本较高",
    "依赖大客户验证"
  ],

  competitors: ["Optimus", "Digit"],

  confidence: "medium"
}
{
  slug: "unitree-g1",
  name: "G1",
  company: "Unitree",
  category: "Humanoid",
  stage: "Commercial",

  summary: "Unitree推出的低成本人形机器人，强调性价比与规模化生产能力。",

  cover: "/robots/g1.jpg",

  specs: {
    height: "127 cm",
    weight: "35 kg",
    speed: "2 m/s"
  },

  scenarios: ["教育", "开发者", "轻工业"],

  score: 8.5,

  highlights: [
    "价格低",
    "供应链成熟",
    "快速迭代能力强"
  ],

  risks: [
    "高端能力不足",
    "应用场景有限"
  ],

  competitors: ["Optimus", "Figure 02"],

  confidence: "medium"
}
{
  slug: "digit",
  name: "Digit",
  company: "Agility Robotics",
  category: "Humanoid",
  stage: "Commercial",

  summary: "Digit是目前最接近商业化落地的人形机器人之一，已在物流仓储场景测试部署。",

  cover: "/robots/digit.jpg",

  specs: {
    height: "175 cm",
    payload: "16 kg"
  },

  scenarios: ["仓储物流"],

  score: 8.9,

  highlights: [
    "已商业部署",
    "场景明确",
    "稳定性较高"
  ],

  risks: [
    "泛化能力弱",
    "扩展性有限"
  ],

  competitors: ["Figure 02", "Optimus"],

  confidence: "high"
}
{
  slug: "spot",
  name: "Spot",
  company: "Boston Dynamics",
  category: "Quadruped",
  stage: "Commercial",

  summary: "Spot是全球最成熟的四足机器人之一，广泛应用于巡检和工业场景。",

  cover: "/robots/spot.jpg",

  specs: {
    weight: "32 kg",
    payload: "14 kg"
  },

  scenarios: ["巡检", "安防", "工业"],

  score: 9.0,

  highlights: [
    "成熟度高",
    "稳定可靠",
    "商业化成功"
  ],

  risks: [
    "成本较高",
    "AI能力有限"
  ],

  competitors: ["ANYmal", "Unitree B2"],

  confidence: "high"
}
{
  slug: "anymal",
  name: "ANYmal",
  company: "ANYbotics",
  category: "Quadruped",
  stage: "Commercial",

  summary: "ANYmal专注工业巡检，是欧洲工业机器人代表之一。",

  cover: "/robots/anymal.jpg",

  specs: {
    weight: "50 kg"
  },

  scenarios: ["能源巡检", "工业"],

  score: 8.7,

  highlights: [
    "工业客户多",
    "可靠性高"
  ],

  risks: [
    "价格高",
    "规模受限"
  ],

  competitors: ["Spot"],

  confidence: "high"
}
