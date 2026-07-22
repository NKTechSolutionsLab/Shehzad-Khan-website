import React from 'react'
import { IoMdContact } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { BsGraphUpArrow } from "react-icons/bs";
function Key() {
    return (
        <>
            <div className='lg:flex gap-10 rounded-2xl border-[0.2px] m-2 lg:mx-20 md:mx-16 my-10 p-4 md:px-12 lg:px-16 border-gray-400'>
                <div className='flex items-center justify-center gap-5 m-5 lg:m-0'>
                    <IoMdContact className='text-4xl md:text-5xl lg:text-6xl' />
                    <div>
                        <h2 className='heading-primary text-[#1F3D2E] text-xl my-2'>1:1 Coaching</h2>
                        <p className='text-body'>Personal Guidance tailored to your goals</p>
                    </div>
                </div>
                <hr />
                <div className='lg:h-26 lg:w-[0.5px] lg:bg-[#1F3D2E] lg:mt-5 '>.</div>
                <div className='flex items-center md:justify-center gap-5 m-5 my-8 lg:m-0'>
                    <MdDashboard className='text-4xl md:text-5xl lg:text-6xl' />
                    <div>
                        <h2 className='heading-primary text-[#1F3D2E] text-xl my-2'>Proven Strategies</h2>
                        <p className='text-body'>Actionable framework for results</p>
                    </div>
                </div>
                <hr />
                <div className='lg:h-26 lg:w-[0.5px] lg:bg-[#1F3D2E] lg:mt-5 lg:m-0'>.</div>
                <div className='flex items-center justify-center gap-5 m-5'>
                    <BsGraphUpArrow className='text-3xl md:text-4xl lg:text-5xl' />
                    <div>
                        <h2 className='heading-primary text-[#1F3D2E] text-xl my-2'>Lasting Growth</h2>
                        <p className='text-body'>Build  habits that create long-term impact</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Key
