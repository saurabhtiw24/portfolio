import React from 'react'
import sseventy from "../../src/assets/sseventy.png"
import snintey from "../../src/assets/snintey.png"
import shundred from "../../src/assets/shundred.png"

function About() {
  const cardItems=[
      {
        id:1,
        logo:shundred,
        name:"HTML"
      },
      {
        id:2,
        logo:shundred,
        name:"CSS"
      },
      {
        id:3,
        logo:shundred,
        name:"JS"
      },
      {
        id:4,
        logo:shundred,
        name:"ReactJS"
      },
      {
        id:5,
        logo:sseventy,
        name:"SQL"
      },
      {
        id:6,
        logo:sseventy,
        name:"MongoDB"
      },
      {
        id:7,
        logo:sseventy,
        name:"PostgreSQL"
      },
      {
        id:8,
        logo:shundred,
        name:"Bootstrap"
      },
      {
        id:9,
        logo:snintey,
        name:"Redux"
      },
      {
        id:9,
        logo:shundred,
        name:"Git"
      },
    ]
  return (
    <>
      <div name="About" className='max-w-screen-2xl container mx-auto md:px-20 my-24 md:my-24 space-x-5'>
        {/* <div className='flex space-y-10 md:space-y-0 md:space-x-16'> */}
        <h1 className='bg-gradient-to-r from-navcol to-navcoll font-bold text-xl box-content p-4 border-4 text-center md:py-5 tracking-widest'>EDUCATION</h1>
        <p className='font-extrabold font-["Times_New_Roman"] text-center text-3xl md:text-4xl pt-16 md:px-20'>Jaypee University Of Engineering & Technology</p>
      {/* </div> */}
      <div className='md:px-72 py-3'>
        <p className='text-center italic'>Bachelor's Degree, Computer Science</p>
        <p className='py-1 text-center italic'>Februray, 2020</p>
      </div>
    </div>
    <hr className='mx-14 md:mx-36'  />


      {/* Skill section */}
    <div className='max-w-screen-2xl container mx-auto md:px-20 mt-32'>
      <div>
      <h1 className='bg-gradient-to-r from-navcol to-navcoll font-bold text-xl box-content py-4 border-4 text-center md:py-5 tracking-widest'>SKILLS</h1>
        <div className='grid grid-cols-2 md:grid-cols-5 gap-7 my-5'>{
          cardItems.map(({id,logo,name}) => (
            <div className='flex flex-col items-center justify-center md:w-[200px] md:h-[200px] p-1' key={id}>
                <div className=''>{name}</div>
                <img src={logo} className='md:w-[150px] md:h-[150px] w-[150px] md:mx-16'/>
            </div>
          ))
          }
        </div>
        </div>
    </div>
    <hr className='mx-14 md:mx-36'  />
  </>
  )
}

export default About
