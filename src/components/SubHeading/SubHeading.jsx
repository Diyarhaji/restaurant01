import React from 'react';
import images from '../../constants/images';

const SubHeading = ({title}) => (
  <div >
    <p className='p__cormorant'>{title}</p>
    <img src={images.spoon} className='spoon__img'/>
  </div>
);

export default SubHeading;
