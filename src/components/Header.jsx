import React, { useState } from 'react'
import pageLogo from '../assets/images/svg/logo.svg'
import dottedArrow from '../assets/images/webp/dotted-arrow.webp'
import headerEllipse from '../assets/images/webp/header-ellipse.webp'
import heroSectionBg from '../assets/images/webp/hero-bg.webp'
import CommonButton from '../common/Button'

const Header = () => {
  const heroBg = {
    backgroundImage: `url(${heroSectionBg})`,
  }
  const [nav, setNav] = useState(false)
  return (
    <div className='max-w-[1920px] w-full mx-auto relative'>
      <div className='sm:py-4 py-2 border-b-[0.1px] border-solid border-gray'>
        <div className='container'>
          <div className='flex justify-between items-center'>
            <div>
              <a href="#">
                <img src={pageLogo} alt="pageLogo" />
              </a>
            </div>
            <div className='flex gap-8 items-center relative max-lg:flex-row-reverse'>
              <ul className={`flex items-center gap-7 max-lg:w-full max-lg:h-full max-lg:bg-green max-lg:items-center max-lg:justify-center max-lg:fixed top-0 right-0 max-lg:flex-col transition-all ${(nav) ? "max-lg:right-0 !bg-white transition-all z-[200]" : "max-lg:-right-[120%] transition-all"}`}>
                <li onClick={() => setNav(!nav)}>
                  <a className='!transition-all before:transition-all text-gray relative hover:text-blue before:border-b-[1px] before:mt-[3px] before:w-0 before:absolute before:top-0 before:left-0 before:h-full before:border-solid before:border-blue hover:before:w-full' href="#home">Home</a></li>
                <li onClick={() => setNav(!nav)}>
                  <a className='!transition-all before:transition-all text-gray relative hover:text-blue before:border-b-[1px] before:mt-[3px] before:w-0 before:absolute before:top-0 before:left-0 before:h-full before:border-solid before:border-blue hover:before:w-full' href="#label">Label</a>
                </li>
                <li onClick={() => setNav(!nav)}>
                  <a className='!transition-all before:transition-all text-gray relative hover:text-blue before:border-b-[1px] before:mt-[3px] before:w-0 before:absolute before:top-0 before:left-0 before:h-full before:border-solid before:border-blue hover:before:w-full' href="#about-us">About Us</a>
                </li>
                <li onClick={() => setNav(!nav)}>
                  <a className='!transition-all before:transition-all text-gray relative hover:text-blue before:border-b-[1px] before:mt-[3px] before:w-0 before:absolute before:top-0 before:left-0 before:h-full before:border-solid before:border-blue hover:before:w-full' href="#how-it">How It Works</a>
                </li>
                <li onClick={() => setNav(!nav)}>
                  <a className='!transition-all before:transition-all text-gray relative hover:text-blue before:border-b-[1px] before:mt-[3px] before:w-0 before:absolute before:top-0 before:left-0 before:h-full before:border-solid before:border-blue hover:before:w-full' href="#team">Team</a>
                </li>
                <li onClick={() => setNav(!nav)}>
                  <a className='!transition-all before:transition-all text-gray relative hover:text-blue before:border-b-[1px] before:mt-[3px] before:w-0 before:absolute before:top-0 before:left-0 before:h-full before:border-solid before:border-blue hover:before:w-full' href="#faq">FAQs</a>
                </li>
                <CommonButton className='!text-black bg-transparent !border-black !border-[1px] !border-solid hover:!bg-blue hover:!text-white hover:!border-transparent shadow-none md:hidden' text={"Sign Up"} />
                <CommonButton text={"Contact Us"} className={'md:hidden'} />
              </ul>
              <div className='w-8 h-7 flex flex-col justify-between lg:hidden z-[500]' onClick={() => setNav(!nav)}>
                <span className={`w-full h-1 bg-black rounded-sm`}></span>
                <span className={`w-full h-1 bg-black rounded-sm`}></span>
                <span className={`w-full h-1 bg-black rounded-sm`}></span>
              </div>
              <div className='flex items-center gap-3'>
                <CommonButton className='!text-black bg-transparent !border-black !border-[1px] !border-solid hover:!bg-blue hover:!text-white hover:!border-transparent shadow-none max-md:hidden' text={"Sign Up"} />
                <CommonButton text={"Contact Us"} className={"max-md:hidden"} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-center bg-100% bg-no-repeat mx-auto' style={heroBg}>
        <div className="container pt-9 py-8 md:py-10 lg:py-[71px]">
          <div className='flex items-center justify-center gap-4'>
            <div className='w-[43px]'>
              <img src={dottedArrow} className='w-full' alt="dottedArrow" />
            </div>
            <div className='text-base font-normal font_gilroy_regular leading-6 text-blue'>AI Solutions</div>
            <div className='w-[43px] rotate-180'>
              <img src={dottedArrow} className='w-full' alt="dottedArrow" />
            </div>
          </div>
          <div className='pt-6 max-w-[834px] mx-auto'>
            <div className='flex items-center gap-4 sm:gap-6 justify-center overflow-x-scroll'>
              <div className='text-nowrap text-blue px-6 py-[10px] border-[0.5px] border-blue border-solid bg-headerIcons rounded-[122px] flex justify-center items-center'>Accurate</div>
              <div className='text-nowrap text-blue px-6 py-[10px] border-[0.5px] border-blue border-solid bg-headerIcons rounded-[122px] flex justify-center items-center'>Scalable</div>
              <div className='text-nowrap text-blue px-6 py-[10px] border-[0.5px] border-blue border-solid bg-headerIcons rounded-[122px] flex justify-center items-center'>Secure Data</div>
              <div className='text-nowrap text-blue px-6 py-[10px] border-[0.5px] border-blue border-solid bg-headerIcons rounded-[122px] flex justify-center items-center'>Labeling Solutions</div>
              <div className='text-nowrap text-blue px-6 py-[10px] border-[0.5px] border-blue border-solid bg-headerIcons rounded-[122px] flex justify-center items-center'>Quality Work</div>
            </div>
            <h1 className='sm:text-5xl text-4xl md:text-6xl lg:text-12xl font-medium font_gilroy_medium md:leading-[80px] text-center pt-8 sm:pt-11'>Transform Your <span className='text-blue font-gilroy'>Data into AI</span> Insights</h1>
            <p className='text-base leading-6 text-gray mx-auto max-w-[634px] pt-5 text-center'>Unlock the full potential of your AI models with our premium data labeling services. Our expert annotators ensure your data is meticulously labeled, enabling superior performance and insights.</p>
            <div className='flex items-center gap-3 pt-7 sm:pt-10 justify-center'>
              <CommonButton className='font-normal font_gilroy_regular text-lg leading-7 text-white w-[151px] h-[55px] bg-blue rounded-[100px] shadow-buttonShadow ' text={'Get Started'} />
              <CommonButton className='shadow-none bg-transparent !text-black w-[150px] h-[55px] rounded-[100px] !border-black !border-[1px] !border-solid hover:!bg-blue hover:!text-white hover:!border-transparent' text={'Try For Free'} />
            </div>
          </div>
        </div>
      </div>
      <img src={headerEllipse} className='absolute right-0 top-0 pointer-events-none max-lg:hidden' alt="headerEllipse" />
    </div>
  )
}

export default Header