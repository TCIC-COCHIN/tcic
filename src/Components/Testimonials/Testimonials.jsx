import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/images/next-icon.png'
import back_icon from '../../assets/images/back-icon.png'
import user_1 from '../../assets/images/user-1.png'
import user_2 from '../../assets/images/user-2.png'
import user_3 from '../../assets/images/user-3.png'
import user_4 from '../../assets/images/user-4.png'
const Testimonials = () => {

    const slider = useRef();
    let tx = 0;


const slideForward = ()=>{
if(tx > -50){
    tx-=25;

}
slider.current.style.transform = `translateX(${tx}%)`
 
}
const slideBackward = ()=>{
    if(tx <0){
        tx+=25;
    
    }
    slider.current.style.transform = `translateX(${tx}%)`
}

  return (
    <div className='testimonials'>
<img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
<img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />
<div className='slider'>
<ul ref={slider}>
    <li>
        <div className='slide'>
            <div className='user-info'>
                <img src={user_1} alt="" />
            <div>
                <h3>Glinta George 1</h3>
                <span>Kochi</span>
            </div>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    </li>
    <li>
        <div className='slide'>
            <div className='user-info'>
                <img src={user_2} alt="" />
            <div>
                <h3>Glinta George 2</h3>
                <span>Kochi</span>
            </div>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    </li>
    <li>
        <div className='slide'>
            <div className='user-info'>
                <img src={user_3} alt="" />
            <div>
                <h3>Glinta George 3</h3>
                <span>Kochi</span>
            </div>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    </li><li>
        <div className='slide'>
            <div className='user-info'>
                <img src={user_4} alt="" />
            <div>
                <h3>Glinta George 4</h3>
                <span>Kochi</span>
            </div>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    </li>

</ul>
</div>
    </div>
  )
}

export default Testimonials