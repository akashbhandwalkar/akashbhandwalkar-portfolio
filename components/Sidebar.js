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
            <li className="nav-item"> Articles </li>
            <li className="nav-item"> Projects </li>
            <li className="nav-item"> Games </li>
            <li className="nav-item"> CSS Art </li>
            <li className="nav-item"> Drafts / Learnings </li>
          </ul>
        </div>
    )
  }
  