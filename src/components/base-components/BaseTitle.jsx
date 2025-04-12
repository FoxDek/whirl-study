import styled from "styled-components";
import colors from "../../colors.js";

const BaseTitle = styled.h1`
  font-family: 'Fraunces', sans-serif;
  font-size: 1.8rem;
  color: ${colors.textColorDark};
  margin: 0;

  @media (min-width: 768px) {
    font-size: 2.2rem;
  }

  @media (min-width: 1200px) {
    font-size: 2.6rem;
  }
`

export default BaseTitle;