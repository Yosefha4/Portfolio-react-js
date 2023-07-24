import React from "react";
import {
  OrbitControls,
  PerspectiveCamera,
  RenderTexture,
  Text,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { styled } from "styled-components";
import Cube from "./Cube";





const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
 
  @media only screen and (max-width: 768px) {
   text-align: center;
   height: 100%;
  }
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

  
  @media only screen and (max-width: 768px) {
   display: none;
  }
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
  gap: 30px;

  
  @media only screen and (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;

      /* Adjust width to display cards in 2 columns */
      div {
        width: calc(25% ); /* 10px for the gap */
    }

  }
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
const SkillCard = styled.div`
  /* background-color: #da4ea2; */
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 500;
  width: 70px;
  height: 70px;
  /* padding: 30px; */
  border: 1px white solid;
  border-radius: 5px;
  background-color: whitesmoke;
  box-shadow: 4px 8px #888888;


  animation: animate 1s infinite ease alternate;

  @keyframes animate {
    to {
      transform: translateY(10px);
    }
  }
`;

const SkillImg = styled.img`
  width: 60px;
  height: 60px;
`;
const SubCont = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Who = () => {
  return (
    <Section id="skills">
      <Container>
        <Left>
          <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Cube />
          </Canvas>
        </Left>

        <Right>
          <Title>My Skills</Title>
          <SubCont>
          <WhatWeDo>
            {/* <Line src="/img/line.png"></Line>
            <SubTitle>Think outside the square space</SubTitle> */}
            <SkillCard>
              <SkillImg src="public\img\jsImg.png" />
            </SkillCard>
            <SkillCard>
            
              <SkillImg src="public\img\snakes.png" />
            </SkillCard>
            <SkillCard>
              
              <SkillImg src="public\img\javaImg.png" />
            </SkillCard>
            <SkillCard>
              
              <SkillImg src="public\img\htmlImg.png" />
            </SkillCard>
            <SkillCard>
              
              <SkillImg src="public\img\cssImg.png" />
            </SkillCard>
          </WhatWeDo>
          <WhatWeDo>
            {/* <Line src="/img/line.png"></Line>
            <SubTitle>Think outside the square space</SubTitle> */}
            <SkillCard>
              <SkillImg src="public\img\reactImg.jpg" />
            </SkillCard>
            <SkillCard>
            
              <SkillImg src="public\img\nodImg.jpg" />
            </SkillCard>
            <SkillCard>
              
              <SkillImg src="public\img\mongoImg.png" />
            </SkillCard>
            <SkillCard>
              
              <SkillImg src="public\img\githubIcon.png" />
            </SkillCard>
            <SkillCard>
              
              <SkillImg src="public\img\firebaselogo.png" />
            </SkillCard>
          </WhatWeDo>
          </SubCont>
        </Right>
      </Container>
    </Section>
  );
};

export default Who;
