import React from "react";
import colors from "../colors.js";
import styled from "styled-components";
import Container from "./base-components/Container.jsx";
import BaseButton from "./base-components/BaseButton";
import BaseLink from "./base-components/BaseLink.jsx";

function Hero() {
  return (
    <Container>
      <HeroContent>
        <HeroAbout>
          <h1>Your everyday tasks, automated.</h1>
          <p>
            Whirl lets you design and streamline your everyday tasks and workflows
            in just a few clicks.
          </p>
          <HeroButtons>
            <BaseButton>Book a demo</BaseButton>
            <HeroBaseLink href='#'>
              <span>Learn more</span>
              <svg
                width='11'
                height='20'
                viewBox='0 0 11 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M1.34314 1.1001L9.68628 9.86039L1.34314 18.6207'
                  stroke='#006B99'
                  strokeWidth='1.6'
                />
              </svg>
            </HeroBaseLink>
          </HeroButtons>
        </HeroAbout>
        <HeroImage>
          <img src='../images/hero-img.png' alt='Hero' />
        </HeroImage>
      </HeroContent>
    </Container>
  );
}

export default Hero;

const HeroContent = styled.div`
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 50px;
  }
`

const HeroAbout = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  text-align: center;
  align-items: center;

  & h1 {
    font-family: "Fraunces", sans-serif;
    font-size: 2.6rem;
    font-weight: 400;
    line-height: 1.2;
    color: ${colors.primary};
  }
  
  & p {
    max-width: 350px;
    font-size: 1rem;
    line-height: 2;
  }

  @media (min-width: 768px) {
    text-align: left;
    align-items: flex-start;

    & h1 {
      font-size: 3rem;
    }

    & p {
      font-size: 1.1rem;
    }
  }

  @media (min-width: 1200px) {
    & h1 {
      font-size: 3.8rem;
    }

    & p {
      font-size: 1.3rem;
    }
  }
`

const HeroButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`

const HeroBaseLink = styled(BaseLink)`
  display: flex;
  align-items: center;
  gap: 10px;

  & svg path {
    stroke: ${colors.accent};
    transition: stroke 0.3s ease-in-out;
  }

  &:hover {
    & svg {
      transform: translateX(5px);
      transition: transform 0.3s ease-in-out;

      & path {
        stroke: ${colors.accentHover};
      }
    }
  }
`

const HeroImage = styled.div`
  width: 100%;
  max-width: 500px;

  & img {
    width: 100%;
    height: auto;
  }
`
