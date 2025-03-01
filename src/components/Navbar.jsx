import React, { useState } from 'react'
import { TiThMenuOutline } from "react-icons/ti";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from 'react-scroll';

function Navbar() {
    const[menu,setMenu]=useState(true)
    const navItems = [
        {
            id: 1,
            text: "Home"
        },
        {
            id: 2,
            text: "About"
        },
        {
            id: 3,
            text: "Portfolio"
        },
        {
            id: 4,
            text: "Experience"
        },
        {
            id: 5,
            text: "Contact"
        }
    ]
  return (
    <>
    <div className='bg-gradient-to-r from-navcol to-navcoll max-w-full container mx-auto px-4 md:px-20 h-12 fixed top-0 left-0 z-20 right-0'>
        <div className='flex md:items-center md:justify-center justify-end items-center h-12'>
            {/* Desktop Navbar */}
            <div>
                <ul className='hidden items-center md:flex space-x-8'>
                {
                        navItems.map((item) => (
                            <li className="hover:scale-105 hover:text-white duration-200 cursor-pointer" key={item.id}>
                                <Link to={item.text}
                                smooth={true}
                                duration={500}
                                offset={-70}
                                activeClass='active'>
                                    {item.text}
                                </Link>
                                </li>
                    ))
                    }
                </ul>
            </div>
            <div className='md:hidden' onClick={()=>setMenu(!menu)}>{menu?<TiThMenuOutline className='size-6'/>:
            <IoCloseSharp className='size-6' />}</div>
        </div>
        {/* Mobile Navbar */}
        {
            !menu && (
                <div className='bg-gradient-to-r from-navcol to-navcoll'>
                <ul className='md:hidden flex flex-col h-screen items-center justify-center space-y-4 text-2xl'>
                    {
                        navItems.map((item) => (
                            <li className="hover:scale-125 duration-200 font-bold cursor-pointer" key={item.id}>
                                <Link onClick={()=>setMenu(!menu)}
                                to={item.text}
                                smooth={true}
                                duration={500}
                                offset={-70}
                                activeClass='active'>
                                    {item.text}
                                </Link>
                            </li>
                    ))
                    }
                </ul>
            </div>
            )}
    </div>
    </>
  )
}

export default Navbar
