import React from 'react'
import piic from "../../src/assets/Proj.png"
import pic1 from "../../src/assets/proj2.png"
import pic2 from "../../src/assets/proj3.png"
import pic3 from "../../src/assets/proj4.png"

function Portfolio() {
  return (
    <>
      <div name="Portfolio" className='max-w-screen-2xl container mx-auto md:px-20 mt-32'>
        <div>
          <h1 className='bg-gradient-to-r from-navcol to-navcoll font-bold text-xl box-content p-4 border-4 text-center md:py-5 tracking-widest'>Portfolio</h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 my-5'>
            {/* First project */}
            <div className='md:w-[250px] md:h-[250px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300'>
              <img src={piic} alt="Survey Form Project" className='md:w-[150px] md:h-[150px] w-full h-[120px] md:mx-12 p-1 md:rounded-full border-[2px]' />
              <div className='font-bold px-4 text-center'>Survey Form</div>
              <div className='md:px-6 px-24 py-4 space-x-2 md:justify-around'>
                <a href="https://codepen.io/saurabh-tiwari-the-lessful/full/NWZjpwZ" target='_blank' rel="noopener noreferrer">
                  <button className='bg-blue-500 hover:bg-gray-700 text-black hover:text-white font-bold px-2 py-2 rounded'>View</button>
                </a>
                <a href="https://codepen.io/saurabh-tiwari-the-lessful/pen/NWZjpwZ" target='_blank' rel="noopener noreferrer">
                  <button className='bg-orange-400 hover:bg-orange-800 text-black hover:text-white font-bold px-2 py-2 rounded'>Source Code</button>
                </a>
              </div>
            </div>

            {/* Second project */}
            <div className='md:w-[250px] md:h-[250px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300'>
              <img src={pic1} alt="Basic Portfolio Project" className='md:w-[150px] md:h-[150px] w-full h-[120px] md:mx-12 p-1 md:rounded-full border-[2px]' />
              <div className='font-bold px-4 text-center'>Basic Portfolio</div>
              <div className='md:px-6 px-24 py-4 space-x-2 md:justify-around'>
                <a href="https://codepen.io/saurabh-tiwari-the-lessful/full/gOQpZwR" target='_blank' rel="noopener noreferrer">
                  <button className='bg-blue-500 hover:bg-gray-700 text-black hover:text-white font-bold px-2 py-2 rounded'>View</button>
                </a>
                <a href="https://codepen.io/saurabh-tiwari-the-lessful/pen/gOQpZwR" target='_blank' rel="noopener noreferrer">
                  <button className='bg-orange-400 hover:bg-orange-800 text-black hover:text-white font-bold px-2 py-2 rounded'>Source Code</button>
                </a>
              </div>
            </div>

            {/* Third project */}
            <div className='md:w-[250px] md:h-[250px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300'>
              <img src={pic2} alt="JS Documentation Project" className='md:w-[150px] md:h-[150px] w-full h-[120px] md:mx-12 p-1 md:rounded-full border-[2px]' />
              <div className='font-bold px-4 text-center'>JS Documentation</div>
              <div className='md:px-6 px-24 py-4 space-x-2 md:justify-around'>
                <a href="https://codepen.io/saurabh-tiwari-the-lessful/full/XWxPROw" target='_blank' rel="noopener noreferrer">
                  <button className='bg-blue-500 hover:bg-gray-700 text-black hover:text-white font-bold px-2 py-2 rounded'>View</button>
                </a>
                <a href="https://codepen.io/saurabh-tiwari-the-lessful/pen/XWxPROw" target='_blank' rel="noopener noreferrer">
                  <button className='bg-orange-400 hover:bg-orange-800 text-black hover:text-white font-bold px-2 py-2 rounded'>Source Code</button>
                </a>
              </div>
            </div>

            {/* Fourth project */}
            <div className='md:w-[250px] md:h-[250px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300'>
              <img src={pic3} alt="TromBones Website Project" className='md:w-[150px] md:h-[150px] w-full h-[120px] md:mx-12 p-1 md:rounded-full border-[2px]' />
              <div className='font-bold px-4 text-center'>TromBones Website</div>
              <div className='md:px-6 px-24 py-4 space-x-2 md:justify-around'>
                <a href="https://codepen.io/saurabh-tiwari-the-lessful/full/OJydRjM" target='_blank' rel="noopener noreferrer">
                  <button className='bg-blue-500 hover:bg-gray-700 text-black hover:text-white font-bold px-2 py-2 rounded'>View</button>
                </a>
                <a href="https://codepen.io/saurabh-tiwari-the-lessful/pen/OJydRjM" target='_blank' rel="noopener noreferrer">
                  <button className='bg-orange-400 hover:bg-orange-800 text-black hover:text-white font-bold px-2 py-2 rounded'>Source Code</button>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
      <hr className='mx-14 md:mx-36 mt-20' />
    </>
  )
}

export default Portfolio;
