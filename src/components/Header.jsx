import React from 'react'
import pageLogo from '../assets/images/svg/logo.svg'

const Header = () => {
  return (
    <div>
      {/* ===================================================== Hero Section ==================================================== */}
      <div className='container'>
        <div className='flex justify-between items-center'>
          <div>
            <img src={pageLogo} alt="pageLogo" />
          </div>

          <div className='flex gap-8 items-center'>
            <ul className='flex items-center gap-7'>
              <li className='font-normal text-base leading-6 text-textGray'>Home</li>
              <li className='font-normal text-base leading-6 text-textGray'>Label</li>
              <li className='font-normal text-base leading-6 text-textGray'>About Us</li>
              <li className='font-normal text-base leading-6 text-textGray'>How It Works</li>
              <li className='font-normal text-base leading-6 text-textGray'>Team</li>
              <li className='font-normal text-base leading-6 text-textGray'>FAQs</li>
            </ul>
            <div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header