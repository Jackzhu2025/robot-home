"use client"

import { useState } from "react"

export function FavoriteButton({ targetId, targetType = "robot" }) {
  const key = `fav:${targetType}:${targetId}`
  const [liked, setLiked] = useState(typeof window !== "undefined" ? localStorage.getItem(key) === "1" : false)

  const toggle = () => {
    const next = !liked
    setLiked(next)
    if (typeof window !== "undefined") {
      localStorage.setItem(key, next ? "1" : "0")
    }
  }

  return (
    <button className="btn ghost small" onClick={toggle}>
      {liked ? "已收藏" : "收藏"}
    </button>
  )
}
