import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
    
     <div className=" header ">
    
    <nav className='d-flex '>
    
    
     <img className="logo mt-2"src="https://ww1.freelogovectors.net/wp-content/uploads/2023/01/myntra-logo-freelogovectors.net_.png" alt="logo" />
      <div className=' nav-item d-flex'>
        <NavLink className='navlink' to="/mens">Mens </NavLink>
        <NavLink className='navlink' to="/kids">kids </NavLink>
        <NavLink className='navlink' to="/womens">women </NavLink>
        <NavLink className='navlink' to="/beauty">beauty </NavLink>
        <NavLink className='navlink' to="/home & living">home&living</NavLink>
        </div>

    
     
     
     <div className='search-box w-50'>
        <i className="fa-solid fa-magnifying-glass myicon" style={{ color: "#a7abb7" }} />
      <input type="text" placeholder='search of product,brands and more' className='form-control mx-2 px-5 '/>
      </div>
      
      <div className="icon d-flex ms-auto">
     
     <i className="fa-regular fa-user " style={{ color: "#222222" }} ></i>
     <span className='fw-bold'>profile</span>
    
     
      <i className="fa-regular fa-heart " style={{ color: "#222323" }} />
      <span className='fw-bold'>wishlist </span>
    
    
      
  
   <i className="fa-solid fa-bag-shopping " style={{ color: "#000000" }} />
   <span className='fw-bold '>cart </span>
     

      </div>
      </nav>
      </div>
 







    </div>
  )
}

export default Navbar