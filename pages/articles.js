import Link from 'next/link'
import Head from 'next/head';

function Articles() {
  return (
      <div>
           <Head>
                <title> Akash Bhandwalkar | Articles </title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
     
        <div className="page-wrapper">
            <div className="recent-post-wrapper">
                <h2 className='recent-post'> Recent Posts </h2>
                <ul className="articles">
                        <li className="article"> 
                            <Link href='/articles/async-and-await-in-javascript'> async and await keywords in JavaScript </Link> 

                            <span className='published-date'> 04 April, 2022 </span>
                        </li>
                        {/* <li className="article"> 
                            <Link href='/articles/async-await-in-javascript'> Coming soon... Everything you should know about position property in css </Link> 
                            <span className='published-date'> 26 January, 2022 </span>    
                        </li> */}
                        <li className="article"> 
                            <Link href='/articles/async-and-defer-attributes-in-html'>Coming soon...  async and defer html attributes </Link> 
                            <span className='published-date'> 26 January, 2022 </span>
                        </li>
                        {/* <li className="article"> 
                            <Link href='/articles/async-await-in-javascript'> Coming soon...  Inheritance in javascript </Link> 
                            <span className='published-date'> 26 January, 2022 </span>
                        </li> */}

                </ul>

            </div>
        </div>
    </div>
  )
}

export default Articles
