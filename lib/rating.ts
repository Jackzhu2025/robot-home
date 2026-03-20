import type { Rating } from "@/data/robots"

export function calcTotalScore(rating = {}) {
  return (
    (rating.tech ?? 0) +
    (rating.commercialization ?? 0) +
    (rating.cost ?? 0)
  )
}

export function sortByRatingKey(robots, key) {
  return [...robots].sort(
    (a, b) => (b.rating?.[key] ?? 0) - (a.rating?.[key] ?? 0)
  )
}
