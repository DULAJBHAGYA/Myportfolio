import React from 'react';

const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <footer className='bg-[#12141e] pt-12'>
        {/*===========footer top=========*/}
        <div className='container'>
          <div className='sm:flex items-center justify-between md:gap-8'>
            <div className='w-full sm:w-1/2'>
              <h2 className='text-[26px] leading-10 text-white font-[600] mb-5 md:text-[2rem]'>
                Do you want to make beautiful products?
              </h2>
              <a href="https://www.fiverr.com/dulajupananda" target="_blank" rel="noreferrer">
                <button className='bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]'>
                  Visit My Fiverr Profile
                </button>
              </a>

              <div className='contact-details' style={{display: 'flex', alignItems: 'center', color:'white', marginTop:'30px'}}>
                <i class="ri-phone-fill" style={{marginRight: '5px'}}></i>&nbsp;&nbsp;
                <h4 style={{marginRight: '10px'}}>(+94) 76 832 3678</h4><br/>
              </div>
              <div className='contact-details' style={{display: 'flex', alignItems: 'center', color:'white',marginTop:'10px'}}>
                <i class="ri-mail-fill" style={{marginRight: '5px'}}></i>&nbsp;&nbsp;
                <h4>dulajupananda@gmail.com</h4>
              </div>


            </div>

            <div className='w-full sm:w-1/2'>
              <p className='text-gray-300 leading-7 mt-4 sm:mt-0 text-xl'>
              Hello! Thank you so much for your time!
              <br/>
              Please feel free to drop me an email through above form if you want to contact me on any occassion.
              </p>

              <div className='flex items-center gap-4 flex-wrap md:gap-8 mt-10'>
              
                <span className='text-gray-300 font-[600] text-[15px]'>
                  Follow me
                </span>

                <span className='w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center'>
                  <a href='https://github.com/DULAJBHAGYA' className='text-gray-300 font-[500] text-[18px]' target="_blank" rel="noopener noreferrer"
                  ><i className="ri-github-line"></i></a>
                </span>

                <span className='w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center'>
                  <a href='https://www.linkedin.com/in/dulaj-bhagya-7029aa213/' className='text-gray-300 font-[500] text-[18px]' target="_blank" rel="noopener noreferrer">
                  <i className="ri-linkedin-box-line"></i></a>
                </span>

                <span className='w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center'>
                  <a href='https://medium.com/@dulajupananda' className='text-gray-300 font-[500] text-[18px]' target="_blank" rel="noopener noreferrer">
                  <i className="ri-medium-line"></i></a>
                </span>

                <span className='w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center'>
                  <a href='https://www.facebook.com/profile.php?id=100005369356450' className='text-gray-300 font-[500] text-[18px]' target="_blank" rel="noopener noreferrer">
                  <i className="ri-facebook-box-line"></i></a>
                </span>

                <span className='w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center'>
                  <a href='https://www.instagram.com/_d.b.u_/' className='text-gray-300 font-[500] text-[18px]' target="_blank" rel="noopener noreferrer">
                  <i className="ri-instagram-line"></i></a>
                </span>

              </div>

            </div>

          </div>
          {/* <div>
                <ul className='flex items-center justify-center gap-10 mt-10'>
                    <li>
                    <a className='text-gray-400 font-[600]' href='#about'>About</a>
                    </li>

                    <li>
                    <a className='text-gray-400 font-[600]' href='#education'>Education</a>
                    </li>

                    <li>
                    <a className='text-gray-400 font-[600]' href='#skills'>Skills</a>
                    </li>

                    <li>
                    <a className='text-gray-400 font-[600]' href='#services'>Services</a>
                    </li>

                    <li>
                    <a className='text-gray-400 font-[600]' href='#portfolio'>Portfolio</a>
                    </li>

                    <li>
                    <a className='text-gray-400 font-[600]' href='#contact'>Contact</a>
                    </li>

                </ul>
            </div> */}
        </div>
          {/*===========footer top end=========*/}

          {/*===========footer bottom =========*/}
            <div className='bg-[#1b1e29] py-5 mt-10'>
              <div className='container'>
                <div className='flex items-center justify-center sm:justify-between'>
                  <div className='hidden sm:block'>
                    <div className='flex items-center gap-[10px]'>
                      <span className='w-[35px] h-[35px] rounded-full bg-[#2b2d33] text-white font-[500] text-18px
                      flex items-center justify-center'>
                        D
                      </span>

                    <div className='leading-[20px]'>
                      <h2 className='text-gray-200 font-[500] text-[18px]'>
                        Dulaj
                      </h2>
                      <p className='text-gray-400 text-[14px] font-[500]'>
                        Personal
                      </p>
                    </div>

                    </div>
                  </div>

                  <p className='text-gray-400 text-[14px]'>Copyright {year} developed by Dulaj - All right reserved.</p>

                </div>
              </div>
            </div>
        {/*===========footer bottom end=========*/}

    </footer>
  )
};

export default Footer;
