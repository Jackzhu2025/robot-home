export default function RegisterPage() {
  return (
    <div className="page-wrap">
      <div className="card" style={{ maxWidth: 560, margin: "0 auto" }}>
        <h1>注册</h1>
        <input placeholder="姓名" style={{ width: "100%", marginBottom: 12 }} />
        <input placeholder="邮箱" style={{ width: "100%", marginBottom: 12 }} />
        <input placeholder="公司" style={{ width: "100%", marginBottom: 12 }} />
        <input placeholder="密码" type="password" style={{ width: "100%", marginBottom: 12 }} />
        <button className="btn">注册</button>
      </div>
    </div>
  )
}
