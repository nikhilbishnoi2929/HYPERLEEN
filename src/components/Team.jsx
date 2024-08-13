import manImg from '../assets/images/webp/out-team-man-img.webp'
import womenImg from '../assets/images/webp/out-team-women-img.webp'
import ellipsImg from '../assets/images/webp/out-team-ellips.png'
import { FacebookLogo, InstgramLogo, LinkedinLogo, MailIcon, PhnCallImg } from '../common/Icon'
const Team = () => {
  return (
    <div className='bg-ourTeam bg-no-repeat bg-center md:bg-full bg-cover lg:py-[183px] py-40 relative'>
      <div className='left-0 absolute z-0 top-0 lg:block hidden h-[1548px]'>
        <img src={ellipsImg} alt="ellips" width={313} className='h-full' />
      </div>
      <div className='container'>
        <h1 className='text-center text-white font-gilroy font-medium md:text-5xl text-4xl'>Our Team</h1>
        <p className='text-white text-center max-w-[411px] mx-auto opacity-70 pt-4'>
          Meet our dedicated team of experts ensuring precision and quality in every data labeling task.
        </p>
        <div className='row mt-14 justify-center'>
          <div className='lg:w-1/2 px-3'>
            <div className='max-w-[560px] rounded-2xl relative'>
              <div className='shadow-mediaIcon absolute top-0 right-0 border-t-[0.5px] border-r-[0.5px] border-[#084CAF52] max-w-12 py-4 px-2'>
                <a href='https://www.linkedin.com/login' target='_blank' className='size-8 bg-blue flex items-center justify-center rounded-full'>
                  <LinkedinLogo />
                </a>
                <a href='https://www.facebook.com/login/' target='_blank' className='size-8 bg-blue flex items-center justify-center rounded-full mt-4'>
                  <FacebookLogo />
                </a>
                <a href='https://www.instagram.com/accounts/login/?hl=en' target='_blank' className='size-8 bg-blue flex items-center justify-center rounded-full mt-4'>
                  <InstgramLogo />
                </a>
              </div>
              <img src={manImg} alt="team man img" width={560} height={393} />
              <div className='bg-white pt-8 px-4 pb-4 rounded-br-2xl rounded-es-2xl'>
                <div className='flex items-center justify-between max-sm:flex-wrap'>
                  <div className='flex flex-col items-start'>
                    <h1 className='font-gilroy font-semibold text-2xl text-black capitalize'>Mark Butler</h1>
                    <p className='sm:pt-1 text-black text-lg'>Lead Data Annotator</p>
                  </div>
                  <div className='flex flex-col items-start pt-2'>
                    <a href='tel:90909090' className='flex items-center gap-3 hover:underline ease-linear duration-500'>
                      <PhnCallImg />
                      <p className='text-blue'>972.215.8214</p>
                    </a>
                    <a href='mailto:90909090' className='flex items-center gap-3 sm:pt-2 hover:underline ease-linear duration-500'>
                      <MailIcon />
                      <p className='text-blue'>darrin.araki@cbpacific.com</p>
                    </a>
                  </div>
                </div>
                <p className='font-poppins text-gray pt-6'>Sarah Thompson brings over five years of experience in data labeling and annotation to our team. With a keen eye for detail and a passion for precision, Sarah leads our team of annotators, ensuring every piece of data is meticulously labeled and verified.</p>
              </div>
            </div>
          </div>
          <div className='lg:w-1/2 px-3 max-lg:mt-3'>
            <div className='max-w-[560px] rounded-2xl relative'>
              <div className='shadow-mediaIcon absolute top-0 right-0 border-t-[0.5px] border-r-[0.5px] border-[#084CAF52] max-w-12 py-4 px-2'>
                <a href='https://www.linkedin.com/login' target='_blank' className='size-8 bg-blue flex items-center justify-center rounded-full'>
                  <LinkedinLogo />
                </a>
                <a href='https://www.facebook.com/login/' target='_blank' className='size-8 bg-blue flex items-center justify-center rounded-full mt-4'>
                  <FacebookLogo />
                </a>
                <a href='https://www.instagram.com/accounts/login/?hl=en' target='_blank' className='size-8 bg-blue flex items-center justify-center rounded-full mt-4'>
                  <InstgramLogo />
                </a>
              </div>
              <img src={womenImg} alt="team man img" width={560} height={393} />
              <div className='bg-white pt-8 px-4 pb-4 rounded-br-2xl rounded-es-2xl'>
                <div className='flex items-center justify-between max-sm:flex-wrap'>
                  <div className='flex flex-col items-start'>
                    <h1 className='font-gilroy font-semibold text-2xl text-black capitalize'>Corinne Crabtree </h1>
                    <p className='sm:pt-1 text-black text-lg'>Lead Data Annotator</p>
                  </div>
                  <div className='flex flex-col items-start pt-2'>
                    <a href='tel:90909090' className='flex items-center gap-3 hover:underline ease-linear duration-500'>
                      <PhnCallImg />
                      <p className='text-blue font-poppins'>972.215.8214</p>
                    </a>
                    <a href='mailto:@gmail.com' className='flex items-center gap-3 sm:pt-2 hover:underline ease-linear duration-500'>
                      <MailIcon />
                      <p className='text-blue'>darrin.araki@cbpacific.com</p>
                    </a>
                  </div>
                </div>
                <p className='font-poppins text-gray pt-6'>Sarah Thompson brings over five years of experience in data labeling and annotation to our team. With a keen eye for detail and a passion for precision, Sarah leads our team of annotators, ensuring every piece of data is meticulously labeled and verified.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team
