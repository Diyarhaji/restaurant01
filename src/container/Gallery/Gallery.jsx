import React from 'react';
import {BsInstagram, BsArrowLeftShort,BsArrowRightShort} from 'react-icons/bs'
import images from '../../constants/images';
import {SubHeading} from '../../components'
import './Gallery.css';

const galleryImg=[images.gallery01, images.gallery02, images.gallery03, images.gallery04]


const Gallery = () => {
    const scrollRef=React.useRef(null);
    const scroll=(direction)=>{
      const{current} =scrollRef;
      if(direction ==='left'){
        current.scrollLeft-= 300
      }else{
        current.scrollLeft += 300
      }
    }
  return(
  <div className='app__gallery flex__center'>
    <div className='app__gallery__content'>
      <SubHeading title='Instgram'/>
      <h1 className='headtext__cormorant'>Photo Gallery</h1>
      <p className='p__opensans' style={{color:'#AAA', marginTop:'2rem'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
      <button type='button' className='custom__button'>View More</button>
    </div>
    <div className='app__gallery-images'>
      <div className='app__gallery-images__content' ref={scrollRef}>
       {galleryImg.map((image,index)=>(
        <div className='app__gallery-images-card flex__center'key={`gallery_image-${index+1}`}> 
          <img src={image}/>
          <BsInstagram className='gallery__image-icon'/>
         </div>
       ))}

      </div>
      <div className='app__gallery-images__arrows' >
        <BsArrowLeftShort className='app__gallery-images__arrows-icon' onClick={()=>scroll('left')}/>
        <BsArrowRightShort className='app__gallery-images__arrows-icon' onClick={()=>scroll('right')}/>
      </div>
    </div>
  </div>
)

};

export default Gallery;
