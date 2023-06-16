import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
// const {ApolloServer} = require('apollo-server');
// const mongoose = require('mongoose');
// require('dotenv').config();

// Apollo Server
// const typeDefs = require('./graphql/typeDefs');
// const resolvers = require('./graphql/resolvers');

// const Server = new ApolloServer({
//   typeDefs,
//   resolvers,
// });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      {/* <Header /> */}
      <main className='h-[100vh]'>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
