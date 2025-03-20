import React from 'react';
import images from '../../constants/images';
import {SubHeading} from '../../components'

import './Chef.css';

const Chef = () => (
  <div className='app__wrapper app__bg section__padding '>
    <div className='app__wrapper_img app__wrapper_img-reverse '>
      <img src={images.chef}/>
    </div>
    <div className='app__wrapper_info'>
      <SubHeading title="Chef's Word" />
      <h1 className='headtext__cormorant'>What we believe in</h1>
      <div className='app__chef-content'>
        <div className='app__chef-content-quote'>
          <img src={images.quote}/>
          <p className='p-quote'>Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .</p>
        </div>
        <p className='p-quote'>auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</p>

      </div>
      <div className='app__chef-sign'>
        <p className=''>Kevin Luo</p>
        <p className='p__opensans'>Chef & Founder</p>
        <img src={images.sign}/>

      </div>
    </div>
  </div>
);

export default Chef;
