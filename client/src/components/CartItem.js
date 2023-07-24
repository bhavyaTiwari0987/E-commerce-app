import { MdOutlineClose } from "react-icons/md";
import { useSelector } from "react-redux";
import { increaseQuantity, decreaseQuantity , deleteItem , resetCart } from "../redux/bazarSlice";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import {HiOutlineArrowLeft} from 'react-icons/hi';



const CartItem = () => {
  const dispatch = useDispatch();

  const productData = useSelector((state) => state.bazar.productData);

  return (
    <div className="w-2/3 pr-10">
      <div className="w-full flex">
        <h2 className="font-titleFont text-2xl">shopping cart</h2>
        
      </div>
      <div>
        {productData.map((item) => (
          <div
            key={item._id}
            className="flex items-center justify-between mt-6"
          >
            <div className="flex items-center gap-2">
              <MdOutlineClose onClick={() => 
                dispatch(
                  deleteItem({
                    _id: item._id
                    })
                    ) & toast.error(`${item.title} is deleted`)
                    } className="text-xl text-grey-600 hover:text-red-600 cursor-pointer duration-300" />
              <img
                className="w-20 h-20 object-cover"
                src={item.image}
                alt="prodictImg"
              ></img>
            </div>
            <h2 className="w-52">{item.title}</h2>
            <p className="w-10">{item.price}</p>
            <div className="w-52 flex items-center justify-between text-gray-500 gap-4 border p-3">
              <p className="text-sm">Quantity</p>
              <div className="flex items-center gap-4 text-sm font-semibold">
                <button
                  onClick={() => {
                    dispatch(decreaseQuantity({
                      _id: item._id
                    }))
                  }}
                  className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => {
                    dispatch(increaseQuantity({
                      _id: item._id
                    }))
                  
                  }}
                  className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  +
                </button>
              </div>
            </div>
            <p className="w-14">{item.quantity * item.price}</p>

          </div>
        ))}
      </div>
      <Link to="/">
        <button className="flex gap-1 justify-center items-center text-gray-400 hover:text-black duration-300 mt-24">
        <HiOutlineArrowLeft/>
        go shopping
        </button>
      </Link>
        
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
    </div>
  );
};

export default CartItem;
