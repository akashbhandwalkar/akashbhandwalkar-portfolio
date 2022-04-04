
import Link from 'next/link'

export default function Sidebar({ title }) {
    return (
      <div className="sidebar-wrapper">
          <div className="profile-pic-wrapper">
          </div>
          <div>
            <h2 className="name">Akash Bhandwalkar</h2>
          </div>
          <div className="position">
            Software Engineer at Checkpoint | React - Redux | AngularJS | HTML | CSS | JS | docker | aws
          </div>

          <ul className="navbar">
            <li className="nav-item"> <Link href="/articles"> Articles </Link> </li>
            {/* <li className="nav-item"> <Link href="/projects"> Projects </Link> </li>
            <li className="nav-item"> <Link href="/games"> Games </Link> </li> */}
            <li className="nav-item"> <Link href="/css-arts"> CSS Arts </Link> </li>
            {/* <li className="nav-item"> <Link href="/learning"> Drafts / learning </Link> </li> */}
          </ul>
        </div>
    )
  }
  