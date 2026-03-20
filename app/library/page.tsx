import { notFound } from "next/navigation";
import { robots } from "@/data/robots";

type Props = {
  params: {
    slug: string;
  };
};

function scoreColor(score: number) {
  if (score >= 9) return "#166534";
  if (score >= 8) return "#1d4ed8";
  if (score >= 7) return "#92400e";
  return "#6b7280";
}

function scoreBg(score: number) {
  if (score >= 9) return "#dcfce7";
  if (score >= 8) return "#dbeafe";
  if (score >= 7) return "#fef3c7";
  return "#f3f4f6";
}

export default function RobotDetailPage({ params }: Props) {
  const robot = robots.find((item) => item.slug === params.slug);

  if (!robot) {
    notFound();
  }

  return (
    <main style={{ maxWidth: 1180, margin: "0 auto", padding: "40px 24px 80px" }}>
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr",
          gap: 28,
          alignItems: "start",
          marginBottom: 36,
        }}
      >
        <div>
          <div
            style={{
              display: "inline-block",
              padding: "6px 12px",
              borderRadius: 999,
              background: "#eef2ff",
              color: "#4338ca",
              fontSize: 13,
              fontWeight: 700,
              marginBottom: 14,
            }}
          >
            {robot.category} · {robot.stage}
          </div>

          <h1 style={{ fontSize: 40, lineHeight: 1.15, fontWeight: 800, margin: "0 0 12px 0" }}>
            {robot.name}
          </h1>

          <p style={{ fontSize: 18, color: "#4b5563", margin: "0 0 18px 0", lineHeight: 1.8 }}>
            {robot.summary}
          </p>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 18 }}>
            {robot.scenarios.map((item) => (
              <span
                key={item}
                style={{
                  padding: "8px 12px",
                  borderRadius: 999,
                  background: "#f3f4f6",
                  color: "#111827",
                  fontSize: 13,
                  fontWeight: 600,
                }}
              >
                {item}
              </span>
            ))}
          </div>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a
              href="/rankings"
              style={{
                display: "inline-block",
                padding: "12px 18px",
                borderRadius: 12,
                background: "#111827",
                color: "#fff",
                textDecoration: "none",
                fontWeight: 700,
              }}
            >
              返回评分榜
            </a>

            {robot.officialUrl ? (
              <a
                href={robot.officialUrl}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-block",
                  padding: "12px 18px",
                  borderRadius: 12,
                  background: "#f3f4f6",
                  color: "#111827",
                  textDecoration: "none",
                  fontWeight: 700,
                }}
              >
                官方页面
              </a>
            ) : null}
          </div>
        </div>

        <div
          style={{
            border: "1px solid #e5e7eb",
            borderRadius: 20,
            overflow: "hidden",
            background: "#fff",
            boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
          }}
        >
          <img
            src={robot.cover}
            alt={robot.name}
            style={{ width: "100%", height: 420, objectFit: "cover", display: "block" }}
          />
          <div style={{ padding: 18 }}>
            <div style={{ color: "#6b7280", fontSize: 14, marginBottom: 8 }}>{robot.company}</div>
            <div
              style={{
                display: "inline-block",
                padding: "8px 12px",
                borderRadius: 999,
                background: scoreBg(robot.score),
                color: scoreColor(robot.score),
                fontWeight: 800,
                fontSize: 15,
              }}
            >
              综合评分 {robot.score.toFixed(1)}
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, minmax(0, 1fr))",
          gap: 14,
          marginBottom: 32,
        }}
      >
        {[
          ["身高", robot.specs.height || "未披露"],
          ["重量", robot.specs.weight || "未披露"],
          ["载荷", robot.specs.payload || "未披露"],
          ["续航/电池", robot.specs.battery || "未披露"],
          ["速度", robot.specs.speed || "未披露"],
          ["自由度", robot.specs.dof || "未披露"],
        ].map(([label, value]) => (
          <div
            key={label}
            style={{
              border: "1px solid #e5e7eb",
              borderRadius: 16,
              padding: 18,
              background: "#fff",
            }}
          >
            <div style={{ color: "#6b7280", fontSize: 13, marginBottom: 8 }}>{label}</div>
            <div style={{ fontWeight: 800, fontSize: 18 }}>{value}</div>
          </div>
        ))}
      </section>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 24,
          marginBottom: 32,
        }}
      >
        <div
          style={{
            border: "1px solid #e5e7eb",
            borderRadius: 20,
            padding: 24,
            background: "#fff",
          }}
        >
          <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 18 }}>五维评分拆解</h2>

          {[
            ["技术壁垒", robot.rating.tech],
            ["商业化能力", robot.rating.business],
            ["产业链成熟度", robot.rating.supply],
            ["成本优势", robot.rating.cost],
            ["扩展能力", robot.rating.expand],
          ].map(([label, value]) => (
            <div key={label} style={{ marginBottom: 14 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 6,
                  fontSize: 14,
                  fontWeight: 700,
                }}
              >
                <span>{label}</span>
                <span>{value}</span>
              </div>
              <div
                style={{
                  width: "100%",
                  height: 10,
                  borderRadius: 999,
                  background: "#f3f4f6",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: `${Number(value) * 10}%`,
                    height: "100%",
                    background: "#111827",
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            border: "1px solid #e5e7eb",
            borderRadius: 20,
            padding: 24,
            background: "#fff",
          }}
        >
          <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 18 }}>成本快照（站内模型）</h2>

          {[
            ["整机 BOM", `$${robot.cost.bomUsd.toLocaleString()}`],
            ["执行器", `$${robot.cost.actuatorUsd.toLocaleString()}`],
            ["电池", `$${robot.cost.batteryUsd.toLocaleString()}`],
            ["传感器", `$${robot.cost.sensorUsd.toLocaleString()}`],
            ["芯片", `$${robot.cost.chipUsd.toLocaleString()}`],
            ["结构件", `$${robot.cost.structureUsd.toLocaleString()}`],
          ].map(([label, value]) => (
            <div
              key={label}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px 0",
                borderBottom: "1px solid #f3f4f6",
                fontSize: 15,
              }}
            >
              <span style={{ color: "#6b7280" }}>{label}</span>
              <span style={{ fontWeight: 700 }}>{value}</span>
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 24,
          marginBottom: 32,
        }}
      >
        <div
          style={{
            border: "1px solid #e5e7eb",
            borderRadius: 20,
            padding: 24,
            background: "#fff",
          }}
        >
          <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 14 }}>技术 / 产品亮点</h2>
          <ul style={{ paddingLeft: 20, lineHeight: 1.9, color: "#374151" }}>
            {robot.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          {robot.positioning ? (
            <>
              <h3 style={{ fontSize: 18, fontWeight: 800, margin: "20px 0 10px" }}>产品定位</h3>
              <p style={{ color: "#4b5563", lineHeight: 1.9, margin: 0 }}>{robot.positioning}</p>
            </>
          ) : null}
        </div>

        <div
          style={{
            border: "1px solid #e5e7eb",
            borderRadius: 20,
            padding: 24,
            background: "#fff",
          }}
        >
          <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 14 }}>主要风险</h2>
          <ul style={{ paddingLeft: 20, lineHeight: 1.9, color: "#374151" }}>
            {robot.risks.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 24,
          marginBottom: 32,
        }}
      >
        <div
          style={{
            border: "1px solid #e5e7eb",
            borderRadius: 20,
            padding: 24,
            background: "#fff",
          }}
        >
          <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 14 }}>商业化进展</h2>
          <ul style={{ paddingLeft: 20, lineHeight: 1.9, color: "#374151", margin: 0 }}>
            {(robot.commercialProgress || []).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div
          style={{
            border: "1px solid #e5e7eb",
            borderRadius: 20,
            padding: 24,
            background: "#fff",
          }}
        >
          <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 14 }}>投资视角</h2>
          <ul style={{ paddingLeft: 20, lineHeight: 1.9, color: "#374151", margin: 0 }}>
            {(robot.investmentView || []).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section
        style={{
          border: "1px solid #e5e7eb",
          borderRadius: 20,
          padding: 24,
          background: "#fff",
          marginBottom: 32,
        }}
      >
        <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 14 }}>可比竞品</h2>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          {robot.competitors.map((item) => (
            <span
              key={item}
              style={{
                padding: "10px 14px",
                borderRadius: 999,
                background: "#f3f4f6",
                fontWeight: 700,
                color: "#111827",
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      <section
        style={{
          border: "1px solid #e5e7eb",
          borderRadius: 20,
          padding: 24,
          background: "#fff",
        }}
      >
        <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 14 }}>数据说明</h2>
        <p style={{ margin: 0, color: "#4b5563", lineHeight: 1.9 }}>
          本页中的公开规格优先依据官方产品页或官方新闻页整理；评分与 BOM 成本快照为站内研究模型，
          用于横向比较，不代表公司官方披露口径。
        </p>
      </section>
    </main>
  );
}
