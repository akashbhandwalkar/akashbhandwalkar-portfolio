
import Link from 'next/link';
import { useEffect, useState } from 'react';

function isBigScreen() {
  if (typeof window !== "undefined") {
    return window?.innerWidth > 800;
  }
}
export default function Sidebar({ title }) {
    const [showSidebar, setShowHideSidebar] = useState(isBigScreen());
    useEffect(() => {
      if (isBigScreen()) {
        setShowHideSidebar(true);
      }
    }, []);
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
            <li className="nav-item"> <Link href="/1-to-1-meetings"> Free mentorship </Link> </li> 
            <li className="nav-item m-4"> <Link href="/css-arts"> CSS Arts </Link> </li>
            <li className="nav-item"> <Link href="/tech-talks"> Tech Talks </Link> </li>
            <li className="nav-item donate"> <a target="_blank" href="https://www.buymeacoffee.com/akash19"> Donate </a> </li>

          </ul>
        </div>
    )
  }
  