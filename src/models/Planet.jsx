/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: cmzw (https://sketchfab.com/cmzw)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/stylized-planet-789725db86f547fc9163b00f302c3e70
Title: Stylized planet
*/

import { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame, useThree } from '@react-three/fiber'
import { a } from '@react-spring/three'

import planetScene from '../assets/3d/stylized_planet.glb';

const Planet = ({ isRotating, setIsRotating, setCurrentStage, ...props}) => {
  const planetRef = useRef();

  const { gl, viewport } = useThree();
  const { nodes, materials } = useGLTF(planetScene);

  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;

  const handlePointerDown = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);

    const clientX = e.touches 
      ? e.touches[0].clientX 
      : e.clientX;

    lastX.current = clientX;
  }

  const handlePointerUp = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);
  }

  const handlePointerMove = (e) => {
    e.stopPropagation();
    e.preventDefault();

    if (isRotating) {
      const clientX = e.touches 
      ? e.touches[0].clientX 
      : e.clientX;

      const delta = (clientX - lastX.current) / viewport.width;
      planetRef.current.rotation.y += delta * 0.01 * Math.PI;
      lastX.current = clientX;
      rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      if (!isRotating) setIsRotating(true);
      planetRef.current.rotation.y += 0.01 * Math.PI;
      rotationSpeed.current = 0.0125;
    }
    else if (e.key === 'ArrowRight') {
      if (!isRotating) setIsRotating(true);
      planetRef.current.rotation.y -= 0.01 * Math.PI;
      rotationSpeed.current = -0.0125;
    }
  }

  const handleKeyUp = (e) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      setIsRotating(false);
    }
  }

  useFrame(() => {
    if (!isRotating) {
      rotationSpeed.current *= dampingFactor;

      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0;
      }

      planetRef.current.rotation.y += rotationSpeed.current;
    }
    else {
      const rotation = planetRef.current.rotation.y;
      
      //Normalized Rotation Code sourced from ChatGPT/JavaScript Mastery
      const normalizedRotation = ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

      // Set the current stage based on the island's orientation
      switch (true) {
        case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
          setCurrentStage(4);
          break;
        case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
          setCurrentStage(3);
          break;
        case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
          setCurrentStage(2);
          break;
        case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
          setCurrentStage(1);
          break;
        default:
          setCurrentStage(null);
      }
      //Sourced code ends here
    }
  })

  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener('pointerdown', handlePointerDown);
    canvas.addEventListener('pointerup', handlePointerUp);
    canvas.addEventListener('pointermove', handlePointerMove);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      canvas.removeEventListener('pointerdown', handlePointerDown);
      canvas.removeEventListener('pointerup', handlePointerUp);
      canvas.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    }
  }, [gl, handlePointerDown, handlePointerUp, handlePointerMove])

  return (
    <a.group ref={planetRef} {...props}>
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials.Clouds}
      />
      <mesh
        geometry={nodes.Object_6.geometry}
        material={materials.Planet}
      />
    </a.group>
  );
}

export default Planet;