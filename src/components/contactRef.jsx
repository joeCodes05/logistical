import React from 'react'
import { Link } from 'react-router-dom'
import * as AiIcons from 'react-icons/ai'

const ContactRef = () => {
  return (
    <>
      <section className='our_staff pt-[5rem] bg-white overflow-hidden'>
        <div className='px-[20px] lg:px-[50px] w-full'>
          <h1 data-aos="fade-right" data-aos-duration="2000" className='text-gray-800 mt-[50px] font-[700] text-[40px] leading-[40px] md:text-[66px] md:leading-[66px] xl:text-[114px] xl:leading-[114px]'>
            Connect Today
          </h1>
          <hr className='mt-9' />
          <div className="mt-8">
            <h3 data-aos="fade-in" data-aos-duration="2000" className='mt-5 text-[18px] leading-[18px] lg:text-[32px] lg:leading-[32px] text-gray-800 font-[400]'>
              Communication in Motion
            </h3>
          </div>
        </div>
        <div className='contact_ref mt-[5rem] py-[5rem] h-[70vh] items-center justify-center flex overflow-hidden'>
          <div className="text-center">
            <h1 data-aos="fade-in" data-aos-duration="2000" className='text-white  font-[700] text-[40px] leading-[40px] md:text-[50px] md:leading-[50px] xl:text-[70px] xl:leading-[100px]'>
              Have a project in mind?
            </h1>
            <h4 data-aos="fade-in" data-aos-duration="2000" className='text-white text-[30px] mt-5 leading-[20px] font-[400]'>
              Do not hesitate to say Hello
            </h4>
            <div className="mt-5 flex justify-center" data-aos="fade-in" data-aos-duration="2000">
              <Link to={'/contact'} className='no-underline'>
                <button className='ring-2 text-[17px] ring-white py-[12px] px-[15px] rounded-[8px] text-white flex items-center justify-center gap-2'>
                  <span>Let's Talk</span> <AiIcons.AiOutlineArrowRight />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactRef