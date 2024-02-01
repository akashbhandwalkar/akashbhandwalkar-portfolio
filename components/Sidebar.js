
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

    const expertises = ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'ReactJS', 'NodeJS', 'MySQL', , 'JAVA'];
    return (
      <div className="sidebar-wrapper">
          <div className="profile-pic-wrapper">
          </div>
          <div>
            <h2 className="name">Akash Bhandwalkar</h2>
          </div>
          <div className="position">
            Lead software engineer at Clairvoyant an EXL company
          </div>
          <div className='expertise-container'>
          {
              expertises.map((expertise) => {
                return <div className='exprtise'> {expertise} </div>;
              })
            }
          </div>

          <ul className="navbar">
            <li className="nav-item donate"> <a target="_blank" href="https://www.buymeacoffee.com/akash19"> Donate </a> </li>
          </ul>
        </div>
    )
  }
  