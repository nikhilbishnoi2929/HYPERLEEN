import React, { useState } from 'react'
import { FAQS } from '../common/helper';


const Faqs = () => {
    const [activeIndex, ACCORDION_INDEX] = useState(null);
    const toggleAccordion = (index) => {
        ACCORDION_INDEX(activeIndex === index ? null : index);
    };
    return (
        <div className='max-w-[997px] container px-3 mx-auto'>
            <div className='flex justify-center pt-[160px]'>
                <div className='flex flex-col text-center'>
                    <h2 className='font-font_gilroy_medium font-medium text-textBlue text-5xl leading-[57px] '>FAQs</h2>
                    <p className='font-poppins font-normal text-10xl text-textGray leading-6 pt-4'>You have got Question.  We have got Answer</p>
                </div>
            </div>
            <div className='container max-w-[973px] px-3'>
                <div className='max-w-[480px] sm:max-w-[576px] z-30 md:max-w-[768px] lg:max-w-[884px] mx-auto lg:pt-[72px] md:pt-16 pt-14' data-aos="zoom-in-up">
                    {FAQS.map((faq, index) => (
                        <div
                            key={index}
                            className={`overflow-hidden border-textGray border-[1px] rounded-[16px] ease-linear ${activeIndex === index ? " z-30 rounded-[16px_16px_0px_0px]" : "border-transparent"} mt-6`}
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className={`${activeIndex === index ? "p-[10px_10px_0px_10px] z-30 lg:p-[21px_20px_0px_20px] " : "p-2 lg:p-[21px_20px]"} w-full text-left bg-textBlue flex items-center justify-between border-[0.5px] border-[#FFFFFF4D] transition ease-in-out `}
                            >
                                <span className="font-poppins  font-medium text-base leading-6 z-30 text-10xl md:leading-[26px] lg:leading-9 text-white">{faq.question}</span>
                                <span className="float-right z-30">
                                    <svg className={`${activeIndex === index ? "transform rotate-180 hidden" : ""} w-[32px] h-[32px] md:w-[40px] md:h-[40px]`} width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g filter="url(#filter0_d_315_1039)">
                                            <circle cx="12" cy="12" r="12" transform="matrix(1 0 0 -1 11.5 35.8232)" fill="#084CAF" />
                                            <path d="M19.3724 21.1037C19.6793 20.9385 20.059 21.0015 20.2962 21.2568L21.3494 22.3904C22.4443 23.5691 24.3099 23.5691 25.4049 22.3904L26.458 21.2568C26.6952 21.0015 27.075 20.9385 27.3819 21.1037C27.8232 21.3413 27.9211 21.9318 27.58 22.2991L25.592 24.439C24.396 25.7264 22.3582 25.7264 21.1622 24.439L19.1743 22.2991C18.8331 21.9318 18.931 21.3413 19.3724 21.1037Z" fill="white" />
                                        </g>
                                        <defs>
                                            <filter id="filter0_d_315_1039" x="0.5" y="0.823242" width="46" height="46" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                <feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect1_dropShadow_315_1039" />
                                                <feOffset />
                                                <feGaussianBlur stdDeviation="6" />
                                                <feComposite in2="hardAlpha" operator="out" />
                                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_315_1039" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_315_1039" result="shape" />
                                            </filter>
                                        </defs>
                                    </svg>

                                    <svg className={`${activeIndex === index ? "block" : "hidden"} w-[32px] h-[32px] md:w-[40px] md:h-[40px]`} width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g filter="url(#filter0_d_315_1032)">
                                            <circle cx="22.5" cy="24.8232" r="12" transform="rotate(-90 22.5 24.8232)" fill="white" />
                                        </g>
                                        <path d="M18.6908 27.4882L22.5003 24.059L26.3098 27.4882L27.8337 26.8024L22.5003 22.0015L17.167 26.8024L18.6908 27.4882Z" fill="#084CAF" />
                                        <defs>
                                            <filter id="filter0_d_315_1032" x="0.5" y="0.823242" width="54" height="54" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                <feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect1_dropShadow_315_1032" />
                                                <feOffset dx="5" dy="3" />
                                                <feGaussianBlur stdDeviation="8" />
                                                <feComposite in2="hardAlpha" operator="out" />
                                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_315_1032" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_315_1032" result="shape" />
                                            </filter>
                                        </defs>
                                    </svg>
                                </span>
                            </button>
                            <div
                                className={`overflow-hidden ease-linear ${activeIndex === index ? "h-auto" : "max-h-0"
                                    }`}
                            >
                                <div className="font-font_gilroy_regular font-normal text-xl leading-[28px] text-textGray  p-[2px_8px_8px_8px] lg:p-[6px_20px_17px_20px]">
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Faqs
