import SurfboardsSlider from "./../SurfboardsSlider";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ThirdSection = () => {
  return (
    <div className="container mx-auto text-center -mt-28">
      <p className="font-Poppins tracking-headerLetterSpacing text-blue-400 font-bold">
        SHOP
      </p>
      <h2 className="font-Playfair text-5xl text-gray-700 font-semibold">
        Surfboards
      </h2>

      <SurfboardsSlider />

      <div className="mt-5">
        <p className="tracking-headerLetterSpacing font-LeagueSpartan">
          <Link href="/">SHOW ALL</Link>
        </p>
        <div className="border-b-2 mb-2 border-blue-400 inline-block w-40"></div>
      </div>
    </div>
  );
};

export default ThirdSection;
