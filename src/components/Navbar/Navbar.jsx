import React, {useState} from 'react';
 import { GiHamburgerMenu } from 'react-icons/gi';
 import { MdOutlineRestaurantMenu } from 'react-icons/md';
import './Navbar.css';
import images from '../../constants/images';
const Navbar = () => {
  const[toggleMenu, setToggleMenu]= useState(false)

  return(
    <nav className='app__navbar'>
    <div className='app__navbar__logo'>
      <img src={images.logo}/>
    </div>
    <ul className='app__navbar__links'>
      <li className='p_opensans'><a href='#home'>Home</a></li>
      <li className='p_opensans'><a href='#about'>About</a></li>
      <li className='p_opensans'><a href='#menu'>Menu</a></li>
      <li className='p_opensans'><a href='#awards'>Awards</a></li>
      <li className='p_opensans'><a href='#contact'>Contact</a></li>
    </ul>
    <div className='app__navbar__login'>
      <a href='#login' className='p_opensans'>Log In /Register</a>
      <div></div>
      <a href='/' className='p_opensans'>Book Table</a>
    </div>
   
     <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu color="#fff" fontSize={30} onClick={()=>setToggleMenu(true)} />
          {toggleMenu &&(
              <div className='app__navbar-smallscreen_overlay flex_center Slide-bottom'>
              <MdOutlineRestaurantMenu  fontSize={27} className='overlay_close' onClick={()=>setToggleMenu(false)}/>
              <ul className='app__navba-smalscreen-links'>
              <li className='p_opensans'><a href='#home'>Home</a></li>
              <li className='p_opensans'><a href='#about'>About</a></li>
              <li className='p_opensans'><a href='#menu'>Menu</a></li>
              <li className='p_opensans'><a href='#awards'>Awards</a></li>
              <li className='p_opensans'><a href='#contact'>Contact</a></li>
            </ul>
            </div>
          )}
          
        
     </div>
   
  </nav >
  )
  
};

export default Navbar;
