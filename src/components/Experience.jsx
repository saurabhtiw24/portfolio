import React from 'react'

function Experience() {
  return (
    <>
      <div name="Experience" className='max-w-screen-2xl container mx-auto md:px-20 my-24 md:my-32'>
        {/* Title */}
        <h1 className='bg-gradient-to-r from-navcol to-navcoll font-bold text-xl box-content p-4 border-4 text-center md:py-5 tracking-widest'>
          WORK EXPERIENCE
        </h1>

        {/* Company Info */}
        <div className='mt-16'>
          <div className='flex flex-col md:flex-row md:items-center justify-between'>
            <div>
              <p className='font-extrabold font-serif text-3xl md:text-4xl'>
                INFOSYS
              </p>
              <p className='italic text-xl'>
                (Frontend Engineer)
              </p>
            </div>
            <div>
              <p className='italic text-xl'>
                (February 2020 - Present)
              </p>
            </div>
          </div>

          {/* Experience Bullet Points */}
          <ul className='list-disc pl-6 space-y-2 text-xl mt-6'>
            <li>Implemented a sophisticated transaction filtering mechanism using Finacle and PostgreSQL, optimizing Frontend processing with ReactJS
            and achieving a 25% improvement in system response times.</li>
            <li>Utilized Finacle for financial data processing and integration, allowing for efficient handling of banking information and services related to
            the project.</li>
            <li>Spearheaded a new feature for the application to connect with real time deduction</li>
            <li>Active involvement in sprint planning and analyzing user requirements.</li>
            <li>Developed scripting logic to automate tasks, error handling and streamlining the project's workflow.</li>
            <li>Also Used Finacle and scripting to generate com scripts.</li>
            <li>Perform EOD/BOD on all day transactions and tasks.</li>
            <li>Implemented advanced front-end functionality using JavaScript and React.js, including filtering, search functionality, and interactive sorting
            to enhance user experience.</li>
          </ul>
        </div>
      </div>
      
      {/* Divider */}
      <hr className='mx-14 md:mx-36 mt-8' />
    </>
  )
}

export default Experience
