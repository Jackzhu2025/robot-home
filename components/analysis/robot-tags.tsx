export function RobotTags({ tags }: { tags: string[] }) {
  return (
    <div style={{ marginTop: 10 }}>
      {tags.map((tag) => (
        <span className="badge" key={tag}>{tag}</span>
      ))}
    </div>
  )
}
