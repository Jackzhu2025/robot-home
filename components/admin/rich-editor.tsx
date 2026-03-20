"use client"

export function RichEditor({ value, onChange }) {
  const exec = (command: string, arg?: string) => {
    document.execCommand(command, false, arg)
  }

  return (
    <div>
      <div className="toolbar">
        <button className="btn small secondary" type="button" onClick={() => exec("bold")}>加粗</button>
        <button className="btn small secondary" type="button" onClick={() => exec("formatBlock", "h2")}>H2</button>
        <button className="btn small secondary" type="button" onClick={() => exec("insertUnorderedList")}>列表</button>
        <button className="btn small secondary" type="button" onClick={() => exec("formatBlock", "blockquote")}>引用</button>
      </div>
      <div
        className="editor"
        contentEditable
        suppressContentEditableWarning
        dangerouslySetInnerHTML={{ __html: value }}
        onInput={(e) => onChange((e.target as HTMLDivElement).innerHTML)}
      />
    </div>
  )
}
