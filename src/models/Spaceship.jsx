import React from 'react'

import spaceshipScene from '../assets/3d/spaceship.glb';
import { useGLTF } from '@react-three/drei';

const Spaceship = ({ isRotating, ...props }) => {
    const { scene, animations } = useGLTF(spaceshipScene);
    return (
        <mesh {...props}>
            <primitive object = {scene} />
        </mesh>
    )
}

export default Spaceship