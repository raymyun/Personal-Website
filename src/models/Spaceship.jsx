import { useRef, useEffect } from 'react'

import spaceshipScene from '../assets/3d/spaceship.glb';
import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Spaceship = () => {
//const Spaceship = ({ isRotating, ...props }) => {
    const ref = useRef();
    const { scene, animations } = useGLTF(spaceshipScene);
    const { actions } = useAnimations(animations, ref);

    useFrame(({ clock, camera }) => {
        //Sourced code from ChatGPT to update Y position to simulate flight like the curves of a sin graph
        ref.current.position.y = Math.sin(clock.elapsedTime) * 3 -5
    })

    return (
        <mesh position = {[-1, 2, -15]} scale={[0.005, 0.005, 0.005]} rotation = {[0, 20, 0]} ref={ref}>
            <primitive object = {scene} />
        </mesh>
    )
}

export default Spaceship