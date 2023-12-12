import React from 'react'
import './Hero.css'
import footer from '../Assets/footer.jpg'
import all_product from '../Assets/all-product'

const Hero = () => {
  return (
<div className='abc' >
    <div className='hero' >
        <div className="left">
        <h1>Don't wait, track it.</h1>
        <p>Imagine a world where waiting at bus stops becomes a thing of the past. Our user-friendly platform provides real-time bus arrival information and personalized notifications, helping you navigate your city with ease. Whether you're a daily commuter or a casual rider, our bus tracking and management system takes the stress out of your journey.</p>
       <button>EXplore MORE</button>
        </div>
        <div className="right">
            <div className="form">
                <form action="">
{/* 
                        {all_product.map((item) => (
                            <div>
                                <select name="" id="">
                                  <option value={item.end_point}>
                                    op
                                  </option>
                                </select>
                            </div>
                        ))} */}

                    <input type="dropdown"  placeholder='from' />
                    <input type="text" placeholder='to' />
                    <p>or</p>
                    <input type="text" placeholder='Bus No' />
                    <button className='btn' >Search</button>
                </form>
            </div>
            <img src={footer} alt="" />
        </div>
        </div>
        <div className="footer"></div>
    </div>
  )
}

export default Hero
