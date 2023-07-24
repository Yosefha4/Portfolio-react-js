import React from "react";
import { styled } from "styled-components";

const CardItem = styled.div`
  border: 3px solid white;
  width: 250px;
  height: 400px;
  border-radius: 9px;
  box-shadow: white 0px 5px 15px;

  
  /* background-color: #3a3838; */


  /* &:hover{
    background-color: lightcyan;
    opacity: 0.9;
    color: red;
 } */
  
`;
const Title = styled.h2`
  font-size: 18px;
  font-family: 'Times New Roman', Times, serif;
  padding-bottom: 8px;
  border-bottom: 2px solid white;
  text-shadow: white 1px 2px 10px;
`;
const CardImg = styled.img`
  width: 200px;
  height: 220px;
  object-fit: contain;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  /* animation: animate 5s infinite ease alternate; */
`;

const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
const DemoButton = styled.button`
  width: 100px;
  height: 30px;
  border: 1px solid black;
 border-radius: 5px;
background-color: lightgoldenrodyellow;
cursor: pointer;
font-weight: 600;

&:hover{
    background-color: transparent;
    color: white;
    border: 1px solid white;

 }
`;
const GitButton = styled.button`
  width: 150px;
  height: 30px;
 border: 1px solid black;
 border-radius: 5px;
 background-color: lightskyblue;
 cursor: pointer;
 font-weight: 600;

 &:hover{
    background-color: transparent;
    color: white;
    border: 1px solid white;

 }

`;

const Card = (props) => {
  return (
    <CardItem>
      <Title style={{color:`${props.titleColor}`}}>{props.name}</Title>
      <CardImg src={`/public/img/${props.img}`} />
      <BtnContainer>
      <DemoButton onClick={() => window.open(`${props.demoLink}`,"_blank")}>Video</DemoButton>
      <GitButton onClick={() => window.open(`${props.gitLink}`,"_blank")}>GitHub</GitButton>
      </BtnContainer>
    </CardItem>
  );
};

export default Card;
