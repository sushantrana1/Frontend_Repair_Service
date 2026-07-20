import Hero from "../components/Hero"
import Services from "../components/Service/Services"
import WhyChooseUs from "../components/Wcu/WhyChooseUs";
import Process from "../components/Process/Process";
import CTA from "../components/CTA";
import Stats from "../components/Stats";
import Testimonials from "../components/TestimonialCard";


const home = () => {
  return (
    <>
    <Hero/>
    <Services/> 
    <WhyChooseUs/>
    <Process/>
    <CTA/>
    <Stats/>
    <Testimonials/>
    </>
  )
}

export default home
