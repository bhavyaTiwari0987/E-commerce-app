import React from 'react'
import CartItem from '../components/CartItem';
import { UseSelector, useSelector } from 'react-redux';

const Cart = () => {
  const proeuctData = useSelector((state) => state.bazar.proeuctData);
  return (
    <>
    <div>
      <img className='w-full h-60 object-cover' src="https://media.istockphoto.com/id/1182956407/photo/abstract-polygonal-blue-background.webp?b=1&s=170667a&w=0&k=20&c=o3e9BUv9-5keT-8xS16Ctu6qIDLIOC4UkU1GqTLOtkY=" alt="cart-background"></img>
    </div>
    <div className='max-w-screen-xl mx-auto p-20 flex'>
      <CartItem/>
      <div className='w-1/3 bg-[#fafafa] py-6 px-4'>
        <div className='flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6'>
          <h2 className='text-2xl font-medium'>cart totals</h2>
          <p className='flex items-center gap-4 text-base'>
            Subtotal{" "}
            <span className='font-titleFont font-bold text-lg'>
              $200
            </span>
          </p>
          <p className='flex items-start gap-4 text-base'>
            Shipping{" "}
            <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa.
            </span>
          </p>
        </div>
        <p className='font-titleFont font-semibold flex justify-between mt-6'>
          {" "}
          Total <span className='text-xl font-bold'>$200</span>
        </p>
        <button className='text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-3'>proceed to checkout</button>
      </div>
    </div>
    </>
  )
}

export default Cart