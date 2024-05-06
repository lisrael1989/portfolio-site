import { NavLink } from 'react-router-dom'

// import logoImg from '../assets/Img/litvak-logo.png'
// import { UserMsg } from './UserMsg.jsx'


export function AppHeader() {

  return (
    <header className="app-header main-layout flex space between">

      {/* <img className="logo-img" src={logoImg} /> */}

      <nav className="app-nav">
        <NavLink to="/" >Home</NavLink>
        <NavLink to="/about" >About</NavLink>
        {/* <NavLink to="/toy" >Toys</NavLink> */}
        {/* <NavLink title='Reviews' to="/review">Reviews</NavLink>
        <NavLink title='Dashboard' to="/dashboard"><i className="fa-solid fa-chart-line fa-lg"></i></NavLink> */}
      </nav>

      {/* <UserMsg /> */}

    </header>
  )
}
