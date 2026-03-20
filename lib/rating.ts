import type { Rating } from "@/data/robots"

export function calcTotalScore(rating: Rating) {
  return Math.round(
    rating.tech * 0.3 +
      rating.commercialization * 0.25 +
      rating.industry * 0.2 +
      rating.cost * 0.15 +
      rating.scalability * 0.1
  )
}

export function sortByRatingKey(items, key) {
  return [...items].sort((a, b) => b.rating[key] - a.rating[key])
}
