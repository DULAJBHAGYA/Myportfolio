import React from 'react';
import frontendImg from '../../images/front-end.png';
import backendImg from '../../images/backend.png';
import uiImg from '../../images/design.png';
import appsImg from '../../images/apps.png';

const Services = () => {
  return (
    <section id='services'>
        <div className='container lg:pt-5 '>

        <div className='text-center'>
          <h2 className='text-headingColor font-[800] text-[2.4rem] mb-5'>What do I help</h2>
          <p className='lg:max-w-[600px] lg:mix-auto text-headingColor font-[500] text-[16px] leading-7 mx-auto'>
            I specialize in full-stack web development, leveraging my expertise in React.js, React Native, and Node.js
            to create robust and scalable web and mobile applications. With a strong command of the MERN (MongoDB, Express.js,
            React.js, Node.js) stack, I develop dynamic and responsive websites that deliver seamless user experiences. Whether
            it's building interactive user interfaces with React.js, creating cross-platform mobile apps using React Native, or
            designing efficient server-side applications with Node.js, I provide end-to-end development solutions. With a focus
            on clean code, performance optimization, and industry best practices, I help businesses achieve their digital objectives
            with modern and cutting-edge technologies.
          </p>
        </div>

        <div className='flex flex-col justify-center sm:py-12'>
  <div className='w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0'>
    <div className='relative text-gray-700 antialiased text-sm font-semibold'>

      {/*================= vertical line running through the middle ============*/}
      <div className='hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2  transform -translate-x-1/2 '></div>

      {/*================= left 1 card ============*/}
      <div className='mt-6 sm:mt-0 sm:mb-12'>
        <div className='flex items-center flex-col sm:flex-row'>
          <div className='flex justify-start w-full mx-auto items-center'>
            <div className='w-full sm:w-1/2 sm:pr-8'>
              <div data-aos='fade-right' data-aos-duration='1200' className='bg-white p-4 rounded shadow group
               hover:bg-primaryColor cursor-pointer ease-in duration-150'>
                <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl'>
                  Frontend Development
                </h3>
                <p className='text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7'>
                  I develop web applications using React.js, creating seamless user interfaces across platforms.
                </p>
              </div>
            </div>
          </div>

          <div className='rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 
          transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
            <figure>
              <img src={frontendImg} alt='' />
            </figure>
          </div>
        </div>
      </div>

      {/*================= right 2 card ============*/}
      <div className='mt-6 sm:mt-0 sm:mb-12'>
        <div className='flex items-center flex-col sm:flex-row'>
          <div className='flex justify-end w-full mx-auto items-center'>
            <div className='w-full sm:w-1/2 sm:pl-8'>
              <div data-aos='fade-left' data-aos-delay='50' data-aos-duration='1500' className='bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150'>
                <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl'>
                  Backend Development
                </h3>
                <p className='text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7'>
                  I specialize in backend development using Node.js, creating robust and scalable applications.
                </p>
              </div>
            </div>
          </div>

          <div className='rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
            <figure>
              <img src={backendImg} alt='' />
            </figure>
          </div>
        </div>
      </div>

      {/*================= left 2 card ============*/}
      <div className='mt-6 sm:mt-0 sm:mb-12'>
        <div className='flex items-center flex-col sm:flex-row'>
          <div className='flex justify-start w-full mx-auto items-center'>
            <div className='w-full sm:w-1/2 sm:pr-8'>
              <div data-aos='fade-right' data-aos-delay='100' data-aos-duration='1400' className='bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150'>
                <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl'>
                  UI/UX Design
                </h3>
                <p className='text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7'>
                I specialize in UI/UX design, creating engaging and intuitive digital experiences that prioritize user satisfaction.                </p>
              </div>
            </div>
          </div>

          <div className='rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
            <figure>
              <img src={uiImg} alt='' />
            </figure>
          </div>
        </div>
      </div>

      {/*================= right 2 card ============*/}
      <div className='mt-6 sm:mt-0 sm:mb-12'>
        <div className='flex items-center flex-col sm:flex-row'>
          <div className='flex justify-end w-full mx-auto items-center'>
            <div className='w-full sm:w-1/2 sm:pl-8'>
              <div data-aos='fade-left' data-aos-delay='150' data-aos-duration='1300' className='bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150'>
                <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl'>
                  Apps Development
                </h3>
                <p className='text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7'>
                I specialize in React Native app development, creating robust and seamless mobile applications.                </p>
              </div>
            </div>
          </div>

          <div className='rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
            <figure>
              <img src={appsImg} alt='' />
            </figure>
          </div>
        </div>
      </div>


    </div>
  </div>
</div>

        </div>
    </section>
  )
}

export default Services;
