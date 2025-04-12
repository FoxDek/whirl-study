import React, { useEffect } from 'react'
import styled from 'styled-components'
import Container from './base-components/Container.jsx'
import BaseButton from './base-components/BaseButton.jsx'
import BaseLink from './base-components/BaseLink.jsx'
import colors from '../colors.js'
import BaseLogo from './base-components/BaseLogo.jsx'

function Header() {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false)

  useEffect(() => {
    if (menuIsOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [menuIsOpen])

  const handleBurgerClick = () => {
    setMenuIsOpen(!menuIsOpen);
  }

  return (
    <Container>
      <HeaderContent $menuIsOpen={menuIsOpen}>
        <BaseLogo></BaseLogo>
        <Nav $menuIsOpen={menuIsOpen}>
          <ul>
            <li><a href="#">Features</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Integrations</a></li>
            <li><a href="#">Learn</a></li>
          </ul>

        <HeaderButtons>
          <HeaderLinkContainer>
            <HeaderLink>
              Sign in
            </HeaderLink>
          </HeaderLinkContainer>
          <BaseButton>
            Book a demo
          </BaseButton>
        </HeaderButtons>
        </Nav>

        
        <Burger $menuIsOpen={menuIsOpen} onClick={handleBurgerClick}>
          <BurgerLine $menuIsOpen={menuIsOpen}></BurgerLine>
          <BurgerLine $menuIsOpen={menuIsOpen}></BurgerLine>
          <BurgerLine $menuIsOpen={menuIsOpen}></BurgerLine>
        </Burger>
      </HeaderContent>
    </Container>
  )
}

export default Header

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  &:before {
    display: ${props => props.$menuIsOpen ? 'block' : 'none'};
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000000;
    opacity: 0.5;
  }

  @media (min-width: 768px) {
    justify-content: space-between;
  }
`



const Nav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background-color: ${colors.accent};
  transform: ${props => props.$menuIsOpen ? 'none' : 'translateX(-100%)'};
  transition: transform 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  padding-top: 100px;
  z-index: 9999;

  & ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-size: 16px;
    font-weight: 500;

    & li {
      cursor: pointer;
      transition: color 0.3s ease;

      & a {
        color: ${colors.textColorLight};
        text-decoration: none;
        transition: color 0.3s ease-in-out;

        &:hover {
          color: ${colors.accentHover};
        }
      }
    }
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 40px;
    transform: none;
    position: relative;
    background-color: transparent;
    width: 100%;
    height: auto;
    padding: 0;
    padding-left: 30px;

    & ul {
      list-style: none;
      flex-direction: row;
      gap: 20px;
      font-size: 16px;
      font-weight: 500;
      margin-right: auto;

      & li {
        cursor: pointer;
        transition: color 0.3s ease;

        & a {
          color: ${colors.textColorDark};
        }
      }
    }
  }
`

const HeaderLinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`


const HeaderLink = styled(BaseLink)`
  display: block;
  color: ${colors.textColorLight};

  @media (min-width: 768px) {
    color: ${colors.accent};
  }
`

const HeaderButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 100px;
  border: 1px solid ${colors.textColorLight};
  border-radius: 5px;
  padding: 10px;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 20px;
    margin-top: 0;
    border: none;
    padding: 0;
  }
`

const BurgerLine = styled.div`
  width: 25px;
  height: 3px;
  background-color: ${props => props.$menuIsOpen ? colors.textColorLight : colors.accent};
  border-radius: 5px;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &:nth-child(1) {
    transform: ${props => props.$menuIsOpen ? 
      'translateY(8px) rotate(45deg) scaleX(1.1)' : 'none'};
  }
  
  &:nth-child(2) {
    transform: ${props => props.$menuIsOpen ? 
      'scaleX(0.5) rotate(90deg)' : 'none'};
    opacity: ${props => props.$menuIsOpen ? 0 : 1};
  }
  
  &:nth-child(3) {
    transform: ${props => props.$menuIsOpen ? 
      'translateY(-8px) rotate(-45deg) scaleX(1.1)' : 'none'};
  }
`

const Burger = styled.button`
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  border: none;
  background: transparent;
  margin-left: auto;

  &:hover {
    ${BurgerLine} {
      background-color: ${colors.accentHover};
    }
  }

  @media (min-width: 768px) {
    display: none;
  }
`

