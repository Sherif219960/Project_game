import './index.css'
import logo from '../../assets/images/logo.png'
import proheader from '../../assets/images/profile-header.jpg'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Browse</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Details</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Streams</a>
            </li>
            <li className="nav-item profile">
              <a className="nav-link" href="#">Porfile</a>
              <img src={proheader} alt="fight" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header