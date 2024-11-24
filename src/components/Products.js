// "use client"
import React, { useEffect, useState } from "react";
import iconCart from '../images/icon-add-to-cart.svg';
import decrement from '../images/icon-decrement-quantity.svg'
import increment from '../images/icon-increment-quantity.svg'

const Products = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData.products || []); // الوصول إلى المصفوفة داخل المفتاح products
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const quantity = 0;
  return (
    <div className="w-full box-border">
      <h1 className="font-bold text-[28px] mb-5">Desserts</h1>
      <div className="flex flex-wrap w-full box-border md:flex-row xl:w-full" >
        {data.map((item, index) => (
          <div key={index} className="w-full mb-1 md:w-1/2 xl:w-1/3">
            <div className="w-full pr-5 pb-3">
              <div className=" relative mb-7">
                <div className={`rounded-[10px] overflow-hidden border border-[${quantity == 0 ? "var(--Rose-50)" : "var(--Red)"}]`}>
                  <img
                    className="w-full block"
                    src={item.image.desktop}
                    alt={item.name}
                  />
                </div>
                
                {/* add to cart start */}
                <div className={`w-40 h-10 px-4 flex items-center justify-center ${quantity == 0 ? "bg-[var(--Rose-50)]" : "bg-[var(--Red)]"} border rounded-[20px] border-[${quantity === 0 ? "var(--Rose-900)" : "var(--Red)"}] hover:border-[var(--Red)] cursor-pointer hover:text-[var(--Red)] transition-all absolute bottom-0 left-1/2 transform translate-x-[-50%] translate-y-[50%]`}>
                  {quantity === 0
                    ? 
                      <div className="flex gap-1 w-fit">
                        <img src={iconCart} /> Add to Cart
                      </div>
                    : 
                    <div div className="flex items-center justify-center w-full text-center relative">
                      <span className="w-4 h-4 rounded-[50%] flex items-center justify-center border border-[var(--Rose-50)] absolute left-0"><img src={decrement} alt="decrement" /></span>
                      <p className="text-[var(--Rose-50)]">0</p>
                      <span className="w-4 h-4 rounded-[50%] flex items-center justify-center border border-[var(--Rose-50)] absolute right-0"><img src={increment} alt="increment" /></span>
                    </div> }
                </div>
                {/* add to cart end */}
              </div>
              <p className="text-[var(--Rose-500)]">{item.category}</p>
              <p className="text-[16px]">{item.name}</p>
              <p className="text-[var(--Red)]">${item.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products