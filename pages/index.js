import Header from "../src/components/Header";
import FirstSection from "./../src/components/HeadSlider";
import SecondSection from "../src/components/VideoSection";
import ThirdSection from './../src/components/ProductsSection';
import FourthSection from '../src/components/BlogOne';
import FifthSection from '../src/components/BlogTwo';
import SixthSection from '../src/components/JoinTheClub';
import SeventhSection from '../src/components/AddressSection';
import Footer from './../src/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <FirstSection />
      <SecondSection />
      <ThirdSection/>
      <FourthSection/>
      <FifthSection/>
      <SixthSection/>
      <SeventhSection/>
      <Footer/>
      
    </>
  );
}
