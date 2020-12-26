import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <meta
            name="description"
            content="Loja de Notebook website com Next.Js"
          />
        </Head>
        <Main />
        <NextScript />
      </Html>
    )
  }
}

export default MyDocument
