import React from 'react';
import CountUp from 'react-countup';



const Skills = () => {
  return (
    <section id='skills'>
    <div className='container lg:pt-5 '>
        <div className='text-center '>
    <h1 className='text-headingColor font-[800] text-[2.4rem] mb-10'>Personal Skills</h1>
    </div>



    <div className="flex justify-center">

      <div className="w-80 h-20 bg-primaryColor mr-4 flex flex-col justify-start items-center rounded-lg">
        <h2 className='text-white font-[700] mb-0 group-hover:text-white group-hover:font-[200] '>C</h2>
        <h2 className='text-white font-[700] text-[32px] mb-8'>
                <CountUp start={0} end={80} duration={2} suffix='%' />
              </h2>
      </div>

      <div className="w-80 h-20 bg-primaryColor mr-4 flex flex-col justify-start items-center rounded-lg">
        <h2 className='text-white font-[700] mb-0 group-hover:text-white group-hover:font-[200] '>HTML & CSS</h2>
        <h2 className='text-white font-[700] text-[32px] mb-8'>
                <CountUp start={0} end={95} duration={2} suffix='%' />
              </h2>
      </div>

      <div className="w-80 h-20 bg-primaryColor mr-4 flex flex-col justify-start items-center rounded-lg">
        <h2 className='text-white font-[700] mb-0 group-hover:text-white group-hover:font-[200] '>Java Script</h2>
        <h2 className='text-white font-[700] text-[32px] mb-8'>
                <CountUp start={0} end={78} duration={2} suffix='%' />
              </h2>
      </div>

    </div>
  
    <div className="flex justify-center mt-10">
    
      <div className="w-80 h-20 bg-primaryColor mr-4 flex flex-col justify-start items-center rounded-lg">
        <h2 className='text-white font-[700] mb-0 group-hover:text-white group-hover:font-[200] '>React</h2>
        <h2 className='text-white font-[700] text-[32px] mb-8'>
                <CountUp start={0} end={93} duration={2} suffix='%' />
              </h2>
      </div>

      <div className="w-80 h-20 bg-primaryColor mr-4 flex flex-col justify-start items-center rounded-lg">
        <h2 className='text-white font-[700] mb-0 group-hover:text-white group-hover:font-[200] '>Reactnative</h2>
        <h2 className='text-white font-[700] text-[32px] mb-8'>
                <CountUp start={0} end={90} duration={2} suffix='%' />
              </h2>
      </div>

      <div className="w-80 h-20 bg-primaryColor mr-4 flex flex-col justify-start items-center rounded-lg">
        <h2 className='text-white font-[700] mb-0 group-hover:text-white group-hover:font-[200] '>Mongodb</h2>
        <h2 className='text-white font-[700] text-[32px] mb-8'>
                <CountUp start={0} end={80} duration={2} suffix='%' />
              </h2>
      </div>

    </div>

    <div className="flex justify-center mt-10">

      <div className="w-80 h-20 bg-primaryColor mr-4 flex flex-col justify-start items-center rounded-lg">
        <h2 className='text-white font-[700] mb-0 group-hover:text-white group-hover:font-[200] '>Mysql</h2>
        <h2 className='text-white font-[700] text-[32px] mb-8'>
                <CountUp start={0} end={65} duration={2} suffix='%' />
              </h2>
      </div>

      <div className="w-80 h-20 bg-primaryColor mr-4 flex flex-col justify-start items-center rounded-lg">
        <h2 className='text-white font-[700] mb-0 group-hover:text-white group-hover:font-[200] '>NodeJs</h2>
        <h2 className='text-white font-[700] text-[32px] mb-8'>
                <CountUp start={0} end={85} duration={2} suffix='%' />
              </h2>
      </div>

      <div className="w-80 h-20 bg-primaryColor mr-4 flex flex-col justify-start items-center rounded-lg">
        <h2 className='text-white font-[700] mb-0 group-hover:text-white group-hover:font-[200] '>Java</h2>
        <h2 className='text-white font-[700] text-[32px] mb-8'>
                <CountUp start={0} end={70} duration={2} suffix='%' />
              </h2>
      </div>

    </div>

    {/* <Card/> */}


    </div>
    </section>
  )
}

export default Skills
