"use client"

import { useMemo } from "react"

export function useUser() {
  return useMemo(() => {
    return {
      user: {
        id: "demo-user-1",
        email: "admin@robothome.cn",
        name: "Demo Admin",
        role: "admin",
        plan: "pro"
      }
    }
  }, [])
}
