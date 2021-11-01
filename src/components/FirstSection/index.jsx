import { SliderData } from './../../data/SliderData';
import Image from "next/image";
import SliderImage from "../Slider";
const FirstSection = () => {

  return (
    <div className="flex mx-auto container">
    
    
      <div className="relative top-16 left-44">
      <SliderImage slides={SliderData}/>
        <div className="transform -rotate-90 absolute -right-96 -mr-8 top-24 tracking-headerLetterSpacing text-gray-300 font-LeagueSpartan">
          FIRST SURFING MAGAZINE
        </div>
        <div className=" absolute -right-56 bottom-32 tracking-headerLetterSpacing text-gray-300 font-semibold">
          <div className="my-4 cursor-pointer">
            <Image src="/img/tumblr.png" width={18} height={20} alt="tumbl icon" />
          </div >
          <div className="my-4 cursor-pointer">
            <Image src="/img/twitter.png" width={18} height={20} alt="twitter icon"/>
          </div>
          <div className="my-4 cursor-pointer">
            <Image src="/img/vimeo.png" width={18} height={20} alt="vimeo icon"/>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default FirstSection;
