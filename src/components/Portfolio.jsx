import React from 'react'
import piic from "../../src/assets/Proj.png"
import pic1 from "../../src/assets/proj2.png"
import pic2 from "../../src/assets/proj3.png"
import pic3 from "../../src/assets/proj4.png"

function Portfolio() {
  const cardItems=[
    {
      id:1,
      logo:piic,
      name:"Survey Form"
    },
    {
      id:2,
      logo:pic1,
      name:"Basic Portfolio"
    },
    {
      id:3,
      logo:pic2,
      name:"JS Documentation"
    },
    {
      id:4,
      logo:pic3,
      name:"Trombones Website"
    },
    {
      id:5,
      logo:piic,
      name:"Survey Form"
    },
    {
      id:6,
      logo:pic1,
      name:"Basic Portfolio"
    },
    {
      id:7,
      logo:pic2,
      name:"JS Documentation"
    },
    {
      id:8,
      logo:pic3,
      name:"Trombones Website"
    },
  ]
  return (
    <>
    <div name="Portfolio" className='max-w-screen-2xl container mx-auto md:px-20 mt-32'>
      <div>
        <h1 className='bg-gradient-to-r from-navcol to-navcoll font-bold text-xl box-content p-4 border-4 text-center md:py-5 tracking-widest'>Portfolio</h1>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-5 my-5'>{
          cardItems.map(({id,logo,name}) => (
            <div className='md:w-[250px] md:h-[250px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300' key={id}>
              <img src={logo} className='md:w-[150px] md:h-[150px] w-full h-[120px] md:mx-12 p-1 md:rounded-full border-[2px]'/>
              <div className='font-bold px-4 text-center'>{name}</div>
              <div className='md:px-6 px-24 py-4 space-x-2 md:justify-around'>
                <a href="https://codepen.io/saurabh-tiwari-the-lessful/full/NWZjpwZ" target='_blank'><button  className='bg-blue-500 hover:bg-gray-700 text-black hover:text-white font-bold px-2 py-2 rounded'>View</button></a>
                <a href="https://codepen.io/saurabh-tiwari-the-lessful/pen/NWZjpwZ" target='_blank'><button className='bg-orange-400 hover:bg-orange-800 text-black hover:text-white font-bold px-2 py-2 rounded'>Source Code</button></a>
              </div>
            </div>
          ))
          }
        </div>
        </div>
    </div>
    <hr className='mx-14 my-10 md:mx-36'  />
    </>
  )
}

export default Portfolio
