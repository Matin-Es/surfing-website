import Image from "next/image";
import Link from "next/link";
import ArticleTitle from "../ArticleTitle";

const FifthSection = () => {
  return (
    <div className="container mx-auto text-center flex mt-36 relative left-36">
      <div>
        <p className="text-gray-300 text-xs tracking-headerLetterSpacing relative top-14 -right-12 font-LeagueSpartan w-36 transform -rotate-90">
          SURF CAMPS
        </p>
      </div>
      <div className="mr-36">
        <Image
          quality={100}
          src="/img/surfBoardOnBeach.png"
          width={589}
          height={539}
          alt="Surf Board at the Beach"
        />
      </div>
      <div className="relative right-10 mt-32">
        <ArticleTitle title="Point Break" />
        <div className="text-left font-Poppins text-gray-500 mt-10">
          <p>By better understanding the various aspects of</p>
          <p>By better understanding the various aspects of</p>
          <p>surfing, By better understanding the various</p>
          <p>aspects of surfing. now you will improve faster and</p>
          <p>have more fun in the water</p>
        </div>
        <div className="mt-20">
          <p className="tracking-headerLetterSpacing text-xs text-left font-LeagueSpartan">
            <Link href="/">READ MORE</Link>
          </p>
          <div className="border-b-2 mb-2 border-blue-400 w-32 text-left mt-2"></div>
        </div>
      </div>
      <div className="border-l-4 mb-2 border-blue-300 inline-block h-32 absolute left-60 ml-96 mt-96 top-80"></div>
    </div>
  );
};

export default FifthSection;
