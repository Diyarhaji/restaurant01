import React from 'react';
import images from '../../constants/images';
import {SubHeading} from '../../components'
import './Header.css';

const Header = () => (
<div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title="Chase the new flaver" />
      <h1 className='app__header-h1'>The Key to Fine Dining</h1>
      <p className='p__opensans' style={{margin:'2rem 0'}}>sit tellus lobortis sed senectus vivamus molestie. Condimentum volupat morbi facilisis quam scelerisque sapien . Et penatibuse aliquam amet tellus.</p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.welcome}/>
      </div>
  </div>
);

export default Header;
