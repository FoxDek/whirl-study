import React from "react";
import styled from "styled-components";
import Container from "./base-components/Container.jsx";
import BaseTitle from "./base-components/BaseTitle.jsx";
import BaseText from "./base-components/BaseText.jsx";
import {differencesData} from "../data.js";


function Differences() {
  const [activeListItem, setActiveListItem] = React.useState(null);

  const handleListItemClick = (index) => {
    setActiveListItem((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <DifferencesBackground>
      <Container>
        <DifferencesContent>
          <DifferencesTitle>We will take care of everything, so you can get back to relaxing.</DifferencesTitle>
          <DifferencesAbout>
            <DifferencesList>
              {differencesData.map((item) => (
                <DifferencesListItem key={item.id}>
                  <DifferencesListItemToggler onClick={() => handleListItemClick(item.id)} style={{ color: activeListItem === item.id ? "" : "#626A72" }}>
                    <DifferencesListItemIcon>
                      <img
                        src={item.icon}
                        alt={`Differences ${item.id}`}
                      />
                    </DifferencesListItemIcon>
                    <DifferencesListItemTitle>
                      {item.title}
                    </DifferencesListItemTitle>
                    <DifferencesListItemArrow style={{ transform: activeListItem === item.id ? "rotate(0deg)" : "rotate(-180deg)" }}>
                      <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.71429 1.66663L9.00001 8.74996L16.2857 1.66663" stroke="#CECAC4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </DifferencesListItemArrow>
                  </DifferencesListItemToggler>
                  
                  <DifferencesListItemDescriptionWrapper $active={activeListItem === item.id}>
                    <DifferencesListItemDescription>
                      {item.description}
                    </DifferencesListItemDescription>
                  </DifferencesListItemDescriptionWrapper>
                  
                </DifferencesListItem>
              ))}
            </DifferencesList>
            <DifferencesCoverImage>
              <img
                src='../images/differences-img-1.png'
                alt='Differences cover-image'
              />
            </DifferencesCoverImage>
          </DifferencesAbout>
        </DifferencesContent>
      </Container>
    </DifferencesBackground>
  );
}

export default Differences;

const DifferencesBackground = styled.div`
  background-color: #F7F9FA;
  padding: 50px 0;
`;

const DifferencesContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 60px;
  padding: 50px 0;

  @media (min-width: 768px) {
    align-items: unset;
  }
`;

const DifferencesTitle = styled(BaseTitle)`
  font-weight: 400;
  text-align: center;
  max-width: 400px;

  @media (min-width: 768px) {
    text-align: left;
    align-self: flex-start;
    max-width: 600px;
  }
`;

const DifferencesAbout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const DifferencesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  justify-content: center;
  align-items: center;
`;

const DifferencesListItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // gap: 20px;
  padding: 20px;
  max-width: 400px;
  width: 100%;
  border-top: 1px solid #C2CDD8;
  -webkit-tap-highlight-color: transparent; // убирает выделение при нажатии

  &:last-child {
    border-bottom: 1px solid #C2CDD8;
  }

  

  @media (min-width: 768px) {
    min-width: 400px;
  }

  @media (min-width: 1200px) {
    min-width: 500px;
  }
`;

const DifferencesListItemToggler = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  border-radius: 5px;
  width: 100%;
  cursor: pointer;
`;

const DifferencesListItemArrow = styled.div`
  width: 100%;
  max-width: 18px;
  height: auto;
  transition: transform 0.1s ease-in-out;

  & svg {
    width: 100%;
    height: auto;
  }
`;

const DifferencesListItemIcon = styled.div`
  width: 40px;
  height: auto;

  & img {
    width: 100%;
    height: auto;
  }
`;

const DifferencesListItemTitle = styled.h3`
  font-family: 'Fraunces', sans-serif;
  font-size: 1.2rem;
  font-weight: 400;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 1.3rem;
    margin-right: auto;
  }
`;

const DifferencesListItemDescriptionWrapper = styled.div`
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  max-height: ${({ $active }) => ($active ? '500px' : '0')};
  opacity: ${({ $active }) => ($active ? '1' : '0')};
  margin-top: ${({ $active }) => ($active ? '10px' : '0')};
`;


const DifferencesListItemDescription = styled(BaseText)`
    padding-top: 10px;
`;

const DifferencesCoverImage = styled.div`
  width: 100%;
  max-width: 400px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    width: 100%;
    height: auto;
  }

  @media (min-width: 768px) {
    max-width: 500px;
  }
`;
