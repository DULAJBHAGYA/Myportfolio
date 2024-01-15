import React from 'react';
import uomImg from '../../images/UOM.png';
import kckImg from '../../images/KCK.png';
import sibaImg from '../../images/SIBA.png';
import esoftImg from '../../images/ESOFT.png';



const Education = () => {
  return (
    <section id='education'>
    <div className='container lg:pt-5' style={{ overflowX: 'hidden' }}>
        <div className='text-center '>
    <h1 className='text-headingColor font-[800] text-[2.4rem] mb-5'>Education</h1>
    </div>
    <div className='flex flex-col justify-center sm:py-12'>
  <div className='w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0'>
    <div className='relative text-gray-700 antialiased text-sm font-semibold'>

      {/*================= vertical line running through the middle ============*/}
      <div className='hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2  transform -translate-x-1/2 '></div>

      {/*================= left 1 card ============*/}
      <div className='mt-6 sm:mt-0 sm:mb-12'>
        <div className='flex items-center flex-col sm:flex-row'>
        
          <div className='flex justify-start w-full mx-auto items-center mt-9'>
            <div className='w-full sm:w-1/2 sm:pr-10'>
              <div data-aos='fade-right' data-aos-duration='1200' className='bg-white p-4 rounded shadow group hover:bg-primaryColor
               cursor-pointer ease-in duration-150'>
                <h3 className='text-primaryColor font-[700] mt-3 mb-3 group-hover:text-white group-hover:font-[600] text-2xl'>
                  University of Moratuwa
                </h3>
                <p className='text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7'>
                  Bsc. (Hons) in Information Technology and Management
                </p>
                <p className='mt-2 text-[14px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7'>
                2021 - Expected 2025
                </p>
              </div>
            </div>
          </div>

          <div className='rounded-full bg-primaryColor border-white border-4 w-20 h-20 absolute left-1/2 transform -translate-x-1/2 -translate-y-4
           sm:translate-y-0 flex items-center justify-center'>
            <figure>
              <img src={uomImg} alt='' style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
            </figure>
          </div>
        </div>
      </div>

      {/*================= right 1 card ============*/}
      <div className='mt-6 sm:mt-0 sm:mb-12'>
        <div className='flex items-center flex-col sm:flex-row'>
          <div className='flex justify-end w-full mx-auto items-center mt-9'>
            <div className='w-full sm:w-1/2 sm:pl-10'>
              <div data-aos='fade-left' data-aos-delay='50' data-aos-duration='1500' className='bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150'>
                <h3 className='text-primaryColor font-[700] mt-3 mb-3 group-hover:text-white group-hover:font-[600] text-2xl'>
                  Kingswood College
                </h3>
                <p className='text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7'>
                  2004 - 2017<br/>
                </p>

                <p className='mt-2 text-[14px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7'>G.C.E A/L Biological Science - AAB <br/>
                  Z-Score - 1.4858</p>

                  <p className='mt-2 text-[14px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7'>G.C.E O/L - 2014<br/>
                  7As 1B 1C</p>
              </div>
            </div>
          </div>

          <div className='rounded-full bg-primaryColor border-white border-4 w-20 h-20 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
            <figure>
              <img src={kckImg} alt='' style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}/>
            </figure>
          </div>
        </div>
      </div>

      {/*================= left 2 card ============*/}
      <div className='mt-6 sm:mt-0 sm:mb-12'>
        <div className='flex items-center flex-col sm:flex-row'>
          <div className='flex justify-start w-full mx-auto items-center mt-9'>
            <div className='w-full sm:w-1/2 sm:pr-10'>
              <div data-aos='fade-right' data-aos-delay='100' data-aos-duration='1400' className='bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150'>
                <h3 className='text-primaryColor font-[700] mt-3 mb-3 group-hover:text-white group-hover:font-[600] text-2xl'>
                  SIBA Campus
                </h3>
                <p className='text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7'>
                Dip. in English<br/>
                Dip. in IT                </p>
              </div>
            </div>
          </div>

          <div className='rounded-full bg-primaryColor border-white border-4 w-20 h-20 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
            <figure>
              <img src={sibaImg} alt='' style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
            </figure>
          </div>
        </div>
      </div>

      {/*================= right 2 card ============*/}
      <div className='mt-6 sm:mt-0 sm:mb-12'>
        <div className='flex items-center flex-col sm:flex-row'>
          <div className='flex justify-end w-full mx-auto items-center mt-9'>
            <div className='w-full sm:w-1/2 sm:pl-10'>
              <div data-aos='fade-left' data-aos-delay='150' data-aos-duration='1300' className='bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150'>
                <h3 className='text-primaryColor font-[700] mt-3 mb-3 group-hover:text-white group-hover:font-[600] text-2xl'>
                  ESOFT Metro Campus
                </h3>
                <p className='text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7'>
                Dip. in Software Engineering               </p>
              </div>
            </div>
          </div>

          <div className='rounded-full bg-primaryColor border-white border-4 w-20 h-20 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
            <figure>
              <img src={esoftImg} alt='' style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}/>
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

export default Education
