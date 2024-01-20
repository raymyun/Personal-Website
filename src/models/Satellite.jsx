import { useRef, useEffect } from 'react'

import satelliteScene from '../assets/3d/satellite.glb';
import { useAnimations, useGLTF } from '@react-three/drei';

const Satellite = () => {
    const satelliteRef = useRef();
    const { scene, animations } = useGLTF(satelliteScene);
    const { actions } = useAnimations(animations, satelliteRef);

    useEffect (() => {
        actions['Take 001'].play();
    }, []);

    return (
        <mesh position = {[-5, 2, 1]} scale={[0.003, 0.003, 0.003]} ref={satelliteRef}>
            <primitive object = {scene} />
        </mesh>
    )
}

export default Satellite