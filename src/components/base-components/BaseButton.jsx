import styled from "styled-components"
import colors from "../../colors.js"

const BaseButton = styled.button`
  background-color: ${colors.accent};
  color: #FFFFFF;
  font-size: 16px;
  font-weight: 500;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${colors.accentHover};
  }
`

export default BaseButton