import React from "react";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";
import Contact from "./components/Contact";
import { styled } from "styled-components";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y ;
  
  /* scroll-behavior: smooth;

  scrollbar-width: none; */
  color: white;
  /* background-color:white; */
  height: 100%;
  background: linear-gradient(0deg, rgba(10,8,19,1) 21%, rgba(29,11,101,1) 47%, rgba(0,0,0,1) 74%);
  &::-webkit-scrollbar{
    display: none;
  }

  @media only screen and (max-width: 768px) {
    scroll-behavior: unset;
    scroll-snap-type: none;

  }
`;
const App = () => {
  
  return (
    <Container>
      <Hero id ='home'/>
      <Who id='who' />
      <Projects id='project' />
      <Contact />
    </Container>
  );
};

export default App;
