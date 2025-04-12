import React from 'react'
import styled from 'styled-components'
import colors from '../colors'
import Container from './base-components/Container'
import BaseLogo from './base-components/BaseLogo'


function Footer() {
  return (
    <Container>
      <FooterContent>
        <FooterTop>
          <FooterAbout>
            <BaseLogo>
              <img src="../images/logo.png" alt="Logo" />
            </BaseLogo>
            <FooterAboutCreate>
              <p>Built by <a href="#">Nikolai Bain</a>.</p>
              <p>Powered by <a href="#">Webflow</a>.</p>
            </FooterAboutCreate>
          </FooterAbout>

          <FooterNav>
          <span>Info</span>
            <ul>
              <li><a href="#">Features</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Support</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </FooterNav>

          <FooterNav>
            <span>Admin</span>
            <ul>
              <li><a href="#">Style Guide</a></li>
              <li><a href="#">Licenses</a></li>
              <li><a href="#">Instructions</a></li>
              <li><a href="#">Changelog</a></li>
              <li><a href="#">Password</a></li>
              <li><a href="#">404</a></li>
            </ul>
          </FooterNav>

          <FooterForm>
            <span>Newsletter</span>
            <p>Sign up for the latest news, company insights, and Whirl updates.</p>
            <form action="#">
              <input type="email" placeholder="Your email" required />
              <button type="submit"><svg width="8" height="16" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.764648 1.1626L6.58818 7.99981L0.764648 14.837" stroke="#006B99" strokeWidth="1.6"/>
                </svg>
              </button>
            </form>
          </FooterForm>

        </FooterTop>

        <FooterBottom>
          <FooterCopyright>© 2022 Whirl. All Rights Reserved. Illustrations by <FooterCopyrightLink href="#">Streamline</FooterCopyrightLink></FooterCopyright>
          <FooterSocials>
            <FooterSocialLink href="#"><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_2_1665)"><path d="M21.7231 2.91331C20.9233 3.34219 20.0751 3.62361 19.2063 3.74804C20.1213 3.08537 20.806 2.04254 21.1329 0.813959C20.2728 1.43199 19.3317 1.86719 18.3504 2.1007C17.9403 1.5713 17.4449 1.14948 16.8946 0.861369C16.3444 0.57325 15.7512 0.424995 15.1517 0.425784C12.7317 0.425784 10.7695 2.80049 10.7695 5.73056C10.7695 6.14593 10.8084 6.55125 10.8833 6.93978C7.24112 6.7185 4.01224 4.60639 1.85081 1.39655C1.46109 2.20616 1.25631 3.12669 1.25747 4.06368C1.2569 4.9371 1.43455 5.79717 1.77465 6.5674C2.11475 7.33775 2.60677 7.99433 3.20698 8.47902C2.51119 8.45228 1.83075 8.22475 1.22224 7.81555C1.22169 7.83767 1.22169 7.85944 1.22169 7.88236C1.22169 10.4517 2.73208 12.5958 4.73649 13.0837C4.09109 13.2952 3.41438 13.3262 2.7576 13.1744C3.31516 15.2814 4.93346 16.8157 6.85105 16.8587C5.29876 18.3333 3.38187 19.1332 1.40865 19.1296C1.05497 19.1296 0.706294 19.1048 0.363159 19.0554C2.36685 20.6138 4.69886 21.4411 7.08047 21.4382C15.1409 21.4382 19.5487 13.3553 19.5487 6.34607C19.5487 6.11646 19.5442 5.88702 19.5359 5.65905C20.3942 4.90887 21.135 3.97901 21.7231 2.91331Z" fill="black"/></g><defs><clipPath id="clip0_2_1665"><rect width="22" height="22" fill="white"/></clipPath></defs></svg></FooterSocialLink>
            <FooterSocialLink href="#"><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_2_1669)"><path d="M20.3715 0H1.62422C0.72617 0 0 0.708987 0 1.58555V20.4101C0 21.2867 0.72617 22 1.62422 22H20.3715C21.2695 22 22 21.2867 22 20.4144V1.58555C22 0.708987 21.2695 0 20.3715 0ZM6.52694 18.7473H3.26133V8.24569H6.52694V18.7473ZM4.89413 6.81487C3.8457 6.81487 2.99922 5.96837 2.99922 4.9242C2.99922 3.88008 3.8457 3.03359 4.89413 3.03359C5.9383 3.03359 6.78475 3.88008 6.78475 4.9242C6.78475 5.96406 5.9383 6.81487 4.89413 6.81487ZM18.7473 18.7473H15.4859V13.6426C15.4859 12.4266 15.4644 10.8582 13.7887 10.8582C12.0914 10.8582 11.8336 12.1859 11.8336 13.5566V18.7473H8.57656V8.24569H11.7047V9.68087H11.7476C12.1816 8.85587 13.2473 7.98362 14.8328 7.98362C18.1371 7.98362 18.7473 10.1578 18.7473 12.9852V18.7473Z" fill="black"/></g><defs><clipPath id="clip0_2_1669"><rect width="22" height="22" fill="white"/></clipPath></defs></svg></FooterSocialLink>
            <FooterSocialLink href="#"><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_2_1673)"><path d="M22 11C22 4.92488 17.0751 0 11 0C4.92488 0 0 4.92488 0 11C0 16.4903 4.02252 21.0412 9.28125 21.8664V14.1797H6.48826V11H9.28125V8.57656C9.28125 5.81969 10.9235 4.29688 13.4361 4.29688C14.6393 4.29688 15.8984 4.51172 15.8984 4.51172V7.21875H14.5114C13.145 7.21875 12.7188 8.06676 12.7188 8.9375V11H15.7695L15.2818 14.1797H12.7188V21.8664C17.9775 21.0412 22 16.4903 22 11Z" fill="black"/></g><defs><clipPath id="clip0_2_1673"><rect width="22" height="22" fill="white"/></clipPath></defs></svg></FooterSocialLink>
          </FooterSocials>
        </FooterBottom>
      </FooterContent>
    </Container>
  )
}

export default Footer

const FooterContent = styled.footer`
  display: flex;
  flex-direction: column;
  padding: 40px 0;
`

const FooterTop = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 50px;
  padding-bottom: 60px;
  border-bottom: 1px solid #C2CDD8;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

const FooterAbout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    align-items: flex-start;
    justify-content: flex-start;
  }
`

const FooterAboutCreate = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  & a {
    text-decoration: none;
    color: ${colors.accent};
    transition: color 0.3s ease-in-out;

    &:hover {
      color: ${colors.accentHover};
    }
  }
`

const FooterNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 auto;
  text-align: center;

  & ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;

    & li a {
      text-decoration: none;
      color: #626A72;
      transition: color 0.3s ease-in-out;

      &:hover {
        color: ${colors.accentHover};
      }
    }
  }

  @media (min-width: 768px) {
    text-align: left;
    align-items: flex-start;
  }
`

const FooterForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  text-align: center;

  & p {
    font-size: 1rem;
    line-height: 1.6rem;
    max-width: 350px;
  }

  & form {
    display: flex;
    gap: 10px;
    border-bottom: 1px solid #C2CDD8;
  }

  & input {
    width: 100%;
    padding: 10px;
    border: none;
    outline: none;
  }

  & button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

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
  }

  @media (min-width: 768px) {
    align-items: flex-start;
    text-align: left;
  }
`







const FooterBottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column-reverse;
  gap: 20px;
  padding-top: 60px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

const FooterCopyright = styled.p`
  font-size: 0.8rem;
  text-align: center;
`

const FooterCopyrightLink = styled.a`
  color: ${colors.accent};
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${colors.accentHover};
  }
`

const FooterSocials = styled.div`
  display: flex;
  gap: 20px;
`
const FooterSocialLink = styled.a`
  color: ${colors.accent};
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  & svg path {
    fill: ${colors.textColorDark};
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    transform: scale(1.1);

    & svg path {
      fill: ${colors.accentHover};
    }
  }

`