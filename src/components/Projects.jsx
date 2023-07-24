import React from "react";
import { styled } from "styled-components";
import Card from "./Card";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;

  
  @media only screen and (max-width: 768px) {
   height: 100%;
 align-items: center;
 justify-content: center;
  }

`;
const Container = styled.div`
  width: 1400px;
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  text-align: center;
  /* align-items: first baseline; */
  /* align-items: center; */

  @media only screen and (max-width: 768px) {
   height: 100%;
  }
`;

const Title = styled.h1`
  font-size: 58px;
  margin-bottom: 68px;
`;
const CardContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media only screen and (max-width: 768px) {
   flex-direction: column;
   overflow: auto;
   padding-top: 600px;
   /* height: 100%; */
   gap:36px
  }
`;
const Button = styled.button`
  width: 150px;
  height: 40px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: lightskyblue;
  font-weight: bold;

  &:hover {
    background-color: whitesmoke;
    color: black;
  }
`;
const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 44px;
`;
// const Card = styled.div`
//   border: 1px solid white;
//   width: 250px;
//   height: 400px;
//   border-radius: 9px;
// `;

const Projects = () => {
  return (
    <Section id="projects">
      <Container>
        <Title>Projects</Title>
        <CardContainer>
          <Card
            name="Easy Park Mobile App"
            titleColor="lightblue"
            img="imageWithoutBg.png"
            gitLink="https://github.com/Yosefha4/EasyPark-23"
          />
          <Card
            name="Blood Bank Web App"
            titleColor="red"
            img="BlooD.png"
            gitLink="https://github.com/Yosefha4/Blood_Bank"
            demoLink="https://www.youtube.com/watch?v=8GXDdk_PLfs"
          />
          <Card
            name="Sudoko Game - BlockChain"
            titleColor="lightgrey"
            img="blockchain.png"
            gitLink="https://github.com/Yosefha4/Sudoku_Eth"
          />
        </CardContainer>
        <BtnContainer>
          <Button onClick={() => window.open("https://github.com/Yosefha4", "_blank")}>More Projects</Button>
        </BtnContainer>
      </Container>
    </Section>
  );
};

export default Projects;
