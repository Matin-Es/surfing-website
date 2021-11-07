import Link from "next/link";
import Image from "next/image";

const SeventhSection = () => {
  return (
    <div className="container mx-auto text-center flex mt-40">
      <div className="mr-16 relative right-20">
        <Image
          quality={100}
          src="/img/beachFriends.png"
          width={850}
          height={510}
          alt="friends at the beach"
        />
      </div>
      <div className="relative right-10 mt-28">
        <div>
          <p className="text-gray-300 text-xs relative text-left right-10 tracking-headerLetterSpacing font-LeagueSpartan">
            OUR CAMP
          </p>
        </div>
        <div>
          <h2 className="font-PlayfairBold text-4xl leading-normal font-semibold text-left mt-12">
            GA 91932, USA <br /> Imperial Beach <br /> 560 Silver Strand Blvd
          </h2>
        </div>

        <div className="mt-12">
          <p className="tracking-headerLetterSpacing text-xs text-blue-400 text-left relative right-10 font-LeagueSpartan">
            <Link href="/">GET IN TOUCH</Link>
          </p>
          <div className="border-b-2 mb-2 border-blue-400 w-40 text-left relative right-10 mt-2"></div>
        </div>
      </div>
    </div>
  );
};

export default SeventhSection;
