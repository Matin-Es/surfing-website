import Link from "next/link";
import Image from "next/image";
const FourthSection = () => {
  return (
    <div className="container mx-auto text-center flex mt-60 relative left-28">
      <div className="mr-20">
        <div>
          <h2 className="font-PlayfairBold text-5xl font-semibold text-left">
            SurfTraining
          </h2>
          <div className="border-b-4 mb-2 border-blue-400 w-5 text-left mt-2"></div>
        </div>
        <div className="text-left font-Poppins text-gray-500 mt-10">
          <p>By better understanding the various aspects of</p>
          <p>surfing, By better understanding the various</p>
          <p>aspects of surfing. now you will improve faster and</p>
          <p>have more fun in the water</p>
        </div>
        <div className="mt-20">
          <p className="tracking-headerLetterSpacing text-left text-xs font-LeagueSpartan">
            <Link href="/">READ MORE</Link>
          </p>
          <div className="border-b-2 mb-2 border-blue-400 w-32 text-left mt-2"></div>
        </div>
      </div>
      <div>
        <Image
          quality={100}
          src="/img/surfingMan.png"
          width={892}
          height={500}
          alt="Surfing man"
        />
      </div>
      <div>
        <p className="text-gray-300 text-xs tracking-headerLetterSpacing font-LeagueSpartan absolute right-16 top-14 w-36 transform -rotate-90">
          SURF CAMPS
        </p>
      </div>
    </div>
  );
};

export default FourthSection;
