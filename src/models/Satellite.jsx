import React from 'react'

import satelliteScene from '../assets/3d/satellite.glb';
import { useGLTF } from '@react-three/drei';

const Satellite = () => {
    const { scene, animations } = useGLTF(satelliteScene);
    return (
        <mesh position = {[-5, 2, 1]} scale={[0.1, 0.1, 0.1]}>
            <primitive object = {scene} />
        </mesh>
    )
}

export default Satellite