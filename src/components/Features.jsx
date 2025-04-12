import React from "react";
import styled from "styled-components";
import colors from "../colors.js";
import Container from "./base-components/Container";
import BaseText from './base-components/BaseText.jsx';

function Features() {
  return (
    <Container>
      <FeaturesContent>
        <FeatureItem>
          <FeatureItemIcon>
            <img src='../images/features-icon-1.svg' alt='Feature 1' />
          </FeatureItemIcon>
          <FeatureItemTitle>Fast. Really fast.</FeatureItemTitle>
          <FeatureItemDescription>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </FeatureItemDescription>
        </FeatureItem>

        <FeatureItem>
          <FeatureItemIcon>
            <img src='../images/features-icon-2.svg' alt='Feature 2' />
          </FeatureItemIcon>
          <FeatureItemTitle>More bang for buck.</FeatureItemTitle>
          <FeatureItemDescription>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </FeatureItemDescription>
        </FeatureItem>

        <FeatureItem>
          <FeatureItemIcon>
            <img src='../images/features-icon-3.svg' alt='Feature 3' />
          </FeatureItemIcon>
          <FeatureItemTitle>Safe and secure.</FeatureItemTitle>
          <FeatureItemDescription>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </FeatureItemDescription>
        </FeatureItem>
      </FeaturesContent>
    </Container>
  );
}

export default Features;

const FeaturesContent = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  max-width: 400px;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  gap: 40px;
  padding: 50px 0;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    max-width: 100%;
    gap: 40px;
  }
`;

const FeatureItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  text-align: center;
  padding: 20px;
  transition: transform 0.3s ease-in-out;

  &:nth-child(1) {
    background-color: ${colors.featuresColor1};
  }

  &:nth-child(2) {
    background-color: ${colors.featuresColor2};
  }

  &:nth-child(3) {
    background-color: ${colors.featuresColor3};
  }

  @media (min-width: 768px) {
    padding: 30px;
    align-items: flex-start;
    text-align: left;
    min-height: 100%;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

const FeatureItemIcon = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;

  & img {
    width: 100%;
    height: auto;
  }

  @media (min-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

const FeatureItemTitle = styled.h3`
  font-size: 1.5rem;
  font-family: "Fraunces", sans-serif;
  font-weight: 500;
`;

const FeatureItemDescription = styled(BaseText)`
  max-width: 400px;
`;