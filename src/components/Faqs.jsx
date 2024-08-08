import React, { useState } from 'react'

const Faqs = () => {
    const FAQS = [
        {
            question: "What is 1v2 Studio?",
            answer:
                "1v2 Studio is an indie game development studio dedicated to creating innovative and engaging experiences on the Roblox platform.",
        },
        {
            question: "How can I contact 1v2 Studio?",
            answer:
                "1v2 Studio is an indie game development studio dedicated to creating innovative and engaging experiences on the Roblox platform.",
        },
        {
            question: "Is Lenard The Lemur secure?",
            answer:
                "1v2 Studio is an indie game development studio dedicated to creating innovative and engaging experiences on the Roblox platform.",
        },
        {
            question: "What types of games does 1v2 Studio develop?",
            answer:
                "1v2 Studio is an indie game development studio dedicated to creating innovative and engaging experiences on the Roblox platform.",
        },
        {
            question: "Can I collaborate with 1v2 Studio on a game project?",
            answer:
                "1v2 Studio is an indie game development studio dedicated to creating innovative and engaging experiences on the Roblox platform.",
        },
    ];
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
                            className={`overflow-hidden ease-linear ${activeIndex === index ? " z-30 border-[0.5px] border-textBlue bg-textBlue rounded-[16px_16px_0px_0px]" : "border-transparent"} mt-6`}
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className={`${activeIndex === index ? "p-[10px_10px_0px_10px] z-30 lg:p-[21px_20px_0px_20px] border-transparent" : "p-2 lg:p-[21px_20px]"} w-full text-left bg-blur_black backdrop-blur-lg flex items-center justify-between border-[1px] border-[#FFFFFF4D] transition ease-in-out `}
                            >
                                <span className="font-poppins  font-medium text-base leading-6 z-30 text-10xl md:leading-[26px] lg:leading-9 text-white">{faq.question}</span>
                                <span className="float-right z-30">
                                    <svg width="40" className={`${activeIndex === index ? "transform rotate-180 hidden" : ""} w-[32px] h-[32px] md:w-[40px] md:h-[40px]`} height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="20" cy="20" r="19.5" stroke="white" />
                                        <path d="M21 13C21 12.4477 20.5523 12 20 12C19.4477 12 19 12.4477 19 13V18.9999L13 18.9999C12.4477 18.9999 12 19.4476 12 19.9999C12 20.5522 12.4477 20.9999 13 20.9999L19 20.9999V27C19 27.5523 19.4477 28 20 28C20.5523 28 21 27.5523 21 27V20.9999L27 20.9999C27.5523 20.9999 28 20.5522 28 19.9999C28 19.4476 27.5523 18.9999 27 18.9999L21 18.9999V13Z" fill="white" />
                                    </svg>
                                    <svg className={`${activeIndex === index ? "block" : "hidden"} w-[32px] h-[32px] md:w-[40px] md:h-[40px]`} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="20" cy="20" r="19.5" stroke="white" />
                                        <path d="M13 19L19 19H21L27 19C27.5523 19 28 19.4477 28 20C28 20.5523 27.5523 21 27 21L21 21L19 21L13 21C12.4477 21 12 20.5523 12 20C12 19.4477 12.4477 19 13 19Z" fill="white" />
                                    </svg>
                                </span>
                            </button>
                            <div
                                className={`overflow-hidden ease-linear ${activeIndex === index ? "h-auto" : "max-h-0"
                                    }`}
                            >
                                <div className="font-poppins font-normal text-[15px] leading-[20px] lg:text-[18px] lg:leading-[28px] opacity-70 text-white max-w-[759px] p-[2px_8px_8px_8px] lg:p-[6px_20px_17px_20px]">
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
