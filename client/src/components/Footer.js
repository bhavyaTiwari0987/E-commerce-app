import React from "react";
import { ImGithub } from "react-icons/im";
import { darkLogo } from "../assets";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaHome,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { BsPaypal, BsPersonFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-black text-[#949494] py-20 font-titleFont">
      <div className="max-w-screen-xl max-auto grid grid-cols-4">
        {/* LogoIcon Starts */}
        <div className="flex flex-col gap-7">
          <img className="w-32 h-12" src={darkLogo} alt=""></img>
          <p className="text-white text-sm tracking-wide">&copy; ReactBD.com</p>
          <img
            className="w-52 h-16"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNtLVSINCsr8gv4qd5bN9LodlJpVP3hED45w&usqp=CAU"
            alt="paymentimage"
          ></img>
          <div className="flex gap-5 text-lg text-gray-400 ">
            <ImGithub className="hover:text-white duration-300 cursor-pointer" />
            <FaYoutube className="hover:text-white duration-300 cursor-pointer" />
            <FaFacebookF className="hover:text-white duration-300 cursor-pointer" />
            <FaTwitter className="hover:text-white duration-300 cursor-pointer" />
            <FaInstagram className="hover:text-white duration-300 cursor-pointer" />
            <FaHome className="hover:text-white duration-300 cursor-pointer" />
          </div>
        </div>
        {/* Locate Us Starts */}
        <div>
          <h2 className="text-2xl font-semibold text-white- mb-4">locate us</h2>
          <div className="text-base flex flex-col gap-2">
            <p>MBD, Ruwi, Muscat-Oman</p>
            <p>Mobile: 00256 1254698521</p>
            <p>Phone: 00256 9586547821</p>
            <p>e-mail: bazar@gmail.com</p>
          </div>
        </div>
        {/* Locate Us Ends */}
        {/* Profile Starts */}
        <div>
          <h2 className="text-2xl font-semibold text-white- mb-4">profile</h2>
          <div className="flex flex-col gap-2 text-base">
          <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
            <span>
              <BsPersonFill />
            </span>
            my account
          </p>
          <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
            <span>
              <BsPaypal />
            </span>
            checkout
          </p>
          <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
            <span>
              <FaHome />
            </span>
            order tracking
          </p>
          <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
            <span>
              <MdLocationOn />
            </span>
            help & support
          </p>
          </div>
        </div>
        {/* Profile Ends */}
        {/* Subscribe Starts */}
        <div className="flex flex-col justify-center">
            <input type="text" className="bg-transparent border px-4 py-2 text-sm" placeholder="e-mail"/>
            <button className="text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black">Subscribe</button>
        </div>
        {/* Subscribe Ends */}
      </div>
    </div>
  );
};

export default Footer;
