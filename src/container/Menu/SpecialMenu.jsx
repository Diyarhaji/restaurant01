import React from 'react';
import images from '../../constants/images';
import data from '../../constants/data';
import {SubHeading, MenuItem} from '../../components'

import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id='menu'>
    <div className='app__secialMenu-title'>
      <SubHeading title="Menu That Fits You Palatte"/>
      <h1 className='headtext__cormorant'>Today's Special</h1>

      <div className='app__specialMenu-grid'>
      <div className='app__specialMenu-menu'>
        <div className='app__specialMenu-menu_wine flex__center'>
          <p className='app__specialMenu-menu-header'>Wine & Beer</p>

          <div className='app__specialMenu-menu-item'>
            {data.wines.map((wine, index)=>
              <MenuItem key={wine.title +index} title={wine.title} price={wine.price} tags={wine.tags}/>
            )}
          </div>
        </div>
      </div>

      <div className='app__specialMenu-menu-img'>
        <img src={images.menu}/>
      </div>


      <div className='app__specialMenu-menu'>
        <div className='app__specialMenu-cocktails flex__center'>
          <p className='app__specialMenu-menu-header'>Cocktails</p>

          <div className='app__specialMenu-menu-item'>
            {data.cocktails.map((cocktail, index)=>
               <MenuItem key={cocktail.title +index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags}/>
            )}
          </div>
        </div>
      </div>

      </div>
     

    </div>


    <div style={{marginTop:"15px"}}>
      <button type='button' className='custom__button'>View More</button>
    </div>
  </div>
);

export default SpecialMenu;
