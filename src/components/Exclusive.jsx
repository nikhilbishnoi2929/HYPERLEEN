import React from 'react';
import CommonButton from '../common/Button';

const Exclusive = () => {
    return (
        <div className='container max-w-[1140px] mx-auto px-3'>
            <div className='flex justify-center pt-[180px] max-lg:pt-[120px] max-md:pt-[80px] max-sm:pt-12 pb-[29px]'>
                <div className='flex flex-col text-center'>
                    <h2 className='font_gilroy_medium font-medium text-5xl max-lg:text-4xl max-sm:text-2xl max-sm:leading-6 leading-[57px] text-black'>
                        Get in touch with <span className='text-blue'>Hyperleen</span>
                    </h2>
                    <p className='font-poppins max-sm:text-sm font-normal text-base leading-6 text-gray max-w-[731px] opacity-70 pt-6'>
                        Take your experience a step further! Subscribe to our monthly newsletter for exclusive access to discounts, promotions, Hyperleen events, and more. We’d hate to be annoying, please unsubscribe anytime! –
                    </p>
                    <div>
                        <form action="" className='flex gap-[14px] justify-center pt-6 flex-nowrap max-sm:flex-wrap max-sm:gap-[24px]'>
                            <div className='max-w-[323px] w-full rounded-[16px] bg-[#0000000A] p-4 flex justify-start'>
                                <input
                                    type="email"
                                    placeholder="Your e-mail"
                                    className="outline-none w-full bg-transparent"
                                    required
                                />
                            </div>
                            <CommonButton text={'Submit Now'}/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Exclusive;
