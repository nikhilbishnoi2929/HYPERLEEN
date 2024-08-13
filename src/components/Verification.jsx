import verificationImg from '../assets/images/webp/verification-img.webp'
import CommonButton from '../common/Button'

const Verification = () => {
    return (
        <>
            <div className='container lg:py-[160px] md:pt-20 pt-16 pb-0'>
                <div className='row items-center justify-between max-lg:max-w-[600px] max-lg:justify-center max-lg:flex-col max-lg:mx-auto'>
                    <div className='lg:w-1/2 px-3 relative'>
                        <div className='absolute top-0 w-full max-w-[502px]'>
                            <h3 className='sm:py-8  px-7 py-5 text-white md:text-11xl sm:text-3xl xsm:text-2xl text-xl sm:eading-[43px]'>Is Previous Selected Object is Correct?</h3>
                        </div>
                        <div className='max-w-[502px]'>
                            <img src={verificationImg} alt="verifiction can or burger img" width={502} height={483} />
                        </div>
                        <div className='absolute bg-white rounded-2xl sm:p-4 p-2 shadow-whiteBox max-w-[332px] -bottom-10 left-0 xl:-translate-x-7 md:translate-x-2 -translate-x-3 translate-y-20'>
                            <h4 className='sm:text-2xl text-xl font-semibold font-gilroy text-center text-black'>Confirm your action</h4>
                            <p className='font-poppins text-center'>Confirm if the segmentation was performed correctly.</p>
                            <div className='flex items-center md:mt-9 sm:mt-7 mt-5 md:gap-4 sm:gap-3 gap-2'>
                                <CommonButton text={'Yes'} className='xsm:w-full w-1/3 max-w[148px] text-center' />
                                <CommonButton text={'No'} className='!text-black !bg-white xsm:w-full w-1/3 max-w-[148px] text-center !border-black !shadow-none hover:!shadow-buttonShdow' />
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-1/2 px-3  max-lg:mt-36'>
                        <h1 className='font-gilroy text-11xl leading-[43px] font-semibold text-black max-lg:text-center'>Verification</h1>
                        <p className='text-gray font-poppins max-w-[540px] max-lg:text-center pt-4'>Verification is a crucial step to ensure the accuracy of the labeled data. It involves reviewing the segmented image to confirm if the segmentation was performed correctly.</p>
                        <div className='lg:mt-12 md:mt-8 mt-5 max-lg:flex justify-center'>
                            <CommonButton
                                text={"Learn more"}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Verification;