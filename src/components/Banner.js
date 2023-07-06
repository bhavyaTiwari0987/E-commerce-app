import React, { useState } from 'react'
import {HiArrowRight, HiArrowLeft } from 'react-icons/hi'

const Banner = () => {
    const [currentSlide , setCurrentSlide] = useState(0);

    const data = [
        "https://img.freepik.com/free-psd/horizontal-banner-template-big-sale-with-woman-shopping-bags_23-2148786755.jpg?w=2000",

        "https://st2.depositphotos.com/5547208/8113/v/950/depositphotos_81139896-stock-illustration-online-shopping-banner.jpg",
        "https://i.pinimg.com/originals/ed/cd/32/edcd32b829a5c6e614a6d6383c562742.jpg",
        "https://img.freepik.com/premium-psd/banner-template-online-fashion-sale_23-2148585403.jpg",
    ]
    const prevSlide = ()=> {
        setCurrentSlide(currentSlide === 0 ? 3: (prev) => prev-1)
    }
    const nextSlide = ()=> {
        setCurrentSlide(currentSlide === 3 ? 0: (prev) => prev+1)
    }
  return (
    <div className='w-full h-auto overflow-x-hidden'>
        <div className='w-screen h-[650px] relative'>
            <div style={{transform: `translateX(-${currentSlide * 100}vw)`}} className='w-[400vw] h-full flex transition-transform duration-1000'>
                <img className='w-screen h-full object-cover' src={data[0]} alt="ImgOne" loading='Priority'/>
                <img className='w-screen h-full object-cover' src={data[1]} alt="ImgOne" loading='Priority'/>
                <img className='w-screen h-full object-cover' src={data[2]} alt="ImgOne" loading='Priority'/>
                <img className='w-screen h-full object-cover' src={data[3]} alt="ImgOne" loading='Priority'/>
            </div>
            <div className='absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44'>
                <div onClick={prevSlide} className='w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300'>
                    <HiArrowLeft/>
                </div>
                <div onClick={nextSlide} className='w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300'>
                    <HiArrowRight/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner