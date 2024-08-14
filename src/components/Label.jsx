import ImagePicker from '../components/ImagePicker'
import overviewImg1 from '../assets/images/webp/overview-one.webp'
import overviewImg2 from '../assets/images/webp/overview-two.webp'
import overviewImg3 from '../assets/images/webp/overview-three.webp'

const Label = () => {
  return (
    <div className='common_padding' id='label'>
      <div className="container">
        <div className="row mx-auto items-center lg:items-end">
          <div className="w-full md:w-1/2 lg:w-5/12 md:pr-4 max-md:flex max-md:justify-center">
            <div className='max-w-[600px] max-md:max-w-[541px] max-md:w-full'>
              <h2 className="font-gilroy font_gilroy_medium text-4xl sm:text-5xl md:leading-[57px] max-w-[460px] max-md:text-center max-md:mx-auto">
                Add <span className="text-blue">Label</span> of an Image
              </h2>
              <p className="text-base font-normal leading-6 text-gray pt-4 pb-4 sm:pb-6 max-md:text-center">
                Efficient and Accurate Labeling on Image.
              </p>
              <div className="p-4 sm:p-5 border-[0.5px] border-blue border-solid rounded-2xl">
                <p className="font-semibold text-base leading-6">
                  Upload Image and add label
                </p>
                <div>
                  <ImagePicker />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-7/12 flex justify-center md:justify-end md:pl-4">
            <div className='w-full lg:min-h-[509px] lg:max-w-[598px] relative max-md:max-w-[541px]'>
              <img className='pointer-events-none shadow-overviewShadow rounded-2xl lg:max-w-[399px] w-full mt-8' src={overviewImg1} alt="overviewImg1" />
              <img className='absolute right-0 top-0 pointer-events-none lg:max-w-[191px] w-full rounded-2xl shadow-overviewShadow lg:h-[241px] max-lg:hidden' src={overviewImg2} alt="overviewImg2" />
              <img className='pointer-events-none lg:absolute bottom-0 w-full shadow-overviewShadow right-0 rounded-2xl lg:max-w-[368px] mt-5 max-lg:mt-4 max-lg:shadow-overviewShadow' src={overviewImg3} alt="overviewImg3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Label;
