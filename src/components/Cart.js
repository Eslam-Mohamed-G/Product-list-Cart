import React from 'react';
import emptyCart from '../images/illustration-empty-cart.svg'

const Cart = () => {
  return (
    <div className='bg-[var(--Rose-50)] rounded-[10px] p-5'>
      <h1 className='text-[var(--Red)] font-bold text-[24px] mb-5'>Your Carts (0)</h1>
      <div className='m-auto w-2/3 flex flex-col items-center justify-center'>
        <img src={emptyCart} alt="emptyCart" />
        <p>Your added items will appear here</p>
      </div>
      
    </div>
  )
}

export default Cart