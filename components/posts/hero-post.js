import Avatar from '../components/avatar'
import DateFormatter from '../components/date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <section>
      <div className="mb-5">
        <CoverImage
          title={title}
          src={coverImage}
          slug={slug}
          height={620}
          width={1240}
        />
      </div>
      <div className=" ">
        <div>
          <h3 className="mb-4 ">
            <Link href={`/posts/${slug}`}>
              <a className=" ">{title}</a>
            </Link>
          </h3>
          <div className="mb-4 ">
            <DateFormatter dateString={date} />
          </div>
        </div>
        <div>
          <p className="mb-4">{excerpt}</p>
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </div>
    </section>
  )
}
