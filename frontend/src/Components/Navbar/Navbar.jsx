// This page is for the Navbar
import './Navbar.css'


import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';

const Navbar = () => {

  return (
    <div className='navbar'>
        {/* navbar logo */}
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>Multimart</p>
        </div>

        {/* navbar search bar */}
        <div className='nav-search'>
            <input type="text" placeholder="Search products..." />
            <button>Search</button>
        </div>

        {/* login and cart button  */}
        <div className='nav-login-cart'>
            <button>Login</button>
            <img src={cart_icon} alt="" />
            <div className='nav-cart-count'>0</div>
        </div>
    </div>
  )
}

export default Navbar