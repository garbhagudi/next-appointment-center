import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      {/* <Header /> */}
      <main className=''>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
