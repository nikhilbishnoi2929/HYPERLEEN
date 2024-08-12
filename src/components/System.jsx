import carImg from '../assets/images/webp/card-img.webp'
import projectReq from '../assets/images/webp/req-project.webp'
import CommonButton from '../common/Button'
import { PenIcon } from '../common/Icon'
import WorkflowSteps from './Timeline'

const System = () => {
  return (
    <div className='lg:pt-[100px] md:pt-16  pt-0'>
      <div className='container'>
        <div className='row items-end justify-center'>
          <div className='lg:w-1/2 px-3'>
            <h1 className='font-gilroy font-semibold md:text-5xl text-4xl md:leading-[57px] leading-10 text-black'>How the <span className='text-blue'>System</span> Works</h1>
            <p className='text-gray max-w-[528px] pt-4'>Effortless Data Labeling: Streamlined, Accurate, and Scalable Solutions for AI Development</p>
            <div className='p-5 rounded-2xl border border-black relative max-w-[400px] mt-10'>
              <h1 className='font-semibold text-black'>Project Request</h1>
              <div className='p-4 rounded-2xl bg-light_grey mt-5'>
                <img src={carImg} alt="car img" />
              </div>
              <div className='border p-4 rounded-lg border-grey mt-4'>
                <div className='flex items-center gap-3'>
                  <p className='text-black opacity-40'>Car...</p>
                  <PenIcon />
                </div>
              </div>
            </div>
            <div className='relative right-0 top-0 shadow-whiteBox py-7 px-6 bg-white z-30 rounded-2xl max-w-[381px] w-full sm:translate-x-[140px] sm:-translate-y-[90px] max-sm:mt-4'>
              <img src={projectReq} alt="project req" className='pointer-events-none' />
            </div>
            <div className='max-sm:mt-5'>  <CommonButton text={'Get Started Now'} /></div>
          </div>

          <div className='lg:w-1/2 px-3 max-lg:mt-5'>
             <WorkflowSteps />
          </div>
        </div>
      </div>
    </div>
  )
}
export default System
