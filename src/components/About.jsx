import React, { useState, useEffect } from 'react'
import CircularProgressBar from "./CircularProgressBar";

function About() {
  // Skill percentages in state
  const [percentages, setPercentages] = useState({
    HTML: 0,
    CSS: 0,
    JS: 0,
    ReactJS: 0,
    SQL: 0,
    MongoDB: 0,
    PostgreSQL: 0,
    Bootstrap: 0,
    Redux: 0,
    Git: 0,
  });

  // Target skill proficiency percentages
  const targetPercentages = {
    HTML: 100,
    CSS: 100,
    JS: 100,
    ReactJS: 90,
    SQL: 85,
    MongoDB: 70,
    PostgreSQL: 70,
    Bootstrap: 70,
    Redux: 90,
    Git: 100,
  };

  // Effect to animate the skill percentages
  useEffect(() => {
    const interval = setInterval(() => {
      setPercentages((prevPercentages) => {
        const updatedPercentages = {};
        let allComplete = true;

        // Iterate through the skills and update the progress
        for (const skill in prevPercentages) {
          const target = targetPercentages[skill];
          const current = prevPercentages[skill];
          if (current < target) {
            updatedPercentages[skill] = current + 1;
            allComplete = false;
          } else {
            updatedPercentages[skill] = target;
          }
        }

        // If all skills are completed, stop the interval
        if (allComplete) clearInterval(interval);

        return { ...prevPercentages, ...updatedPercentages };
      });
    }, 20); // Update every 20ms

    return () => clearInterval(interval); // Cleanup the interval
  }, []);

  // font-extrabold font-["Times_New_Roman"] text-center text-3xl md:text-4xl pt-16 md:px-20
  return (
    <>
      <div name="About" className='max-w-screen-2xl container mx-auto md:px-20 my-24 space-y-10'>
  {/* Education Title */}
  <h1 className='bg-gradient-to-r from-navcol to-navcoll font-bold text-xl box-content p-4 border-4 text-center md:py-5 tracking-widest'>
    EDUCATION
  </h1>

  {/* University Name */}
  <p className='font-extrabold font-["Times_New_Roman"] text-center text-3xl md:text-4xl pt-16'>
    Jaypee University Of Engineering & Technology
  </p>

  {/* Degree Information */}
  <div className='md:px-72 py-3'>
    <p className='text-center italic text-xl'>
      Bachelor's Degree, Computer Science
    </p>
    <p className='py-1 text-center italic text-xl'>
      February, 2020
    </p>
  </div>

  {/* Divider */}
  <hr className='mx-14 md:mx-36' />
</div>


      {/* Skill section */}
    <div className='max-w-screen-2xl container mx-auto md:px-20 mt-32'>
      <div>
        <h1 className='bg-gradient-to-r from-navcol to-navcoll font-bold text-xl box-content py-4 border-4 text-center md:py-5 tracking-widest'>SKILLS</h1>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-5">
          {Object.keys(percentages).map((skill, index) => (
            <div key={index} className="flex justify-center">
              <CircularProgressBar percentage={percentages[skill]} skillName={skill} />
            </div>
          ))}
          </div>
        </div>
    </div>
    <hr className='mx-14 md:mx-36 mt-20'  />
  </>
  )
}

export default About
