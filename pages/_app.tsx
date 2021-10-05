import '../styles/globals.css'
import { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { initializeApollo } from '../lib/apolloClient'

export default function MyApp({ Component, pageProps }: AppProps) {
  const client = initializeApollo()
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

MyApp
