import React, { useRef, useState } from "react";
import { styled } from "styled-components";
import Map from "./Map";
import emailjs from '@emailjs/browser';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;

  @media only screen and (max-width: 768px) {
    height: 100%;
    margin-top: 100px;
    align-items: center;
    text-align: center;
    justify-content: center;
  }

`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;


  @media only screen and (max-width: 768px) {
   text-align: center;
   
  }
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media only screen and (max-width: 768px) {
   margin-top: 48px;
   
  }
`;
const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media only screen and (max-width: 768px) {
    width: 320px;
    margin: 24px;
  }
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Input = styled.input`
  padding: 20px;
  background-color: #e8e4e4;
  border: none;
  border-radius: 5px;
`;
const TextArea = styled.textarea`
  padding: 20px;
  background-color: #e8e4e4;
  border: none;
  border-radius: 5px;
`;
const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
`;
const Right = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
   display: none;
  }
`;



const Contact = () => {
  
  const ref = useRef();
  const [success,setSuccess] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
  
    emailjs.sendForm('service_lwgrwpx', 'template_v3d16af', ref.current, '2n8Qqg_cIBnFK_5am')
    .then((result) => {
        console.log(result.text);
        setSuccess(true)
    }, (error) => {
        console.log(error.text);
        setSuccess(false)
    });
  };
  return (
    <Section id="contact">
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Contact</Title>
            <Input placeholder="Name" name="from_name
            
            "></Input>
            <Input placeholder="Email" name="email"></Input>
            <TextArea placeholder="Write Your Message" name="message" rows={10}></TextArea>
            <Button type="submit">Send</Button>
            {success && 
            "Your message has been sent. I'll get back to you soon :)"}
          </Form>
        </Left>
        <Right>
          <Map />
        </Right>
      </Container>
    </Section>
  );
};

export default Contact;
