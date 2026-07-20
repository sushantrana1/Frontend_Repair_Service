import React from 'react'
import AboutHero from '../components/About/AboutHero'
import OurStory from "../components/About/OurStory";
import WhoWeAre from "../components/About/WhoWeAre";
import MissionVision from "../components/About/MissionVision";

const About = () => {
  return (
    <>
      <AboutHero/>
      <MissionVision />
      <OurStory/>
      <WhoWeAre/>
    </>
  )
}

export default About
