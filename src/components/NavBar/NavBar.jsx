import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  const showMenu = () =>
  {
    const menu = document.querySelector('.nav-menu')
    menu.classList.toggle('active')
  }
  
  return (
    <>
      <nav>
        <h1 className="logo">Trippy</h1>
        <div className='items'>

          <ul>
            <li><Link to="/"><i class="fa-solid fa-house-user"></i>  Home</Link></li>
            <li><Link to="/About"><i class="fa-solid fa-circle-info"></i>  About</Link></li>
            <li><Link to="/Service"><i class="fa-solid fa-briefcase"></i>  Service</Link></li>
            <li><Link to="/Contact"><i class="fa-solid fa-address-book"></i>  Contact</Link></li>
          </ul>
            
          <button><Link to="login">Log in</Link></button>
          
        </div>
        <button className='bars' onClick={showMenu}><i class="fas fa-bars"></i></button>
      </nav>
      <div className="nav-menu">
        <ul>
          <li><Link to="/"><i class="fa-solid fa-house-user"></i>  Home</Link></li>
          <li><Link to="/About"><i class="fa-solid fa-circle-info"></i>  About</Link></li>
          <li><Link to="/Service"><i class="fa-solid fa-briefcase"></i>  Service</Link></li>
          <li><Link to="/Contact"><i class="fa-solid fa-address-book"></i>  Contact</Link></li>
        </ul>
          
        <button><Link to="login">Log in</Link></button>
    </div>
    </>
  )
}

export default NavBar
