//Product Component
import React from 'react';

import one from "../assets/images/perfume1.png"
import two from "../assets/images/perfume2.png"
import three from "../assets/images/perfume3.png"

function Product()
    {
      return (         
        <div className="products">
          <div className="box">
            <img src={one} width="220" alt="One" />
            <p>"No elegance is possible without perfume. It is the unseen, unforgettable, ultimate accessory" ~ Coco Chanel</p>
          </div>
          <div className="box">
            <img src={two} width="220" alt="Two" />
            <p>"A fragrance is like a signature, so that even after a woman leaves the room, her fragrance should reveal she's been there." ~ Renta</p>
          </div>
          <div className="box">
            <img src={three} width="220" alt="Three" />
            <p>"The beauty of fragrance is that it speaks to your heart and hopefully someone else's." ~ Elizabeth Taylor</p>
          </div>
        </div>
      )      
}
export default Product