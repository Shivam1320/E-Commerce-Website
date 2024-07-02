// This page is for the Navbar
import './Navbar.css'


import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <div className='navbar'>
        {/* navbar logo */}
        <div className="nav-logo">
        <Link to ='/home' ><img src={logo} alt="" /></Link>
        <Link to ='/home' style={{textDecoration: 'none'}}><p>jiomart</p></Link>
        </div>

        {/* navbar search bar */}
        <div className='nav-search'>
            <input type="text" placeholder="Search products..." />
            <button>Search</button>
        </div>

        {/* login and cart button  */}
        <div className='nav-login-cart'>
            <Link to ='/login'><button>Login</button></Link>
            <Link to ='/cart'><img src={cart_icon} alt="" /></Link>
            <div className='nav-cart-count'>0</div>
        </div>
    </div>
  )
}

export default Navbar