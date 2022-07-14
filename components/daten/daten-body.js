export default function DatenBody({ content }) {
  return (
    <div className="mx-auto py-5 content">
      <div dangerouslySetInnerHTML={{ __html: content }}/>
    </div>
  )
}
