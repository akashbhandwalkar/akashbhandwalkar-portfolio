import Head from 'next/head';
import CssArts from './css-arts';

export default function Home() {
  return (
    <div>
      <Head>
        <title> Akash Bhandwalkar | Portfolio </title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet" />
      </Head>

      <CssArts />
      
    </div>
  )
}

