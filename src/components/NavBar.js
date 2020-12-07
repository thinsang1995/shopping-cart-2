import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return(
    <nav className='nav-wrapper'>
      <span className='nav-logo'><Link to='/'>SHOPPING</Link></span>
      <ul className='nav-menu'>
        <li><Link to='/'>Shop</Link></li>
        <li><Link to='/cart'>My Cart</Link></li>
        <li><Link to='/cart'><i className='fa fa-shopping-cart'></i></Link></li>
      </ul>
    </nav>
  )
}

export default Navbar