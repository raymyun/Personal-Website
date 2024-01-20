import { useState, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'

import Planet from '../models/Planet';
import Sky from '../models/Sky';
import Satellite from '../models/Satellite';
import Spaceship from '../models/Spaceship';

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);

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

    return [screenScale, screenPosition, rotation]
  }

  const [planetScale, planetPosition, planetRotation] = adjustPlanetForScreenSize();

  return (
    <section className="w-full h-screen relative">
      {/* <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        POPUP
      </div> */}
      <Canvas 
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position = {[1, -5, -43]} intensity = {2} />
          <ambientLight intensity = {1} />
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={2} />

          <Satellite />

          <Sky />

          <Planet 
            position = {planetPosition}
            scale = {planetScale}
            rotation = {planetRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
          />

          <Spaceship />

        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home