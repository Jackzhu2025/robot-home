export default function sitemap() {
  return [
    { url: "http://localhost:3000", priority: 1 },
    { url: "http://localhost:3000/library", priority: 0.9 },
    { url: "http://localhost:3000/rankings", priority: 0.9 },
    { url: "http://localhost:3000/selector", priority: 0.8 },
    { url: "http://localhost:3000/costs", priority: 0.8 },
    { url: "http://localhost:3000/news", priority: 0.8 },
    { url: "http://localhost:3000/pricing", priority: 0.8 }
  ]
}
