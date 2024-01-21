import React from 'react'
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons'



const InfoBox = ({ text, link, btnText }) => (
    <div className="info-box">
        <p className="font-medium sm:text-xl text-center">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
            {btnText}
            <img src={arrow} className="w-4 h-4 object-contain" />
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
        Hi, I am <span className="font-semibold">Raymond</span>👋🏼
        <br/>
        A Software Engineer based in Los Angeles.
        </h1>
    ),
    2: (
        <InfoBox 
            text="After graduating, I have been exploring many different facets of the tech universe to see what I enjoy most."
            link="/about"
            btnText="More about me"
        />
    ),
    3: (
        <InfoBox 
            text="Worked on several projects and picked up many skills along the way."
            link="/projects"
            btnText="Visit my portfolio"
        />
    ),
    4: (
        <InfoBox 
            text="Need a project done or looking for a dev? I'm just a few keystrokes away!"
            link="/contact"
            btnText="Let's talk"
        />
    ),
}

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo