import Image from "next/image";

const Header = () => {
  return (
    <div className="container mx-auto text-center  flex ">
      <ul className="font-LeagueSpartan text-gray-600 flex justify-left items-left">
        <li className="mt-12 ml-12">
          <Image src="/img/logo.png" quality={100} width={20} height={44} alt="logo"/>
        </li>
        <li className="ml-40 flex tracking-headerLetterSpacing">
        <li className="mt-14 mx-8 cursor-pointer">STORIES</li>
        <li className="mt-14 mx-8 cursor-pointer">EVENTS</li>
        <li className="mt-14 mx-8 cursor-pointer">PLACES</li>
        <li className="mt-14 mx-8 cursor-pointer">BOARDS</li>
        </li>
      </ul>
    </div>
  );
};

export default Header;
