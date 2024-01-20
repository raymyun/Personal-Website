import { useRef, useEffect } from 'react'

import spaceshipScene from '../assets/3d/spaceship.glb';
import { useAnimations, useGLTF } from '@react-three/drei';

const Spaceship = ({ isRotating, ...props }) => {
    const ref = useRef();
    const { scene, animations } = useGLTF(spaceshipScene);
    const { actions } = useAnimations(animations, ref);

    useEffect(() => {
        if (isRotating) {
            actions['Take 001'].play();
        }
        else {
            actions['Take 001'].stop();
        }
    }, [actions, isRotating])

    return (
        <mesh {...props} ref={ref}>
            <primitive object = {scene} />
        </mesh>
    )
}

export default Spaceship