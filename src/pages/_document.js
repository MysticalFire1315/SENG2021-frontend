import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="./src/assets/favicon.png" />
        {/* <title>Elegant E-invoices</title> */}

      </Head>
      <body>
        <div id="root"></div>
        <script type="module" src="/src/app.js" async />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
