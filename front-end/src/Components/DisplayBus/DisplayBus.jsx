import React from 'react'
import all_product from '../Assets/all-product'

const DisplayBus = () => {
  return (
    <div>
        {all_product.map((item)=>(
            <div className="name">
                {item.bus_address}
                <img src={item.image} />
                {item.name}
                {item.start_point}
                {item.end_point}
            </div>
        ))}
    </div>
  )
}

export default DisplayBus
