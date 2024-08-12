
import dataLabeling from '../assets/images/png/dataLabeling.png';
import dataLabelingCar from '../assets/images/png/dataLabelingCar.png';
import checkRight from '../assets/images/svg/checkRight.svg';
import VerificationCar from '../assets/images/png/VerificationCAR.png';
import VerificationMan from '../assets/images/png/VerificationMan.png';
import VerificationTomato from '../assets/images/png/VerificationTomato.png';
import VerificationPie from '../assets/images/png/VerificationPie.png';
import relabelingPie from '../assets/images/png/RelabelingPie.png';
import dataLabelingQuiche from '../assets/images/png/relabelingQuiche.png';
import arrowDot from '../assets/images/svg/arrowDots.svg';
import arrowDotTwo from '../assets/images/svg/arrowDotTwo.svg';
import checkMinus from '../assets/images/svg/crossMinus.svg'
const Quality = () => {
  return (    
    <div className='container max-w-[1164px] px-3 mx-auto'>
      <div className=' flex justify-center pt-[160px] max-lg:pt-[120px] max-md:pt-[80px] max-sm:pt-12 '>
        <div className='flex flex-col text-center'>
          <h2 className=' font_gilroy_medium font-medium text-5xl max-lg:text-4xl max-md:text-3xl max-sm:text-2xl leading-[57px] text-black '>How We  <span className=' text-textBlue'>Ensure High Quality</span></h2>
          <p className=' font-poppins font-normal text-base leading-6 text-textGray max-sm:text-sm max-w-[674px] pt-4 '>Our rigorous quality assurance process ensures that our data labeling services provide accurate and reliable results. Here’s a breakdown of our process:</p>
        </div>
      </div>
      <div className='flex gap-5 pt-[99px] max-md:pt-[70px] max-sm:pt-12 max-xl:flex-wrap justify-center xl:justify-start relative'>
        <div className=' xl:max-w-[326px] max-xl:max-w-[449px] w-full h-full max-h-[384px] rounded-[16px] bg-[#FFFFFF0A] border-[0.5px] border-textBlue p-[20px] max-sm:p-[10px]'>
          <h4 className='font_gilroy_semibold font-semibold text-2xl leading-9 max-sm:leading-7 text-black max-sm:text-xl'>Step 01</h4>
          <h5 className='font_gilroy_semibold pt-2 font-semibold text-xl leading-7 text-textGray '>Data Labeling</h5>
        <div className=' flex max-sm:pt-4 sm:flex-col max-sm:justify-between'>
        <img className=' sm:pt-2 w-full sm:max-w-[285px] max-w-[150px]' src={dataLabeling} alt="dataLabeling" />
          <img className=' sm:pt-7 w-full sm:max-w-[285px] max-w-[150px]' src={dataLabelingCar} alt="dataLabeling" />
        </div>
          </div>
          <div className='w-full max-w-[449px] h-full max-h-[404px] xl:mt-[52px] rounded-[16px] bg-[#FFFFFF0A] border-[0.5px] border-textBlue p-[20px] max-sm:p-[10px]'>
          <div className=' flex justify-between'>
            <div className=' flex flex-col'>
              <h4 className='font_gilroy_semibold font-semibold text-2xl leading-9 text-black max-sm:leading-7 max-sm:text-xl'>Step 01</h4>
              <h5 className='font_gilroy_semibold pt-2 font-semibold text-xl leading-7 text-textGray '>Verification</h5>
            </div>
            <div className=' flex gap-[13px]'>
              <div className='w-[86px] h-[41px] items-center rounded-[12px] flex gap-[3px] border-[0.5px] border-textBlue p-[6px_12px_6px_12px] bg-[#084CAF0A]'>
                <h4 className='font_Gilroy_semibold font-semibold text-xl leading-7 text-black '>90%</h4>
                <img className='size-[20px]' src={checkRight} alt="checkRight" />
              </div>
              <div className='w-[86px] h-[41px] items-center rounded-[12px] flex gap-[3px] border-[0.5px] border-textBlue p-[6px_12px_6px_12px] bg-[#084CAF0A]'>
                <h4 className='font_Gilroy_semibold font-semibold text-xl leading-7 text-black '>10%</h4>
                <img className='size-[20px]' src={checkMinus} alt="checkRight" />
              </div>
            </div>
          </div>
          <div className='flex justify-between pt-2'>
            <img className=' w-full max-w-[156px] sm:max-w-[181px]' src={VerificationCar} alt="VerificationCar" />
            <img className=' w-full max-w-[156px] sm:max-w-[181px]' src={VerificationMan} alt="VerificationCar" />
          </div>
          <div className='flex justify-between pt-2'>
            <img className=' w-full max-w-[156px] sm:max-w-[181px]' src={VerificationTomato} alt="VerificationCar" />
            <img className=' w-full max-w-[156px] sm:max-w-[181px]' src={VerificationCar} alt="VerificationCar" />
          </div>
          <div className='flex justify-between pt-2'>
            <img className=' w-full max-w-[156px] sm:max-w-[181px]' src={VerificationMan} alt="VerificationCar" />
            <img className=' w-full max-w-[156px] sm:max-w-[181px]' src={VerificationPie} alt="VerificationCar" />
          </div>
        </div>
        <div className=' xl:max-w-[326px] max-xl:max-w-[449px] w-full rounded-[16px] h-full max-h-[384px] xl:mt-[147px] bg-[#FFFFFF0A] border-[0.5px] border-textBlue p-[20px] max-sm:p-[10px]'>
          <h4 className='font_gilroy_semibold max-sm:text-xl font-semibold text-2xl leading-9 text-black  max-sm:leading-7'>Step 01</h4>
          <h5 className='font_gilroy_semibold pt-2 font-semibold text-xl leading-7 text-textGray '>Data Labeling</h5>
          <p className=' font-poppins font-normal text-base leading-6 text-textGray xl:max-w-[281px] pt-[10px]'>Incorrectly labeled data is reviewed and relabeled correctly</p>
          <div className=' flex sm:flex-col flex-row max-sm:justify-between max-sm:pt-4'>
          <img className='max-sm:max-w-[150px] w-full max-w-[237px] sm:pt-2' src={relabelingPie} alt="dataLabeling" />
          <img className='max-sm:max-w-[150px] w-full max-w-[258px] sm:pt-[24px]' src={dataLabelingQuiche} alt="dataLabeling" />
          </div>
            </div>
      
        <img src={arrowDot} className='top-[24px] max-xl:hidden z-0 left-[323px] absolute' alt="arrowDot" />
        <img src={arrowDotTwo} className='top-[80px] max-xl:hidden z-0 right-[64px] absolute' alt="arrowDot" />
      </div>

    </div>
  )
}

export default Quality
