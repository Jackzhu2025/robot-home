# RobotHome v10 Complete

一个可直接运行、可继续上线扩展的完整版本，包含：

- Landing Page
- 机器人库 / 详情页
- 投资评分系统 + 雷达图 + 分榜单
- 评分解释层 / 投资标签 / 公司映射
- 选型决策引擎
- 价格 / 成本数据库
- 资讯页 / 资讯详情
- 公司页
- 定价页（Free / Pro / Enterprise）
- AI 分析页
- 用户账户页
- 登录 / 注册页
- 管理后台（富文本编辑器 + 上传 + 审核流演示）
- Stripe Checkout / Webhook 路由
- Supabase schema

## Quick start

```bash
npm install
npm run dev
```

Open:
- http://localhost:3000
- http://localhost:3000/rankings
- http://localhost:3000/selector
- http://localhost:3000/costs
- http://localhost:3000/admin

## Environment

复制 `.env.example` 为 `.env.local`，按需填入：

- NEXT_PUBLIC_SUPABASE_URL
- NEXT_PUBLIC_SUPABASE_ANON_KEY
- SUPABASE_SERVICE_ROLE_KEY
- OPENAI_API_KEY
- STRIPE_SECRET_KEY
- STRIPE_WEBHOOK_SECRET
- NEXT_PUBLIC_STRIPE_PRICE_ID
- NEXT_PUBLIC_APP_URL

## Notes

- 未配置 OpenAI / Stripe / Supabase 时，项目会自动走演示回退逻辑。
- 要做真实生产环境，请继续补：
  - Supabase Auth 真登录
  - Stripe Webhook 写库
  - Supabase Storage 真上传
  - 行为埋点 / CRM / 邮件订阅
