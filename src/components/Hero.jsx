import React from "react";
import { styled } from "styled-components";
import Navbar from "./Navbar";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  /* background-color: black; */


  @media only screen and (max-width: 768px) {
  
    height:200vh;
    
  }

`;
const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;

  
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
const Left = styled.div`
  margin-left: 20px;
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
    justify-content: center;

  }
  
`;
const Title = styled.h1`
  font-size: 68px;
  font-family: 'Courier New', Courier, monospace;

  @media only screen and (max-width: 768px) {
    text-align:center;
;
  }
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
  /* color: #da4ea2; */
  /* color:blueviolet; */
`;
const SubContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
;
  }
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
`;

const Button = styled.button`
  background-color: blueviolet;
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 3;
  position: relative;
  /* background-color: yellow; */

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
    justify-content: center;
    width:100%;
    margin-bottom: 24px;
;
  }
`;
const Img = styled.img`
  width: 750px;
  height: 550px;
  object-fit: contain;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }

  @media only screen and (max-width: 768px) {
  width: 300px;
  height: 300px;
  }
`;

const Hero = () => {
  return (
    <Section>
      <Navbar />
      <Container id="hero">
        <Left>
          <Title>Hey ! <br/> I am Yosef</Title>
          <WhatWeDo>
            <Line src="./public/img/line.png"></Line>
            <SubTitle>Software Engineer</SubTitle>
          </WhatWeDo>
          <WhatWeDo>
            <Line src="./public/img/line.png"></Line>
            <SubTitle>Full Stack Developer</SubTitle>
          </WhatWeDo>
          <WhatWeDo>
            <Line src="./public/img/line.png"></Line>
            <SubTitle>Team Player</SubTitle>
          </WhatWeDo>
          <Desc>Dev & Enjoy   </Desc>
          <Button onClick={() => window.open("https://www.linkedin.com/in/yosef-haimjan/","_blank")}>
           
            Learn More
           
            </Button>
        </Left>

        <Right>
          {/* 3D MODEL */}
          <Canvas >
            <OrbitControls enableZoom={false}  />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1,100,200]} scale={2.8}>
            <MeshDistortMaterial
            color='white' attach='material' distort={0.5} speed={2} 
            />
            </Sphere>
          </Canvas>
          {/* 3D MODEL */}
          <Img src="/img/moon.png" />
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
