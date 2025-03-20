import React from 'react';
import {FiFacebook, FiTwitter, FiInstagram} from 'react-icons/fi'
import images from '../../constants/images';
import {SubHeading} from '../../components'
import {FooterOverlay,Newsletter} from '../../components'

import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />

    <div className='app__footer-link'>
      <div className='app__footer-link_contact'>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans '>Kurdistan- Dohuk </p>
        <p className='p__opensans '>+9647511978863 </p>
        <p className='p__opensans '>+9647511978863 </p>
      </div>

      <div className='app__footer-link_logo'>
        <img src={images.logo} />
        <p className='p__opensans '>"The best way to find yourself is to lose yourself in the service of others.” </p>
        <img src={images.spoon}  className='spoon__img ' style={{marginTop:15}}/>
        <div className='app__footer-link_icon'>
          <FiFacebook/>
          <FiTwitter/>
          <FiInstagram/>

        </div>
      </div>
      <div className='app__footer-link_work'>
      <h1 className='app__footer-headtext'>Working Hours</h1>
        <p className='p__opensans '>Monday-Friday:</p>
        <p className='p__opensans '>08:00 am -12:00 am</p>
        <p className='p__opensans '>Saturday-Sunday: </p>
        <p className='p__opensans '>07:00am -11:00 pm</p>
      </div>
    </div>

    <div className='app__footer-copyright'>
      <p className='p__opensans '>2025 All Right reserved </p>
    </div>
  </div>
);

export default Footer;
