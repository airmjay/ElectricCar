"use Client"
import AboutUs from './Pages/_libs/AboutUs/page';
import Banner from './Pages/_libs/Banner/page'
import Faqs from './Pages/_libs/Faqs/Page';
import Footer from './Pages/_libs/Footer/page';
import HowItWorks from './Pages/_libs/HowItWork/page';
import HowWeWork from './Pages/_libs/HowWeHelp/page';
import OurBlog from './Pages/_libs/OurBlog/page';
import OurMobile from './Pages/_libs/OurMobile/page';
import WhoWeAre from './Pages/_libs/WhoWeAre/page';

export default function Home() {
  return (
    <>
      <Banner/>
      <WhoWeAre/>
      <HowItWorks/>
      <HowWeWork/>
      <AboutUs/>
      <Faqs/>
      <OurBlog/>
      <OurMobile/>
      <Footer/>
    </>
  );
}
