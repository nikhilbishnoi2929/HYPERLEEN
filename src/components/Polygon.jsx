import React from 'react'
import polygonFirst from '../assets/images/webp/polyGon.webp';
import polygonSecond from '../assets/images/webp/polygonSecond.webp'
const Polygon = () => {
  return (
    <div>
        <div className='container max-w-[1164px] px-3 mx-auto'>
            <div className='flex justify-center'>
                <h2 className='max-w-[652px] text-center font-medium text-5xl leading-[57px] text-black font_gilroy_medium'>Tools and <span className='text-textBlue'>Platforms for Polygon</span> Annotations</h2>
            </div>
            <img className='w-full pt-16' src={polygonFirst} alt="polygonFirst" />
            <img className='w-full pt-6' src={polygonSecond} alt="polygonSecond" />
        </div>
    </div>
  )
}

export default Polygon
