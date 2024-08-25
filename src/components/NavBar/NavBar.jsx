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
            <li><i class="fa-solid fa-house-user"></i>Home</li>
            <li><i class="fa-solid fa-circle-info"></i>About</li>
            <li><i class="fa-solid fa-briefcase"></i>Service</li>
            <li><i class="fa-solid fa-address-book"></i>Contact</li>
          </ul>
          <button>Log in</button>
        </div>
        <button className='bars' onClick={showMenu}><i class="fas fa-bars"></i></button>
      </nav>
      <div className="nav-menu">
      <ul>
            <li><i class="fa-solid fa-house-user"></i>Home</li>
            <li><i class="fa-solid fa-circle-info"></i>About</li>
            <li><i class="fa-solid fa-briefcase"></i>Service</li>
            <li><i class="fa-solid fa-address-book"></i>Contact</li>
          </ul>
          <button>Log in</button>
      </div>
    </>
  )
}

export default NavBar
