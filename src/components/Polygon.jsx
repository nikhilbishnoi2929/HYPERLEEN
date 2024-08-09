import React from 'react'
import polygonFirst from '../assets/images/webp/polyGon.webp';
import polygonSecond from '../assets/images/webp/polygonImg.webp'
const Polygon = () => {
  return (
    <div>
        <div className='container max-w-[1164px] px-3 mx-auto'>
            <div className='flex justify-center pt-[160px] max-lg:pt-[100px] max-xl:pt-[120px] max-md:pt-[80px] max-sm:pt-12'>
                <h2 className='max-w-[652px] text-center font-medium text-5xl max-sm:leading-7 max-lg:text-[40px] max-lg:leading-[48px] max-md:text-3xl max-md:max-w-[500px] max-sm:text-2xl max-sm:max-w-[400px] leading-[57px] text-black font_gilroy_medium'>Tools and <span className='text-textBlue'>Platforms for Polygon</span> Annotations</h2>
            </div>
            <img className='w-full pt-16 max-sm:pt-12 max-lg:pt-14' src={polygonFirst} alt="polygonFirst" />
            <img className='w-full pt-6' src={polygonSecond} alt="polygonSecond" />
        </div>
    </div>
  )
}

export default Polygon
