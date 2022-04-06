import Head from 'next/head';
import CssArts from './css-arts';

export default function Home() {
  return (
    <div>
      <Head>
        <title> Akash Bhandwalkar | Portfolio </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CssArts />
      
    </div>
  )
}

