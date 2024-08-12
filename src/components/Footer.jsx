import React from 'react';
import logoPage from '../assets/images/webp/logoPage.webp';
import { FOOTER_CONTACT, FOOTER_FOLLOW, FOOTER_ITEM_FIRST, FOOTER_ITEMS, FOOTER_LINKS, FOOTER_POLICY, FOOTER_TEAM } from '../common/Commonhelper';
import { FACEBOOK, IN_LINK, INSTAGRAM, TWITTER } from '../common/Icon';
const Footer = () => {
    return (
        <div className='bg-footerBg bg-100% max-lg:bg-cover bg-no-repeat'>
            <div className='container max-w-[1164px] mx-auto px-3'>
                <div className='row pt-[160px] max-lg:pt-[120px] max-md:pt-[100px] max-sm:pt-[80px] pb-[56px]'>
                    <div className='lg:w-4/12 w-full px-3 flex'>
                        <div className='flex flex-col'>
                            <img className='w-full h-[135px] max-w-[117px]' src={logoPage} alt="logoPage" />
                            <p className=' pt-5 max-sm:text-sm font-normal text-base leading-6 text-white lg:max-w-[279px] opacity-70'>Lorem ipsum dolor sit amet consectetur. Massa ac commodo duis amet et ut. Tincidunt faucibus integer risus id at.</p>
                        </div>
                    </div>
                    <div className='lg:w-2/12 md:w-3/12 sm:w-4/12 w-6/12 max-lg:pt-8 px-3 flex lg:justify-end'>
                        <ul className='lg:pr-3'>
                            {FOOTER_ITEM_FIRST.map((item, index) =>
                                <li key={index}>
                                    <a href={item.href} className=' font-normal text-lg text-white leading-7'>
                                        {item.text}
                                    </a>
                                </li>
                            )}
                            {FOOTER_ITEMS.map((item, index) =>
                                <li key={index} className=' pt-5'>
                                    <a href={item.href} className=' font-normal text-base hover:opacity-100 custom_Duration text-white leading-6 opacity-70'>
                                        {item.text}
                                    </a>
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className='lg:w-1/12 md:w-3/12 sm:w-4/12 w-6/12 max-lg:pt-8 px-3 flex lg:justify-end'>
                        <ul>
                            {FOOTER_LINKS.map((item, index) =>
                                <li key={index}>
                                    <a href={item.href} className=' font-normal text-lg text-white leading-7'>
                                        {item.text}
                                    </a>
                                </li>
                            )}
                            {FOOTER_TEAM.map((item, index) =>
                                <li key={index} className=' pt-5'>
                                    <a href={item.href} className=' hover:opacity-100 custom_Duration font-normal text-base text-white leading-6 opacity-70'>
                                        {item.text}
                                    </a>
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className='lg:w-3/12 md:w-3/12 sm:w-4/12 w-6/12 max-lg:pt-8 px-3 flex lg:justify-center'>
                        <ul className='lg:pl-2'>
                            {FOOTER_POLICY.map((item, index) =>
                                <li key={index}>
                                    <a href={item.href} className=' text-nowrap font-normal text-lg text-white leading-7'>
                                        {item.text}
                                    </a>
                                </li>
                            )}
                            {FOOTER_CONTACT.map((item, index) =>
                                <li key={index} className=' pt-5'>
                                    <a href={item.href} className=' hover:opacity-100 custom_Duration text-nowrap font-normal text-base text-white leading-6 opacity-70'>
                                        {item.text}
                                    </a>
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className='lg:w-2/12 md:w-3/12 sm:w-full w-6/12 max-lg:pt-8 px-3 flex lg:justify-end'>
                        <div className=' flex-col flex'>
                            <ul>
                                {FOOTER_FOLLOW.map((item, index) =>
                                    <li key={index}>
                                        <a href={item.href} className=' font-normal text-lg text-white leading-7'>
                                            {item.text}
                                        </a>
                                    </li>
                                )}
                            </ul>
                            <div className=' pt-5 gap-3 max-sm:gap-5 max-sm:flex-col flex'>
                                <div className=' flex gap-3 max-sm:gap-5'>
                                    <a href="https://www.facebook.com/" target='blank_'>
                                        <div className=' size-[32px] rounded-[50px] border-[1px] border-textBlue hover:border-white custom_Duration hover_Effect bg-white flex justify-center items-center'>
                                            <FACEBOOK />
                                        </div>
                                    </a>
                                    <a href="https://x.com/?lang=en" target='blank_'>
                                        <div className='size-[32px] rounded-[50px] border-[1px] border-textBlue hover:border-white custom_Duration hover_Effect bg-white flex justify-center items-center'>
                                            <TWITTER />
                                        </div>
                                    </a>
                                </div>
                                <div className=' flex gap-3 max-sm:gap-5'>
                                    <a href="https://www.facebook.com/" target='blank_'>
                                        <div className='size-[32px] hover:border-white custom_Duration hover_Effect rounded-[50px] border-[1px] border-textBlue bg-white flex justify-center items-center'>
                                            <IN_LINK />
                                        </div>
                                    </a>
                                    <a href="https://www.instagram.com/" target='blank_'>
                                        <div className='size-[32px] hover:border-white custom_Duration hover_Effect rounded-[50px] border-[1px] border-textBlue bg-white flex justify-center items-center'>
                                            <INSTAGRAM />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-white opacity-10 w-full h-[1px]'></div>
            <div className='flex justify-center pb-[43px] pt-5'>
                <h3 className='font-normal text-base leading-6 text-white opacity-70'>© 2024 Hyperleen, All Rights reserved.</h3>
            </div>
        </div>
    )
}

export default Footer
