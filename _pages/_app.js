import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Ahmadh Hassan</title>
        <meta name="description" content="Ahmadh Hassan's portfolio website" />
        <meta property="og:title" content="Ahmadh Hassan" />
        <meta property="og:description" content="Ahmadh Hassan's portfolio showcasing hardware and software projects" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp