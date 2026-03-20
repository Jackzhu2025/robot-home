import Link from "next/link"
import { getAllNews } from "@/lib/queries"

export default function NewsPage() {
  const items = getAllNews()
  return (
    <div className="page-wrap">
      <h1>资讯中心</h1>
      <div className="grid grid-2">
        {items.map((item) => (
          <div className="card" key={item.id}>
            <img className="news-cover" src={item.cover} alt={item.title} />
            <h3>{item.title}</h3>
            <p className="muted">{item.summary}</p>
            <div className="muted">{item.date}</div>
            <Link className="btn ghost" href={`/news/${item.slug}`}>阅读全文</Link>
          </div>
        ))}
      </div>
    </div>
  )
}
