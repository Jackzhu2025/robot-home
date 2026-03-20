export default function HomePage() {
  return (
    <main
      style={{
        maxWidth: "1180px",
        margin: "0 auto",
        padding: "48px 24px 80px",
        color: "#111827",
        background: "#ffffff",
      }}
    >
      {/* Hero */}
      <section style={{ padding: "32px 0 56px" }}>
        <div
          style={{
            display: "inline-block",
            padding: "6px 12px",
            borderRadius: "999px",
            background: "#EEF2FF",
            color: "#4338CA",
            fontSize: "13px",
            fontWeight: 600,
            marginBottom: "18px",
          }}
        >
          Robot Home · 投研与决策平台
        </div>

        <h1
          style={{
            fontSize: "48px",
            lineHeight: 1.15,
            fontWeight: 800,
            margin: "0 0 18px 0",
            maxWidth: "900px",
          }}
        >
          全球机器人产业的投研与决策平台
        </h1>

        <p
          style={{
            fontSize: "20px",
            lineHeight: 1.7,
            color: "#4B5563",
            maxWidth: "860px",
            margin: "0 0 28px 0",
          }}
        >
          覆盖核心机器人、关键公司与成本结构，基于五维评分模型、BOM
          拆解与场景选型逻辑，提供可执行的投资研究与产品选型判断。
        </p>

        <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginBottom: "32px" }}>
          <a
            href="/rankings"
            style={{
              display: "inline-block",
              padding: "14px 22px",
              borderRadius: "12px",
              background: "#111827",
              color: "#ffffff",
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            查看评分榜
          </a>

          <a
            href="/selector"
            style={{
              display: "inline-block",
              padding: "14px 22px",
              borderRadius: "12px",
              background: "#F3F4F6",
              color: "#111827",
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            开始选型
          </a>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "14px",
            marginTop: "18px",
          }}
        >
          {[
            ["50+", "核心机器人"],
            ["30+", "重点公司"],
            ["200+", "关键参数"],
            ["100+", "成本拆解样本"],
          ].map(([num, label]) => (
            <div
              key={label}
              style={{
                border: "1px solid #E5E7EB",
                borderRadius: "16px",
                padding: "20px",
                background: "#FAFAFA",
              }}
            >
              <div style={{ fontSize: "28px", fontWeight: 800, marginBottom: "6px" }}>{num}</div>
              <div style={{ color: "#6B7280", fontSize: "15px" }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Core capabilities */}
      <section style={{ padding: "20px 0 56px" }}>
        <h2 style={{ fontSize: "30px", fontWeight: 800, marginBottom: "12px" }}>核心能力</h2>
        <p style={{ fontSize: "17px", color: "#6B7280", marginBottom: "26px", lineHeight: 1.8 }}>
          不是简单的信息罗列，而是将机器人行业的数据、判断与选型逻辑结构化。
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "18px",
          }}
        >
          {[
            {
              title: "机器人评分系统",
              desc: "基于技术壁垒、商业化能力、产业链成熟度、成本结构、扩展能力五维模型进行评分与比较。",
            },
            {
              title: "成本数据库",
              desc: "从执行器、电池、传感器、芯片、结构件等模块拆解机器人 BOM，观察规模化降本路径。",
            },
            {
              title: "选型引擎",
              desc: "基于场景、预算、载荷与部署需求，对机器人候选方案进行结构化匹配与排序。",
            },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                border: "1px solid #E5E7EB",
                borderRadius: "18px",
                padding: "24px",
                background: "#FFFFFF",
                boxShadow: "0 6px 24px rgba(0,0,0,0.04)",
              }}
            >
              <h3 style={{ fontSize: "20px", fontWeight: 700, margin: "0 0 12px 0" }}>
                {item.title}
              </h3>
              <p style={{ color: "#6B7280", lineHeight: 1.8, margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why trust us */}
      <section style={{ padding: "20px 0 56px" }}>
        <h2 style={{ fontSize: "30px", fontWeight: 800, marginBottom: "12px" }}>
          为什么值得参考
        </h2>
        <p style={{ fontSize: "17px", color: "#6B7280", marginBottom: "24px", lineHeight: 1.8 }}>
          我们的目标不是制造“绝对正确”的结论，而是提供一套可比较、可解释、可复盘的决策框架。
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "16px",
          }}
        >
          {[
            "五维评分框架，避免单一指标判断",
            "成本拆解帮助识别规模化降本路径",
            "公司页与机器人页形成研究闭环",
            "选型逻辑帮助连接投资视角与产业视角",
          ].map((text) => (
            <div
              key={text}
              style={{
                padding: "18px 20px",
                borderRadius: "14px",
                background: "#F9FAFB",
                border: "1px solid #E5E7EB",
                fontWeight: 600,
                lineHeight: 1.7,
              }}
            >
              {text}
            </div>
          ))}
        </div>
      </section>

      {/* Featured coverage */}
      <section style={{ padding: "20px 0 56px" }}>
        <h2 style={{ fontSize: "30px", fontWeight: 800, marginBottom: "12px" }}>
          代表性覆盖对象
        </h2>
        <p style={{ fontSize: "17px", color: "#6B7280", marginBottom: "24px", lineHeight: 1.8 }}>
          当前已覆盖代表性的人形机器人、四足机器人与关键公司，后续将持续扩展样本库。
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "16px",
          }}
        >
          {[
            "Tesla Optimus",
            "Figure 02",
            "Agility Digit",
            "Boston Dynamics Spot",
            "Unitree G1 / Go2",
            "NVIDIA / Tesla / Figure",
          ].map((name) => (
            <div
              key={name}
              style={{
                padding: "18px 20px",
                borderRadius: "16px",
                border: "1px solid #E5E7EB",
                background: "#FFFFFF",
                boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
                fontWeight: 700,
              }}
            >
              {name}
            </div>
          ))}
        </div>
      </section>

      {/* Quick entry */}
      <section
        style={{
          marginTop: "8px",
          padding: "28px",
          borderRadius: "20px",
          background: "#111827",
          color: "#ffffff",
        }}
      >
        <h2 style={{ fontSize: "28px", fontWeight: 800, margin: "0 0 12px 0" }}>
          从哪里开始使用
        </h2>
        <p style={{ color: "rgba(255,255,255,0.78)", fontSize: "16px", lineHeight: 1.8 }}>
          如果你想先快速了解行业格局，请从评分榜开始；如果你有实际部署需求，请直接进入选型工具。
        </p>

        <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginTop: "18px" }}>
          <a
            href="/rankings"
            style={{
              display: "inline-block",
              padding: "12px 18px",
              borderRadius: "12px",
              background: "#ffffff",
              color: "#111827",
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            进入评分榜
          </a>
          <a
            href="/news"
            style={{
              display: "inline-block",
              padding: "12px 18px",
              borderRadius: "12px",
              background: "rgba(255,255,255,0.12)",
              color: "#ffffff",
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            查看行业资讯
          </a>
        </div>
      </section>
    </main>
  );
}
