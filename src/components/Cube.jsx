import React, { useRef } from "react";
import { styled } from "styled-components";
import { PerspectiveCamera, RenderTexture, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Cube = () => {
    // useFrame(state=> console.log(state))
    const textRef = useRef();
    console.log(textRef)
    useFrame(state=> (textRef.current.position.x =Math.sin(state.clock.elapsedTime)*0.5))

  return (
    <mesh>
      <boxGeometry  />
      <meshStandardMaterial color="white">
        <RenderTexture attach="map">
          <PerspectiveCamera makeDefault position={[0, 0, 2]} />
          
          <color attach="background" args={["pink"]} />
          <Text ref={textRef} fontSize={1} color="#555">
            3D
          </Text>
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
};

export default Cube;
