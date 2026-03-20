export default function AccountPage() {
  return (
    <div className="page-wrap">
      <h1>用户中心</h1>
      <div className="grid grid-2">
        <div className="card">
          <h2>我的信息</h2>
          <p>演示账号：admin@robothome.cn</p>
          <p>角色：admin</p>
          <p>套餐：pro</p>
        </div>
        <div className="card">
          <h2>收藏与订阅</h2>
          <p className="muted">完整版可接 Supabase favorites / subscriptions 表。</p>
        </div>
      </div>
    </div>
  )
}
