import { robots } from "@/data/robots"
import { news } from "@/data/news"
import { companies } from "@/data/companies"
import { calcTotalScore } from "@/lib/rating"

export function getAllRobots() {
  return robots
}

export function getRobotBySlug(slug: string) {
  return robots.find((r) => r.slug === slug)
}

export function getFeaturedRobots() {
  return [...robots].sort((a, b) => calcTotalScore(b.rating) - calcTotalScore(a.rating)).slice(0, 4)
}

export function getAllNews() {
  return news
}

export function getNewsBySlug(slug: string) {
  return news.find((n) => n.slug === slug)
}

export function getAllCompanies() {
  return companies
}

export function getCompanyBySlug(slug: string) {
  return companies.find((c) => c.slug === slug)
}
