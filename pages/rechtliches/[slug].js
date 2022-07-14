import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import DatenBody from '../../components/daten/daten-body' 
import DatenHeader from '../../components/daten/daten-header' 
import { getDatenBySlug, getAllDaten } from '../../lib/api'
import DatenTitle from '../../components/daten/daten-title'
import Head from 'next/head'
import { CMS_NAME } from '../../lib/constants'
import markdownToHtml from '../../lib/markdownToHtml'

export default function Daten({ daten }) {
  const router = useRouter()
  // if (!router.isFallback && !daten?.slug) {
  //   return <ErrorPage statusCode={404} />
  // }
  return (
    <section >
      <div className='container'>
        {router.isFallback ? (
          <DatenTitle>Loading…</DatenTitle>
        ) : (
          <>
            <article className="mb-5">
              <Head>
                <title> {CMS_NAME} | {daten.title} </title> 
              </Head>
              <DatenHeader title={daten.title} />
              <DatenBody content={daten.content} />
            </article>
          </>
        )}
      </div>
    </section>
  )
}

export async function getStaticProps({ params }) {
  const daten = getDatenBySlug(params.slug, [
    'title', ,
    'content', 
  ])
  const content = await markdownToHtml(daten.content || '')

  return {
    props: {
      daten: {
        ...daten,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const daten = getAllDaten(['slug'])

  return {
    paths: daten.map((daten) => {
      return {
        params: {
          slug: daten.slug,
        },
      }
    }),
    fallback: false,
  }
}
