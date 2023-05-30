import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head >
        {/* <title>Jadavpur University Product Club</title> */}
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Bruno+Ace+SC&family=Montserrat&family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet"></link>      </Head>
      <body className='bg-website-background text-website-text'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}