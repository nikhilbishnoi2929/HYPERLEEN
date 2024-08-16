import React from 'react'
import CommonButton from '../common/Button'
import Verification from '../components/Verification'
import segmentationImg from '../assets/images/webp/selected_car.webp'

const Segmentation = () => {
  return (
    <div className='py-20 max-lg:py-10 max-md:py-0 max-md:pt-6'>
      <div className='container'>
        <h2 className="font_gilroy_medium text-3xl sm:text-5xl md:leading-[57px] max-w-[506px] mx-auto text-center">
          Image <span className="text-blue">Segmentation and </span>  Verification
        </h2>
        <p className="text-gray pt-4 pb-6 max-w-[740px] mx-auto text-center">
          In the realm of sentiment analysis, human judgment plays a crucial role. While our methods may not be extravagant, they are designed to ensure precise and reliable results.
        </p>
        <div className="row lg:mt-10 items-center mx-auto max-sm:gap-5 max-lg:gap-12 max-lg:flex-col-reverse">
          <div className="w-full lg:w-1/2 lg:pr-3" data-aos="fade-right">
            <h2 className='font_gilroy_semibold sm:font-semibold text-11xl leading-[43px] w-full max-lg:text-center'>Image Segmentation </h2>
            <p className="text-gray pt-2 sm:pt-4 max-w-[540px] max-lg:text-center max-lg:mx-auto">
              Image segmentation is the process of partitioning an image into multiple segments to simplify its representation and make it more meaningful. This technique is essential for identifying and analyzing objects within an image, such as cars in autonomous driving applications.
            </p>
            <CommonButton text={"Learn More"} className={"lg:mt-12 mt-7 max-lg:mx-auto"} />
          </div>
          <div className="w-full lg:w-1/2" data-aos="fade-left">
            <div className='w-full flex justify-center lg:justify-end overflow-hidden'>
              <div className='relative'>
                <img src={segmentationImg} className='max-w-[502px] w-full' alt="segmentationImg" />
                <div className='absolute top-0 left-0 w-full bg-blue p-4 rounded-tl-2xl rounded-tr-2xl'>
                  <div className='text-white text-lg leading-7 font-normal'>Selected All Squares With</div>
                  <div className='font_gilroy_semibold leading-10 text-11xl text-white pt-2'>Car</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Verification />
    </div>
  )
}
export default Segmentation