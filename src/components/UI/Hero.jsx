import React from 'react';
import CountUp from 'react-countup';
import Dulaj from '../../images/Dulaj.png'

const Hero = () => {
  return (
    <section className='pt-0' id='about'>
      <div className='container pt-14'>
        <div className='md:flex items-center justify-between sm:flex-col md:flex-row'>
          {/* ======= hero left content ======= */}
          <div className='w-full md:w-1/2'>
            <h5
              data-aos='fade-right'
              data-aos-duration='1500'
              className='text-headingColor font-[600] text-[16px]'
            >
              Hello Welcome!
            </h5>

            <h1
              data-aos='fade-up'
              data-aos-duration='1500'
              className='text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5'
            >
              I'm Dulaj Upananda
            </h1>
            <h2
              data-aos='fade-up'
              data-aos-duration='1500'
              className='text-headingColor font-[500] text-[1.8rem] sm:text-[30px] leading-[35px] sm:leading-[46px] mt-5'
            >
              IT Undergraduate
              <br/>
              Intern Software Engineer
            </h2> 

            <div
              data-aos='fade-up'
              data-aos-duration='1800'
              data-aos-delay='200'
              className='flex items-center gap-6 mt-7'
            >
              <a href='#contact'>
                <button className='bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]'>
                  <i className='ri-mail-line'></i>Hire me
                </button>
              </a>
              <a className='text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor' href='#portfolio'>
                See portfolio
              </a>
            </div>
            <p
              data-aos='fade-left'
              data-aos-duration='1500'
              className='flex gap-2 text-headingColor mt-12 font-[500] text-[15px] leading-7 sm:pl-0 sm:pr-10 '
            >
              <span>
                <i className='ri-apps-2-line'></i>
              </span>
              I am an undergraduate student at the University of Moratuwa,
              <br />
              pursuing a degree in BSc. (Hons) in Information Technology & Management.
            </p>

            <div className='flex items-center gap-9 mt-14'>

              <span className='text-smallTextColor text-[15px] font-[600]' >
                Follow me on
              </span>

              <span>
                <a href='https://github.com/DULAJBHAGYA' className='text-smallTextColor text-[18px] font-[600]' 
                target="_blank" rel="noopener noreferrer">
                  <i className='ri-github-line'></i>
                </a>
              </span>

              <span>
                <a href='https://www.linkedin.com/in/dulaj-bhagya-7029aa213/' className='text-smallTextColor text-[18px] font-[600]' target="_blank" rel="noopener noreferrer">
                <i className='ri-linkedin-box-line'></i>
                </a>
              </span>

              <span>
                <a href='https://medium.com/@dulajupananda' className='text-smallTextColor text-[18px] font-[600]' target="_blank" rel="noopener noreferrer">
                  <i className='ri-medium-line'></i>
                </a>
              </span>

              <span>
                <a href='https://www.facebook.com/profile.php?id=100005369356450' className='text-smallTextColor text-[18px] font-[600]' target="_blank" rel="noopener noreferrer">
                  <i className='ri-facebook-box-line'></i>
                </a>
              </span>

              <span>
                <a href='https://www.instagram.com/_d.b.u_/' className='text-smallTextColor text-[18px] font-[600]' target="_blank" rel="noopener noreferrer">
                  <i className='ri-instagram-line'></i>
                </a>
              </span>

              <span>
                <a href='https://www.threads.net/@' className='text-smallTextColor text-[18px] font-[600]' target="_blank" rel="noopener noreferrer">
                <i class="ri-threads-line"></i>                
                </a>
              </span>

            </div>
          </div>
          {/* ======== hero img ======= */}
          <div className='md:w-1/3 mt-10 sm:mt-0'>
            <figure className='flex items-center justify-center'>
              <img src={Dulaj} alt='' />
            </figure>
          </div>
          {/*======== hero img end ======= */}

          {/* ==========hero content right=========== */}
          <div className='md:w-1/5 flex justify-between text-center mt-0 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end'>
            <div className='mb-10'>
              <h2 className='text-headingColor font-[700] text-[32px]'>
                <CountUp start={0} end={3} duration={2} suffix='+' />
              </h2>
              <h4 className='text-headingColor font-[600] text-[18px]'>
                Years of Experience
              </h4>
            </div>

            <div className='mb-10'>
              <h2 className='text-headingColor font-[700] text-[32px]'>
                <CountUp start={0} end={100} duration={2} suffix='%' />
              </h2>
              <h4 className='text-headingColor font-[600] text-[18px]'>
                Success Rate
              </h4>
            </div>

            <div className='mb-10'>
              <h2 className='text-headingColor font-[700] text-[32px]'>
                <CountUp start={0} end={3} duration={2} suffix='' />
              </h2>
              <h4 className='text-headingColor font-[600] text-[18px]'>
                Clients
              </h4>
            </div>

            <div className='mb-10'>
              <h2 className='text-headingColor font-[700] text-[32px]'>
                <CountUp start={0} end={6} duration={2} suffix='' />
              </h2>
              <h4 className='text-headingColor font-[600] text-[18px]'>
                Projects Completed
              </h4>
            </div>
          </div>
          {/* ==========hero content right end============ */}
        </div>
      </div>
    </section>
  );
};

export default Hero;

