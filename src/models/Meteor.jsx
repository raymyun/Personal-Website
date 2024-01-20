import { useRef, useEffect } from 'react'

import meteorScene from '../assets/3d/meteor.glb';
import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Meteor = () => {
  const meteorRef = useRef();
  const { scene, animations } = useGLTF(meteorScene);
  const { actions } = useAnimations(animations, meteorRef);
  let temp = 0;

  useFrame(({ clock, camera }) => {
    //Sourced code from ChatGPT to update Y position to simulate flight like the curves of a sin graph
    meteorRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2

    if (meteorRef.current.position.x < camera.position.x - 75) {
        meteorRef.current.rotation.y = 0;
    }
    else if (meteorRef.current.position.x > camera.position.x + 50) {
        meteorRef.current.rotation.y = Math.PI;
    }

    if (meteorRef.current.rotation.y === 0) {
        //Hide meteor
        meteorRef.current.position.x += 0.05;
        meteorRef.current.position.z += 0.05;
        meteorRef.current.rotation.x += 0.01;
        meteorRef.current.rotation.z -= 0.01;
    }
    else {
        meteorRef.current.position.x -= 0.05;
        meteorRef.current.position.z -= 0.05;
        meteorRef.current.rotation.x += 0.01;
        meteorRef.current.rotation.z -= 0.01;
    }
})

  return (
    <mesh position = {[10, -2, 0]} scale={[0.05, 0.05, 0.05]} ref={meteorRef}>
        <primitive object = {scene} />
    </mesh>
  )
}

export default Meteor