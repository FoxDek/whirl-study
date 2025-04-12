import React from 'react'
import styled from "styled-components";
import Container from './base-components/Container.jsx';
import BaseTitle from './base-components/BaseTitle.jsx';
import BaseText from './base-components/BaseText.jsx';
import BaseButton from './base-components/BaseButton.jsx';

function CTA() {
  return (
    <CTAbackground>
      <Container>
        <CTAcontent>
          <CTAtitle>Get started with Whirl</CTAtitle>
          <CTAtext>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</CTAtext>
          <CTAbutton>Book a demo</CTAbutton>
          <CTAfeatures>
            <CTAfeature>
              <svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 1.01562L5.3333 8.01562L1 4.51565" stroke="#6D757C" strokeWidth="1.6"/>
              </svg>
              <span>Free 30-day trial</span>
              </CTAfeature>
            <CTAfeature>
              <svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 1.01562L5.3333 8.01562L1 4.51565" stroke="#6D757C" strokeWidth="1.6"/>
              </svg>
              <span>No credit-card required</span>
            </CTAfeature>
          </CTAfeatures>
        </CTAcontent>
      </Container>
    </CTAbackground>
  )
}

export default CTA

const CTAbackground = styled.div`
  background: url('/images/cta-background.png') no-repeat center right;
  padding: 50px 0;
`

const CTAcontent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  gap: 20px;
  text-align: center;
`

const CTAtitle = styled(BaseTitle)`
`

const CTAtext = styled(BaseText)`
  max-width: 400px;
`

const CTAbutton = styled(BaseButton)`
  margin-top: 20px;
`

const CTAfeatures = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #626A72;
  font-style: italic;
  gap: 10px;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 20px;
  }
`

const CTAfeature = styled.div`
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  gap: 10px;
`