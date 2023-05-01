import Link from 'next/link';

export default function Header({ title }) {
  return(<div className="header-wrapper">
          <span className='desktop-only'> akashbhandwalkar.in </span>
          <div className="mobile-only">
            <ul className="navbar">
              <li className="nav-item"> <Link href="/articles"> Articles </Link> </li>
              {/* <li className="nav-item"> <Link href="/projects"> Projects </Link> </li>
              <li className="nav-item"> <Link href="/games"> Games </Link> </li> */}
              <li className="nav-item m-4"> <Link href="/css-arts"> CSS Arts </Link> </li>
              <li className="nav-item"> <Link href="/tech-talks"> Tech Talks </Link> </li>
            </ul>
          </div>
      </div>)
}
