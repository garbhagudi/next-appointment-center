import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
<<<<<<< HEAD
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
=======
>>>>>>> 88ba30d3a2dc75139d8a95347cf24ce88498d0b7

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
