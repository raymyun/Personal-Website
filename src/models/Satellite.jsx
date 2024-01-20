import { useRef, useEffect } from 'react'

import satelliteScene from '../assets/3d/satellite.glb';
import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Satellite = () => {
    const satelliteRef = useRef();
    const { scene, animations } = useGLTF(satelliteScene);
    const { actions } = useAnimations(animations, satelliteRef);

    // useEffect (() => {
    //     actions['Take 001'].play();
    // }, []);

    useFrame(({ clock, camera }) => {
        //Sourced code from ChatGPT to update Y position to simulate flight like the curves of a sin graph
        satelliteRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2

        if (satelliteRef.current.position.x > camera.position.x + 10) {
            satelliteRef.current.rotation.y = Math.PI;
        }
        else if (satelliteRef.current.position.x < camera.position.x - 10) {
            satelliteRef.current.rotation.y = 0;
        }

        if (satelliteRef.current.rotation.y === 0) {
            satelliteRef.current.position.x += 0.01;
            satelliteRef.current.position.z -= 0.01;
            satelliteRef.current.rotation.x += 0.01;
            satelliteRef.current.rotation.z -= 0.01;
        }
        else {
            satelliteRef.current.position.x -= 0.01;
            satelliteRef.current.position.z += 0.01;
            satelliteRef.current.rotation.x += 0.01;
            satelliteRef.current.rotation.z -= 0.01;
        }
    })

    return (
        <mesh position = {[-5, 2, 1]} scale={[0.4, 0.4, 0.4]} ref={satelliteRef}>
            <primitive object = {scene} />
        </mesh>
    )
}

export default Satellite