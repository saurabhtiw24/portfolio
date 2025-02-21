import React from 'react'

function Experience() {
  return (
    <>
    <div name="Experience" className='max-w-screen-2xl container mx-auto md:px-20 my-24 md:my-32 space-x-5'>
        {/* <div className='flex space-y-10 md:space-y-0 md:space-x-16'> */}
        <h1 className='bg-gradient-to-r from-navcol to-navcoll font-bold text-xl box-content p-4 border-4 text-center md:py-5 tracking-widest'>WORK EXPERIENCE</h1>
        <ul className='text-justify'>
            <li className='font-extrabold font-["Times_New_Roman"] list-disc text-3xl md:text-4xl pt-16'>
                INFOSYS
            </li>
            <li className='italic'>
                (Frontend Engineer)
            </li>
            <li className='italic'>
                (Februray, 2020 - Present)
            </li>
            <li className='list-disc'>
                Develop end to end components for filtering items.
            </li>
            <li className='list-disc'>
                Designed and developed the frontend components for Home, Login and Dashboard.
            </li>
            <li className='list-disc'>
                Spearheaded a new feature for the application to enable checkout and a more accurate tracking system.
            </li>
            <li className='list-disc'>
                Active involvement in sprint planning and analyzing user requirements.
            </li>
        </ul>
    </div>
    <hr className='mx-14 md:mx-36'  />
    </>
  )
}

export default Experience
