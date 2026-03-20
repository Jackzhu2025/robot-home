import { notFound } from "next/navigation"
import { getNewsBySlug } from "@/lib/queries"

export default function NewsDetailPage({ params }) {
  const item = getNewsBySlug(params.slug)
  if (!item) return notFound()

  return (
    <div className="page-wrap">
      <div className="card">
        <img className="company-cover" src={item.cover} alt={item.title} />
        <h1>{item.title}</h1>
        <p className="muted">{item.date}</p>
        <div dangerouslySetInnerHTML={{ __html: item.content }} />
      </div>
    </div>
  )
}
