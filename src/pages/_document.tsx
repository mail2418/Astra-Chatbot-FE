import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Html, Head, Main, NextScript } from 'next/document'
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/themes/df-messenger-default.css"/>
      </Head>
      <body>
        {/* <Header/> */}
        <Main />
        <Footer/>
        <NextScript />
      </body>
    </Html>
  )
}