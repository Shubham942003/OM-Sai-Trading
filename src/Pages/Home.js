import Header from "../Components/Header";
import HomeCarousel from "../Components/HomeCarousel.js";
import HomeHero from "../Components/HomeHero";
import Footer from "../Components/Footer";
import ContactForm from "../Components/ContactForm";
import CardSlider from "../Components/CardSlider";

const Home = () =>
{
    return(
        <>
          <Header/>
          <HomeCarousel/>
          <HomeHero/>
          <CardSlider/>
         <ContactForm/>
          <Footer/>
        </>
    );
}


export default Home;