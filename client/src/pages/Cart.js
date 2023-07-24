import React, { useEffect , useState } from 'react'
import CartItem from '../components/CartItem';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from "react-toastify";
import StripeCheckout from 'react-stripe-checkout';
// import axios from 'axios';


const Cart = () => {
  const productData = useSelector((state) => state.bazar.productData);
  const userInfo = useSelector((state) => state.bazar.userInfo);
  const [totalAmt , setTotalAmt] = useState("");
  const [payNow , setPayNow]= useState(false);
  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity;
      return price;
    })
    setTotalAmt(price.toFixed(2));
  }, [productData]);  

  const handleCheckout = () =>{
    if(userInfo){
      setPayNow(true);
      setTimeout(()=> {
        setPayNow(false);
      }, 1500)
    }else{
      toast.error("Please sign in to checkout!")
    }
  }

  // const payment = async(token) => {
  //   await axios.post("http://localhost:8000/pay" , {
  //     amount: totalAmt * 100,
  //     token: token
  //   });
  // }
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
              ${totalAmt}
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
          Total <span className='text-xl font-bold'>${totalAmt}</span>
        </p>
        <button onClick={handleCheckout} className='text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-3'>proceed to checkout</button>
        {payNow && 
        toast.success("Payment Successfull!")
        // <div className='w-full mt-6 flex items-center justify-center'>
        //   <StripeCheckout
        //     stripeKey= "pk_test_51NVzV3SAcJw4MTMwECAgb1ZIFH00MxDZMuix2eD9caqilhXBofZpFziX3WvgH3JTZjcXCPSQnZgC1pBq55zhknCF009U5NvStw"
        //     name= "Bazar Online Shopping"
        //     amount= {totalAmt * 100}
        //     label= "pay to bazar"
        //     description= {`your payment amount is ${totalAmt}`}
        //     email= {userInfo.email}
        //   />
        //   </div>
          }
      </div>
    </div>
    <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </>
  )
}

export default Cart