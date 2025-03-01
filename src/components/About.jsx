import React, { useState, useEffect } from 'react'
import CircularProgressBar from "./CircularProgressBar";

function About() {
  const [percentageHTML, setPercentageHTML] = useState(0);
  const [percentageCSS, setPercentageCSS] = useState(0);
  const [percentageJS, setPercentageJS] = useState(0);
  const [percentageReactJS, setPercentageReactJS] = useState(0);
  const [percentageSQL, setPercentageSQL] = useState(0);
  const [percentageMongoDB, setPercentageMongoDB] = useState(0);
  const [percentagePostgreSQL, setPercentagePostgreSQL] = useState(0);
  const [percentageBootstrap, setPercentageBootstrap] = useState(0);
  const [percentageRedux, setPercentageRedux] = useState(0);
  const [percentageGit, setPercentageGit] = useState(0);

  useEffect(() => {
    // Simulate animation by gradually increasing percentage
    const interval = setInterval(() => {
      setPercentageHTML((prev) => (prev < 100 ? prev + 1 : 100));
      setPercentageCSS((prev) => (prev < 100 ? prev + 1 : 100));
      setPercentageJS((prev) => (prev < 100 ? prev + 1 : 100));
      setPercentageReactJS((prev) => (prev < 100 ? prev + 1 : 100));
      setPercentageSQL((prev) => (prev < 85 ? prev + 1 : 85));
      setPercentageMongoDB((prev) => (prev < 70 ? prev + 1 : 70));
      setPercentagePostgreSQL((prev) => (prev < 70 ? prev + 1 : 70));
      setPercentageBootstrap((prev) => (prev < 70 ? prev + 1 : 70));
      setPercentageRedux((prev) => (prev < 90 ? prev + 1 : 90));
      setPercentageGit((prev) => (prev < 100 ? prev + 1 : 100));
    }, 20); // Update every 20ms

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Simulate animation by gradually increasing percentage
    const interval = setInterval(() => {
      setPercentageReact((prev) => (prev < 90 ? prev + 1 : 90));
      setPercentageJS((prev) => (prev < 80 ? prev + 1 : 80));
      setPercentageCSS((prev) => (prev < 70 ? prev + 1 : 70));
      setPercentageNode((prev) => (prev < 85 ? prev + 1 : 85));
    }, 20); // Update every 20ms

    return () => clearInterval(interval);
  }, []);


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
        <div className='grid grid-cols-2 md:grid-cols-5 gap-7 my-5'>
        <div className="flex justify-center">
          <CircularProgressBar percentage={percentageHTML} skillName="HTML" />
        </div>
        <div className="flex justify-center">
          <CircularProgressBar percentage={percentageCSS} skillName="CSS" />
        </div>
        <div className="flex justify-center">
          <CircularProgressBar percentage={percentageJS} skillName="JS" />
        </div>
        <div className="flex justify-center">
          <CircularProgressBar percentage={percentageReactJS} skillName="ReactJS" />
        </div>
        <div className="flex justify-center">
          <CircularProgressBar percentage={percentageSQL} skillName="SQL" />
        </div>
        <div className="flex justify-center">
          <CircularProgressBar percentage={percentageMongoDB} skillName="MongoDB" />
        </div>
        <div className="flex justify-center">
          <CircularProgressBar percentage={percentagePostgreSQL} skillName="PostgreSQL" />
        </div>
        <div className="flex justify-center">
          <CircularProgressBar percentage={percentageBootstrap} skillName="Bootstrap" />
        </div>
        <div className="flex justify-center">
          <CircularProgressBar percentage={percentageRedux} skillName="Redux" />
        </div>
        <div className="flex justify-center">
          <CircularProgressBar percentage={percentageGit} skillName="Git" />
        </div>
        </div>
      </div>
    </div>
    <hr className='mx-14 md:mx-36 mt-20'  />
  </>
  )
}

export default About
