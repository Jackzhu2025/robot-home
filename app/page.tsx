export default function HomePage() {
  return (
    <main style={{ padding: "40px", maxWidth: "1000px", margin: "0 auto" }}>
      
      {/* 标题区 */}
      <h1 style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "16px" }}>
        全球机器人产业的投研与决策平台
      </h1>

      <p style={{ fontSize: "18px", color: "#555", marginBottom: "32px" }}>
        覆盖 50+ 核心机器人与 30+ 公司，基于五维评分模型与成本拆解，
        提供可执行的投资与选型判断
      </p>

      {/* 按钮区 */}
      <div style={{ marginBottom: "40px" }}>
        <a href="/rankings" style={{ marginRight: "20px", fontWeight: "bold" }}>
          👉 查看评分榜
        </a>
        <a href="/selector" style={{ fontWeight: "bold" }}>
          👉 开始选型
        </a>
      </div>

      {/* 核心能力 */}
      <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>核心能力</h2>

      <ul style={{ marginBottom: "40px" }}>
        <li>机器人评分系统（五维模型）</li>
        <li>成本数据库（BOM 拆解）</li>
        <li>选型引擎（场景匹配）</li>
      </ul>

      {/* 数据规模 */}
      <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>覆盖范围</h2>

      <ul style={{ marginBottom: "40px" }}>
        <li>50+ 机器人</li>
        <li>30+ 公司</li>
        <li>200+ 参数</li>
        <li>100+ 成本拆解样本</li>
      </ul>

      {/* 推荐入口 */}
      <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>快速入口</h2>

      <ul>
        <li><a href="/rankings">评分榜</a></li>
        <li><a href="/selector">选型工具</a></li>
        <li><a href="/news">行业资讯</a></li>
        <li><a href="/library">机器人库</a></li>
      </ul>

    </main>
  );
}
