import React from 'react'
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons'


//InfoBox function to make recurring Infoboxes easier to create
const InfoBox = ({ text, link, btnText }) => (
    <div className="info-box">
        <p className="text-black font-medium sm:text-xl text-center">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
            {btnText}
            <img src={arrow} className="w-4 h-4 object-contain" />
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className="font-medium sm:text-xl sm:leading-snug text-center neo-brutalism-gray opacity-90 py-4 px-8 text-black mx-5">
        Hi, I am <span className="font-semibold text-blue-700">Raymond</span>👋🏼
        <br/>
        A Software Engineer based in Los Angeles.
        <br />
        <span className="font-semibold text-red-700">Spin</span> the world!
        <br />
        Click <span className="font-semibold text-purple-700">Audio</span> (bottom left) for a more immersive experience.
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