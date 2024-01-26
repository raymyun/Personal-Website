import { useState, Suspense, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'

import Planet from '../models/Planet';
import Sky from '../models/Sky';
import Satellite from '../models/Satellite';
import Spaceship from '../models/Spaceship';
import Meteor from '../models/Meteor';
import HomeInfo from '../components/HomeInfo';

import ambientspace from '../assets/ambientspace.mp3'
import { soundoff, soundon } from '../assets/icons';

const Home = () => {
  //Initialize audio refs and states
  const audioRef = useRef(new Audio(ambientspace));
  audioRef.current.volume = 0.1;
  audioRef.current.loop = true;
  const [isPlayingMusic, setIsPlayingMusic] = useState(true);

  //Initialize rotation of home screen states
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

  //Handle play/pause audio
  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }
    return () => {
      audioRef.current.pause();
    }
  }, [isPlayingMusic])

  const adjustPlanetForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [1, 0.9, 0.9];
    }
    else {
      screenScale = [20, 20, 20];
    }

    return [screenScale, screenPosition, rotation];
  }

  //Need to tinker with this a bit more
  const adjustSpaceshipForScreenSize = () => {
    let screenScale = null;
    let screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [0.001, 0.001, 0.001];
      screenPosition = [0, -1.5, 0];
    }
    else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  }

  const [planetScale, planetPosition, planetRotation] = adjustPlanetForScreenSize();
  //const [spaceshipScale, spaceshipPosition] = adjustSpaceshipForScreenSize();

  return (
    <section className="w-full h-screen relative">
    <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center text-white">
      {currentStage && <HomeInfo currentStage={currentStage} />}
    </div> 

      <Canvas 
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position = {[1, -5, -43]} intensity = {2} />
          <ambientLight intensity = {1} />
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={2} />

          <Satellite />

          <Meteor />

          <Sky isRotating={isRotating} />

          <Planet 
            position = {planetPosition}
            scale = {planetScale}
            rotation = {planetRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />

          <Spaceship />

        </Suspense>
      </Canvas>

      <div className="absolute bottom-2 left-2">
        <img 
          src={!isPlayingMusic ? soundoff : soundon}
          alt="sound"
          className="w-10 h-10 cursor-pointer object-contain"
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
        />
      </div>
    </section>
  )
}

export default Home