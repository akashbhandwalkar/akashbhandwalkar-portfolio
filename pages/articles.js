import Link from 'next/link'

function Articles() {
  return (
  <div className="page-wrapper">
      <div className="recent-post-wrapper">
          <h2 className='recent-post'> Recent Posts </h2>
          <ul className="articles">
                <li className="article"> 
                    <Link href='/articles/async-and-await-in-javascript'> async and await keywords in JavaScript </Link> 

                    <span className='published-date'> 04 April, 2022 </span>
                </li>
                <li className="article"> 
                    <Link href='/articles/async-await-in-javascript'> Everything you should know about position property in css </Link> 
                    <span className='published-date'> 26 January, 2022 </span>    
                </li>
                <li className="article"> 
                    <Link href='/articles/async-await-in-javascript'> async and defer html attributes </Link> 
                    <span className='published-date'> 26 January, 2022 </span>
                </li>
                <li className="article"> 
                    <Link href='/articles/async-await-in-javascript'> Inheritance in javascript </Link> 
                    <span className='published-date'> 26 January, 2022 </span>
                </li>

          </ul>

      </div>
  </div>
  
  )
}

export default Articles
