import React from "react";
import all_product from "../Assets/all-product";
import "./Buses.css";
import { Link } from "react-router-dom";
import dot from "../Assets/dot.png";
import end from "../Assets/end.png";
import user from "../Assets/user.png";

const Buses = () => {
  return (
    <div>
    <div className="buses">
     
      <div className="bus-card">
        {all_product.map((item) => (
       <div className="box">
        
            <div className="upper">
              <p>BUS Number</p>
              <span>{item.bus_address}</span>
              <span>
                <Link to='/bus'>
                <img src={item.image} alt="" />
                </Link>
              </span>
            </div>
            <hr />
            <div className="mid">
              <div className="start">
                <span>
                <img src={dot} alt="" />
                </span>
                <span>{item.start_point}</span>
              </div>
              <div className="end">
                <span>
                  <img src={end} alt="" />
                </span>
                <span>{item.end_point}</span>
              </div>
            </div>
            <hr />
            <div className="lower">
              <span>
                <img src={user} alt="" />
              </span>
              <span>{item.name}</span>
            </div>
          </div>
          
        ))}
      </div>
      
    </div>
    </div>
  );
};

export default Buses;
