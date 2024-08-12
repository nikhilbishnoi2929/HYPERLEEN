import React, { useState } from 'react'
import { FAQS } from '../common/Helper';


const Faqs = () => {
    const [activeIndex, ACCORDION_INDEX] = useState(null);
    const toggleAccordion = (index) => {
        ACCORDION_INDEX(activeIndex === index ? null : index);
    };
    return (
        <div className='max-w-[997px] container px-3 mx-auto'>
            <div className='flex justify-center pt-[160px] max-lg:pt-[100px] max-md:pt-[80px] max-sm:pt-12'>
                <div className='flex flex-col text-center'>
                    <h2 className='font_gilroy_medium font-medium text-textBlue text-5xl max-lg:text-4xl max-md:text-3xl leading-[57px] '>FAQs</h2>
                    <p className='font-poppins font-normal text-10xl text-textGray leading-6 max-sm:text-sm pt-4'>You have got Question.  We have got Answer</p>
                </div>
            </div>
            <div className='z-30 max-w-[997px] mx-auto lg:pt-10 max-md:pt-8 max-sm:pt-6 max-lg:pt-10 pt-14' data-aos="zoom-in-up">
                {FAQS.map((faq, index) => (
                    <div
                        key={index}
                        className={`overflow-hidden rounded-[16px] ease-linear ${activeIndex === index ? "z-30 bg-[#F3F6FB] rounded-[16px_16px_0px_0px]" : "border-textGray border-[0.5px]"} mt-5`}
                    >
                        <button
                            onClick={() => toggleAccordion(index)}
                            className={`${activeIndex === index ? "z-30 lg:p-[23px] md:p-[19px] p-[15px]" : "p-4 lg:p-[23px] bg-white"} w-full text-left bg-textBlue flex items-center justify-between border-[0.5px] border-[#FFFFFF4D] transition ease-in-out `}
                        >
                            <span className={`${activeIndex === index ? "text-white" : "text-black"} font-poppins font-medium max-sm:text-sm max-sm:leading-5 text-base z-30 text-10xl leading-6`}>{faq.question}</span>
                            <span className="float-right z-30">
                                <div className={`${activeIndex === index ? "transform rotate-180 hidden" : ""} flex justify-center items-center size-6 bg-textBlue rounded-[50px]`}>
                                    <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.37237 0.103711C1.67927 -0.0614753 2.05901 0.00145294 2.29623 0.256808L3.34936 1.39045C4.44429 2.56909 6.30995 2.56909 7.40488 1.39045L8.458 0.256807C8.69522 0.00145254 9.07496 -0.0614752 9.38186 0.103711C9.82325 0.341274 9.92111 0.931834 9.57995 1.29907L7.592 3.43902C6.39603 4.72643 4.3582 4.72643 3.16223 3.43902L1.17428 1.29907C0.833123 0.931834 0.930986 0.341274 1.37237 0.103711Z" fill="white" />
                                    </svg>
                                </div>
                                <div className={`${activeIndex === index ? "block" : "hidden"} flex justify-center items-center size-6 bg-white rounded-[50px]`}>
                                    <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.6908 5.48822L5.50033 2.059L9.30985 5.48822L10.8337 4.80237L5.50033 0.00146506L0.166992 4.80237L1.6908 5.48822Z" fill="#084CAF" />
                                    </svg>
                                </div>
                            </span>
                        </button>
                        <div
                            className={`overflow-hidden ease-linear ${activeIndex === index ? "h-auto" : "max-h-0"
                                }`}
                        >
                            <div className="font-font_gilroy_regular font-normal text-xl max-sm:text-[16px] max-md:text-lg max-md:leading-[28px] max-sm:leading-[24px] max-w-[821px] leading-[28px] text-textGray lg:p-[23px] md:p-[19px] p-[15px]">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Faqs
