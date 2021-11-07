import ReactPlayer from "react-player";
import Image from "next/image";
import Link from "next/link";

const SecondSection = () => {
  return (
    <div className="container mx-auto text-center mt-80 justify-center items-center">
      <h2 className="text-4xl font-PlayfairRegular relative">
        Surfing is the most blissful experience you can have
        <br />
        on this plane, a taste of heaven
      </h2>
      <p className="text-base font-semibold mt-10 font-LeagueSpartan tracking-headerLetterSpacing">
        JOHN MCCARTHY
      </p>
      <div className="border-l-4 border-blue-300 h-32 inline-block mt-11"></div>
      <div className="mt-11">
        <div className="relative right-80 bottom-0">
          <Image src="/img/manWithSurfBoard.png" width={640} height={380} alt="man with surfing board"/>
        </div>

        <div className="relative video bottom-80 w-max ml-96 left-72">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=O_aXrxyoiVE"
            width="810px"
            height="549px"
            playing
            playIcon={
              <Image src="/img/playButton.png" width={68} height={68} alt="Play button" />
            }
            light="/img/videoPoster.png"
           
          />
        </div>
        <div className="text-left leading-loose relative font-Poppins -top-96 left-60 -mt-28 text-gray-400">
          <p>By better undestanding the various aspects of</p>
          <p>surfing, you will improve faster and have more</p>
          <p>fun in the water</p>
          <p className="font-extrabold font-LeagueSpartan mt-10 text-sm tracking-headerLetterSpacing text-gray-900">
            <Link href="#">READ MORE</Link>
          </p>
          <div className="border-b-2 mb-2 border-blue-400 inline-block w-32"></div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
