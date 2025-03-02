import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import pic from "../../src/assets/mypic.jpg"
import resume from "../../src/assets/resume.pdf"

function Home() {
  return (
    <>
      <div name="Home" className='bg-[url("/src/assets/HOMEIMG.jpg")] bg-cover bg-no-repeat py-4'>
        <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
          <div className='flex flex-col md:flex-row'>
            {/* Left Column */}
            <div className='md:w-1/2 mt-5 md:mt-24 space-y-2 order-2 md:order-1'>
              <span className='text-white'>Welcome In My Feed</span>
              <div className='flex space-x-5 text-2xl md:text-4xl'>
                <h1 className='text-white'>Hello, I'm a</h1>
                <ReactTyped
                  className='text-red-600 md:text-red-950 font-bold'
                  strings={["Programmer", "Coder", "Developer"]}
                  typeSpeed={40}
                  backSpeed={50}
                  loop={true}
                />
              </div>
              <p className='text-sm md:text-md text-white text-justify mt-4'>
                Hello! My Name is <span className='font-semibold'>Saurabh Tiwari</span>. 
                I am a web developer currently working in frontend technologies and recently graduated from Jaypee University of Engineering and Technology in February 2020.
                I really enjoy solving problems as well as making things pretty and easy to use. 
                I can't stop learning new things; the more, the better.
              </p>

              {/* Social Media Icons */}
              <div className='space-y-2 mt-8'>
                <h4 className='font-bold text-center text-white'>Available On</h4>
                <ul className='flex space-x-5 justify-center pb-5'>
                  <li><a href="https://www.linkedin.com/in/saurabh-tiwari-b617b8150/"><FaLinkedin className='text-2xl text-white cursor-pointer hover:scale-110 duration-200 rounded-full' /></a></li>
                  <li><a href="https://github.com/saurabhtiw24"><FaGithub className='text-2xl text-white cursor-pointer hover:scale-110 duration-200 rounded-full' /></a></li>
                  <li><a href="https://t.me/ST204"><FaTelegramPlane className='text-2xl text-white cursor-pointer hover:scale-110 duration-200 rounded-full' /></a></li>
                  <li><a href="https://www.instagram.com/tiwsaur_234/"><FaInstagram className='text-2xl text-white cursor-pointer hover:scale-110 duration-200 rounded-full' /></a></li>
                </ul>
              </div>
            </div>

            {/* Right Column (Profile Picture & Resume Button) */}
            <div className='md:w-1/2 md:ml-48 md:mt-16 mt-8 order-1'>
              <img src={pic} alt="Saurabh Tiwari Profile" className='rounded-full md:w-[350px] md:h-[350px] mx-auto' />
              <a href={resume} download='resume'>
                <button className="bg-white hover:bg-stone-700 hover:text-white text-stone-700 font-bold md:mx-36 mx-24 md:my-10 my-4 py-2 px-4 rounded inline-flex items-center transition duration-300">
                  <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                  <span>Download Resume</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
