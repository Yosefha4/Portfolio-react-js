import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    max-width: max-content; /* Add this to prevent the Navbar from shrinking beyond the screen width */

  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Logo = styled.img`
  /* height: 120px; */
  width: 150px;
`;

const List = styled.ul`
  display: flex;
  gap: 25px;
  list-style: none;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ListItem = styled.li`
  cursor: pointer;
  font-size: 24px;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;

const Button = styled.button`
  width: max-content;

  padding: 10px;
  background-color: blueviolet;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Navbar = () => {
  const handleDownload = () => {
    // Perform any additional actions you need here
    // For example, you can track the download event using analytics
    // Replace "Your_Resume.pdf" with the actual file name if needed
    // For tracking, you can use tools like Google Analytics or Mixpanel
    // Example using Google Analytics:
    if (window.ga) {
      window.ga("send", {
        hitType: "event",
        eventCategory: "Resume",
        eventAction: "download",
        eventLabel: "YosefCV.pdf",
      });
    }


  };

  return (
    <Section>
      <Container>
        <Links>
          <Logo src="/img/logo-white.png"></Logo>
          <List>
            <ListItem>
              <Link
                activeClass="active"
                to="hero"
                spy={true}
                smooth={true}
                duration={500}
              >
                Home
              </Link>
            </ListItem>
            <ListItem>
              <Link
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                duration={500}
              >
                Skills
              </Link>
            </ListItem>
            <ListItem>
              {" "}
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                duration={500}
              >
                Projects
              </Link>
            </ListItem>
            <ListItem>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
              >
                Contact
              </Link>
            </ListItem>
          </List>
        </Links>
        <Icons>
          {/* <Icon src="/img/search.png"></Icon> */}
          <Button>
            <a
               href="https://drive.google.com/file/d/1-p5ucb3aMWthcl80_rMC7U60CAUwHrp6/?export=download" // Update this path to the correct location of your resume file
               download="YosefResume.pdf" // Make sure the extension matches the actual file extension
               onClick={handleDownload}
               style={{textDecoration:'none', color:'white'}}
            >
              Download CV
            </a>
          </Button>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
