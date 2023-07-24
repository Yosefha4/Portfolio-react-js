import React from "react";
import { OrbitControls, PerspectiveCamera, RenderTexture, Text } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { styled } from "styled-components";
import Cube from "./Cube";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  /* background-color: yellow; */

`;

const Title = styled.h1`
  font-size: 74px;


`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;


`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const SubTitle = styled.h2`
  color: #da4ea2;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 120px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;


const Skills = () => {
  return (
    <Section>
      <Container>
        <Left>
        <Canvas camera={{fov:25,position:[15,15,15]}}>
        <OrbitControls enableZoom={false} autoRotate />
        <ambientLight intensity={1}/>
        <directionalLight position={[3,2,1]} />
       <Cube/>
       
      </Canvas>
      
        </Left>

        <Right>
        <Title>My Skills</Title>
          <WhatWeDo>
            {/* <Line src="/img/line.png"></Line>
            <SubTitle>Think outside the square space</SubTitle> */}
          </WhatWeDo>
          <Desc>  a creative group of designers and developers with a passion for the
            arts. </Desc>
          <Button>See our works</Button>
        </Right>
      </Container>
    </Section>
  );
};

export default Skills;
