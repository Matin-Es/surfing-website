import Image from "next/image";

const SixthSection = () => {
  return (
    <div className="container mx-auto text-center mt-96">
      <div>
        <h2 className="text-5xl font-PlayfairBold font-bold text-gray-700 ">
          Join the Club
        </h2>
      </div>
      <div className="font-Poppins text-gray-400 text-lg font-semibold mt-12">
        <p>
          By better understanding the various aspects of surfing. you will
          improve faster
        </p>
        <p>and have more fun in the water.</p>
      </div>
      <div className=" text-center mx-auto bg-gray-100 shadow-inner mt-10 flex w-5/12 h-5 p-7 items-center justify-center">
        <div className="flex text-center mx-auto">
          <input
            className="w-inputWidth h-10 text-sm px-5 outline-none font-LeagueSpartan text-gray-400 bg-transparent mt-2 placeholder-gray-500"
            type="email"
            placeholder="YOUR E-MAIL"
            name="email"
            id="email"
          />

          <div className="bg-blue-400 w-14 h-14 text-white ">
            <button className="w-full h-full">
              <Image src="/img/whiteRightArrow.png" width={15} height={15} alt="right arrow" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SixthSection;
