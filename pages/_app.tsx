import '../styles/globals.css'

import { AppProps } from 'next/app'
import { _NominationsContext } from '../lib/use-nominations'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <_NominationsContext>
      <Component {...pageProps} />
    </_NominationsContext>
  )
}