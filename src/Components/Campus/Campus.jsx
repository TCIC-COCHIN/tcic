import React from 'react'
import './Campus.css'
import gallery_1 from '../../assets/images/gm1.jpg'
import gallery_4 from '../../assets/images/g4.jpg'
import gallery_3 from '../../assets/images/gm3.jpg'

import white_arrow from '../../assets/images/white-arrow.png'
import { Link } from 'react-router-dom';

const Campus = () => {
  return (
    <div className='campus'>
<div className='gallery'>
<img src={gallery_1} alt="" />
<img src={gallery_4} alt="" />
<img src={gallery_3} alt="" />

</div>
<Link to="/galleryView" className="btn dark-btn">
        See more here <img src={white_arrow} alt="arrow" />
      </Link>
    </div>
  )
}

export default Campus