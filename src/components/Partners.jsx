import React from 'react'
import styled from 'styled-components'
import colors from '../colors.js'
import Container from './base-components/Container'

function Partners() {
  return (
    <Container>
      <PartnersContent>
        <PartnersTitle>Trusted by 50,000+ companies</PartnersTitle>
        <PartnersList>
          <PartnerLogo src="../images/partners-1.png" alt="Partner 1" />
          <PartnerLogo src="../images/partners-2.png" alt="Partner 2" />
          <PartnerLogo src="../images/partners-3.png" alt="Partner 3" />
          <PartnerLogo src="../images/partners-4.png" alt="Partner 4" />
        </PartnersList>
      </PartnersContent>
    </Container>
  )
}

export default Partners

const PartnersContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  padding: 50px 0;
`

const PartnersTitle = styled.h2`
  font-size: 1rem;
  font-weight: 400;
  color: ${colors.primary};
  text-align: center;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`

const PartnersList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 40px;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 40px;
  }
`

const PartnerLogo = styled.img`
  width: 100%;
  max-width: 200px;
  height: auto;
  opacity: 1;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.7;
  }

  @media (min-width: 768px) {
    max-width: 150px;
  }
`