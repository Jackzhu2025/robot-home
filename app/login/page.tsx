export default function LoginPage() {
  return (
    <div className="page-wrap">
      <div className="card" style={{ maxWidth: 520, margin: "0 auto" }}>
        <h1>登录</h1>
        <input placeholder="邮箱" style={{ width: "100%", marginBottom: 12 }} />
        <input placeholder="密码" type="password" style={{ width: "100%", marginBottom: 12 }} />
        <button className="btn">登录</button>
        <p className="muted" style={{ marginTop: 12 }}>生产版请接 Supabase Auth / Auth.js。</p>
      </div>
    </div>
  )
}
