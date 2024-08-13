import React, { useState } from 'react'
import pageLogo from '../assets/images/svg/logo.svg'
import heroSectionBg from '../assets/images/webp/hero-bg.png'
import dottedArrow from '../assets/images/webp/dotted-arrow.png'
import { Link } from 'react-router-dom'

const Header = () => {
  const heroBg = {
    backgroundImage: `url(${heroSectionBg})`,
  }
  const [nav, setNav] = useState(false)
  return (
    <div>
      <div className='py-4 border-b-[0.1px] border-solid border-gray'>
        <div className='container'>
          <div className='flex justify-between items-center'>
            <div>
              <img src={pageLogo} alt="pageLogo" />
            </div>
            <div className='flex gap-8 items-center relative'>
              <div className='w-8 h-7 flex flex-col justify-between absolute right-0 lg:hidden z-20' onClick={() => setNav(!nav)}>
                <span className={`w-full h-1 bg-black rounded-sm ${(nav) ? '-rotate-45 absolute top-[10px]' : ''}`}></span>
                <span className={`w-full h-1 bg-black rounded-sm ${(nav) ? 'hidden' : 'flex'}`}></span>
                <span className={`w-full h-1 bg-black rounded-sm ${(nav) ? 'rotate-45 absolute top-3' : ''}`}></span>
              </div>
              <ul className={`flex items-center gap-7 max-lg:w-full max-lg:h-full max-lg:bg-green max-lg:items-center max-lg:justify-center max-lg:fixed top-0 right-0 max-lg:flex-col transition-all ${(nav) ? "max-lg:right-0 !bg-amber-200 transition-all" : "max-lg:-right-[120%] transition-all"}`}>
                <li className='font-normal text-base leading-6 text-gray'>
                  Home</li>
                <li className='font-normal text-base leading-6 text-gray'>
                  Label
                </li>
                <li className='font-normal text-base leading-6 text-gray'>
                  About Us
                </li>
                <li className='font-normal text-base leading-6 text-gray'>
                  How It Works
                </li>
                <li className='font-normal text-base leading-6 text-gray'>
                  Team
                </li>
                <li className='font-normal text-base leading-6 text-gray'>
                  FAQs
                </li>
              </ul>
              <div className='flex items-center gap-3'>
                <button className='font-normal text-base leading-7 text-black w-[116px] h-[55px] rounded-[100px] border-black border-[1px] border-solid'>Sign Up</button>
                <button className='font-normal text-lg leading-7 text-white w-[148px] h-[55px] bg-blue rounded-[100px] shadow-buttonShadow'>Contact Us</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-center bg-100% bg-no-repeat mx-auto' style={heroBg}>
        <div className="container py-[71px]">
          <div className='flex items-center justify-center gap-4'>
            <div className='w-[43px]'>
              <img src={dottedArrow} className='w-full' alt="dottedArrow" />
            </div>
            <div className='text-base font-normal leading-6 text-blue'>AI Solutions</div>
            <div className='w-[43px] rotate-180'>
              <img src={dottedArrow} className='w-full' alt="dottedArrow" />
            </div>
          </div>
          <div className='pt-6 max-w-[834px] mx-auto'>
            <div className='flex items-center gap-6 w-[834px] mx-auto overflow-x-auto'>
              <div className='text-nowrap text-blue px-6 py-[10px] border-[0.5px] border-blue border-solid bg-[#EBEBFD] rounded-[122px] flex justify-center items-center'>Accurate</div>

              <div className='text-nowrap text-blue px-6 py-[10px] border-[0.5px] border-blue border-solid bg-[#EBEBFD] rounded-[122px] flex justify-center items-center'>Scalable</div>

              <div className='text-nowrap text-blue px-6 py-[10px] border-[0.5px] border-blue border-solid bg-[#EBEBFD] rounded-[122px] flex justify-center items-center'>Secure Data</div>

              <div className='text-nowrap text-blue px-6 py-[10px] border-[0.5px] border-blue border-solid bg-[#EBEBFD] rounded-[122px] flex justify-center items-center'>Labeling Solutions</div>

              <div className='text-nowrap text-blue px-6 py-[10px] border-[0.5px] border-blue border-solid bg-[#EBEBFD] rounded-[122px] flex justify-center items-center'>Quality Work</div>
            </div>
            <h1 className='font-gilroy text-12xl font-medium leading-[80px] text-center pt-11'>Transform Your <span className='text-blue font-gilroy'>Data into AI</span> Insights</h1>
            <p className='text-base leading-6 text-gray mx-auto max-w-[634px] pt-5 text-center'>Unlock the full potential of your AI models with our premium data labeling services. Our expert annotators ensure your data is meticulously labeled, enabling superior performance and insights.</p>
            <div className='flex items-center gap-3 pt-10 justify-center'>
              <button className='font-normal text-lg leading-7 text-white w-[151px] h-[55px] bg-blue rounded-[100px] shadow-buttonShadow'>Get Started</button>
              <button className='font-normal text-base leading-7 text-black w-[150px] h-[55px] rounded-[100px] border-black border-[1px] border-solid'>Try For Free</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header