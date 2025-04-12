import styled from "styled-components"
import colors from "../../colors.js"

const BaseLink = styled.a`
  color: ${colors.accent};
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: ${colors.accentHover};
  }
`

export default BaseLink