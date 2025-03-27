import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Ahmadh Hassan</title>
        <meta name="description" content="Ahmadh Hassan's personal website" />
        <meta property="og:title" content="Ahmadh Hassan" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp