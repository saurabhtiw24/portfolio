import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <>
    <footer className='py-12'>
        <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-32'>
            <div>
                <ul className='flex space-x-5 justify-center pb-5'> 
                    <li className='text-2xl cursor-pointer hover:scale-110 duration-300 rounded-full'><a href="https://www.linkedin.com/in/saurabh-tiwari-b617b8150/"><FaLinkedin /></a></li>
                    <li className='text-2xl cursor-pointer hover:scale-110 duration-300 rounded-full'><a href="https://github.com/saurabhtiw24"><FaGithub /></a></li>
                    <li className='text-2xl cursor-pointer hover:scale-110 duration-300 rounded-full'><a href="https://t.me/ST204"><FaTelegramPlane /></a></li>
                    <li className='text-2xl cursor-pointer hover:scale-110 duration-300 rounded-full'><a href="https://www.instagram.com/tiwsaur_234/"><FaInstagram /></a></li>
                </ul>
                <div className='border-t pt-5 mx-16 md:mx-[450px]'>
                </div>
                <p className='text-center text-sm'>&copy; 2025 MyTerritory. All rights reserved</p>
                <p className='text-center text-sm'>Built and Deployed by Saurabh Tiwari</p>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer
