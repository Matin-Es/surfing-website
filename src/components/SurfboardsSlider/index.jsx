import { SurfboardCardData } from "../../data/SurfboardCardData";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";

//custom arrow for products slider
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "gray",
        borderRadius: "100%",
        border: "0px",
      }}
      onClick={onClick}
    />
  );
}

//custom arrow for products slider
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "gray",
        borderRadius: "100%",
        border: "0px",
      }}
      onClick={onClick}
    />
  );
}

//products slider settings
var settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: true,
  autoplaySpeed: 2500,
  autoplay: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};
const SurfboardsSlider = () => {
  return (

    //it wraps cards and shows them in a slider
    <Slider {...settings}>

       {/* gets data from fake db and maps it through elements  */}
      {SurfboardCardData.map((card) => {
        return (
          <div className="w-64 mx-24" key={card._id}>
            <div className="bg-gray-200 w-64 h-80 mt-44">
              <div className="relative bottom-28">
                <Image src={card.image} width={123} height={412} alt={card.alt} />
              </div>
              <div className="relative bottom-80 left-52">
                <div>
                  <p className="font-Poppins font-semibold text-xs tracking-widest text-left ml-5 text-gray-400">
                    {card.category}
                  </p>
                </div>
                <div>
                  <h3 className="font-PlayfairRegular text-2xl text-left font-medium ml-5 ">
                    {card.name}
                  </h3>
                </div>
                <div className="mt-7 ml-5">
                  <span className="text-pink-300 font-semibold text-xl mr-24 font-Poppins">
                    {card.price}
                  </span>
                </div>
                <div className="tracking-widest ml-5 text-xs font-LeagueSpartan mt-1 mr-28 text-gray-700">
                  <Link href="/">BUY</Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default SurfboardsSlider;
