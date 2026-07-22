import React from 'react'
import hero from '../img/hero.png'
import { GoArrowUpRight } from "react-icons/go";

function Hero() {
    return (
        <>
            <div className='md:flex justify-between items-center sm:gap-5 m-5 lg:my-10'>
                <div className='w-full lg:w-[45%] my-5  md:my-12  md:mx-5 lg:ml-16 lg:mr-0'>
                    <h2 className='text-lg md:text-xl lg:text-2xl text-body my-4 md:my-6 font-light'>Clarity.Focus.Growth</h2>
                    <div className='heading-primary my-4 md:my-6 text-4xl md:text-5xl lg:text-6xl text-[#1F3D2E]'>
                        <h1>Become the Leader</h1>
                        <h1>You Meant to Be</h1>
                    </div>
                    <h2 className='text-body my-4 md:my-6  font-light lg:text-xl'>Personalized coaching to help you lead with <br />confidence, clarity and purpose</h2>
                    <button className="inline-flex items-center gap-3 bg-[#1F3D2E] text-[#E9E4D6] px-8 py-4 rounded-xl font-medium text-lg hover:bg-[#173124] transition-all duration-300 shadow-lg cursor-pointer">

                Book a Discovery Call

                <GoArrowUpRight className="text-2xl" />

              </button>


                </div>
                <img src={hero} alt="" className='rounded-2xl md:w-[50%] lg:w-[45%] lg:mr-6 mix-blend-hard-light' />

            </div>
        </>
    )
}

export default Hero
