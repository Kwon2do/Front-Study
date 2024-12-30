import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';

export const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
  cache: new InMemoryCache()
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
