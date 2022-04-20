import { AppProps } from 'next/app';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SessionProvider as NextAuthProvider } from 'next-auth/react';

import '../styles/global.scss';
import '../styles/style.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </NextAuthProvider>
  )
}

export default MyApp
