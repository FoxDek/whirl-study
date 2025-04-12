import React from "react";
import styled from "styled-components";
import colors from "../colors.js";
import BaseButton from "./base-components/BaseButton.jsx";
import BaseTitle from "./base-components/BaseTitle.jsx";
import BaseText from "./base-components/BaseText.jsx";
import Container from "./base-components/Container.jsx";

function Demo() {
  return (
    <DemoBackground>
      <Container>
        <DemoContent>
          <DemoImg>
            <img src='../images/demo-img-1.png' alt='Demo Image' />
          </DemoImg>
          <DemoAbout>
            <DemoAboutTitle>Set, forget, and then track.</DemoAboutTitle>
            <DemoAboutText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </DemoAboutText>
            <DemoAboutList>
              <li>
                <img src='../images/check-mark.svg' alt='check-mark' />
                <span>Understand your options</span>
              </li>
              <li>
                <img src='../images/check-mark.svg' alt='check-mark' />
                <span>No lock-ins</span>
              </li>
              <li>
                <img src='../images/check-mark.svg' alt='check-mark' />
                <span>You own the shares</span>
              </li>
            </DemoAboutList>
            <DemoAboutButton>Get started</DemoAboutButton>
          </DemoAbout>
        </DemoContent>
      </Container>
    </DemoBackground>
  );
}

export default Demo;

const DemoBackground = styled.div`
  background-color: ${colors.accent};
  padding: 50px 0;
`;

const DemoContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 60px;
  padding: 50px 0;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 100px;
  }
`;

const DemoImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 400px;
  height: auto;

  img {
    width: 100%;
    height: auto;
  }
`;

const DemoAbout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  max-width: 400px;
`;

const DemoAboutTitle = styled(BaseTitle)`
  color: ${colors.textColorLight};
`;

const DemoAboutText = styled(BaseText)`
  color: ${colors.textColorLight};
`;

const DemoAboutList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  & > li {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 10px;
    color: ${colors.textColorLight};
  }
`;

const DemoAboutButton = styled(BaseButton)`
  background-color: ${colors.accent};
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  padding: 10px 20px;
  border: 1px solid ${colors.textColorLight};
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${colors.accentHover};
  }
`;
