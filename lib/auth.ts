export type DemoUser = {
  id: string
  email: string
  name: string
  role: "guest" | "user" | "admin"
  plan: "free" | "pro" | "enterprise"
}

export function getDemoUser(): DemoUser {
  return {
    id: "demo-user-1",
    email: "admin@robothome.cn",
    name: "Demo Admin",
    role: "admin",
    plan: "pro"
  }
}

export function isPro(user?: DemoUser | null) {
  return !!user && (user.plan === "pro" || user.plan === "enterprise" || user.role === "admin")
}

export function isAdmin(user?: DemoUser | null) {
  return !!user && user.role === "admin"
}
