import Image from "next/image";

const Footer = () => {
  return (

    <div className="container mx-auto text-center mt-36">
      <div>
        <Image src="/img/logo.png" width={16} height={44} alt="logo"/>
      </div>
      <div className="text-center">
        <ul className="font-Poppins font-bold tracking-headerLetterSpacing mt-10 text-gray-500 flex justify-center items-center">
          <li className="mx-7 cursor-pointer">STORIES</li>
          <li className="mx-7 cursor-pointer">EVENTS</li>
          <li className="mx-7 cursor-pointer">PLACES</li>
          <li className="mx-7 cursor-pointer">BOARDS</li>
        </ul>
      </div>
      <div className="mt-10">
        <ul className="flex justify-center items-center">
          <li className="mx-7 cursor-pointer">
            <Image src="/img/tumblr.png" width={20} height={20} alt="tumblr icon" />
          </li>
          <li className="mx-7 cursor-pointer">
            <Image src="/img/twitter.png" width={20} height={20} alt="twitter icon"/>
          </li>
          <li className="mx-7 cursor-pointer">
            <Image src="/img/vimeo.png" width={20} height={20} alt="vimeo icon"/>
          </li>
        </ul>
      </div>
      <div className="my-12"> &nbsp;</div>
    </div>
  
  );
};

export default Footer;
