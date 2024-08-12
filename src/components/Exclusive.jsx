import React from 'react'
const Exclusive = () => {
    return (
        <div className='container max-w-[1140px] mx-auto px-3'>
            <div className='flex justify-center pt-[180px] max-lg:pt-[120px] max-md:pt-[80px] max-sm:pt-12 pb-[29px]'>
                <div className='flex flex-col text-center'>
                    <h2 className='font_gilroy_medium font-medium text-5xl max-lg:text-4xl max-sm:text-2xl max-sm:leading-6 leading-[57px] text-black'>Get in touch with <span className='text-textBlue'>Hyperleen</span></h2>
                    <p className='font-poppins max-sm:text-sm font-normal text-base leading-6 text-textGray max-w-[731px] opacity-70 pt-6'>Take your experience a step further! Subscribe to our monthly newsletter for exclusive access to discounts, promotions, Hyperleen events and more. We’d hate to be annoying, please unsubscribe anytime! –</p>
                    <div>
                        <div className='flex gap-[14px] justify-center pt-6 flex-nowrap max-sm:flex-wrap max-sm:gap-[30px]'>
                            <div className='max-w-[323px] w-full rounded-[16px] bg-[#0000000A] p-4 flex justify-start'>
                                <input type="text" placeholder='Your e-mail' className='outline-none w-full bg-transparent' />
                            </div>
                            <button className='shadow-2xl hover:bg-white custom_Duration border-transparent border-[1px] hover:border-textBlue hover:text-textBlue font-poppins font-normal text-lg leading-7 text-white bg-textBlue rounded-[100px] p-[14px_24px_14px_24px] '>Submit Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Exclusive
