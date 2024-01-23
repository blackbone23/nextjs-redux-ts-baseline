import { Html, Head, Main, NextScript } from 'next/document'
import ThemeRegistry from '@/components/ThemeRegistry'

export default function Document() {
  return (
    <Html lang="en">
      <ThemeRegistry>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </ThemeRegistry>
    </Html>
  )
}
