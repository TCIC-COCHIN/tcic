import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/images/next-icon.png'
import back_icon from '../../assets/images/back-icon.png'
import user_1 from '../../assets/images/defaultperson.png'

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
                <h3>Radhika Nair</h3>
                <span>⭐⭐⭐⭐⭐</span>
            </div>
            </div>
            <p>TCIC is a hub of diverse education and vibrant culture. The range of courses they offer, from IT and management is truly impressive. It caters to a wide spectrum of academic interests and career aspirations</p>
        </div>
    </li>
    <li>
        <div className='slide'>
            <div className='user-info'>
                <img src={user_1} alt="" />
            <div>
                <h3>Jona Peter</h3>
                <span>⭐⭐⭐⭐⭐</span>
            </div>
            </div>
            <p>Institute with a good professional technical course.High experienced and talented faculty members and great placement records. Best option for those who looks for career excellence</p>
        </div>
    </li>
    <li>
        <div className='slide'>
            <div className='user-info'>
                <img src={user_1} alt="" />
            <div>
                <h3>Dennis Sunny</h3>
                <span>⭐⭐⭐⭐⭐</span>
            </div>
            </div>
            <p>Good teaching faculties and giving better opportunities to the students for their career. well maintained classrooms and infrastructure facilities.</p>
        </div>
    </li><li>
        <div className='slide'>
            <div className='user-info'>
                <img src={user_1} alt="" />
            <div>
                <h3>Nithin Dx</h3>
                <span>⭐⭐⭐⭐⭐</span>
            </div>
            </div>
            <p>The campus rocks! Trust me, it's difficult to find a better campus. It's a great place to study at but the rules are quite tight here. If you're okay with strict rules and if you wanna join an awesome Institute with tons of events and functions, look no further.</p>
        </div>
    </li>

</ul>
</div>
    </div>
  )
}

export default Testimonials