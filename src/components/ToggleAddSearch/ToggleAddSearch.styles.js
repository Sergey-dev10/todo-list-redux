import styled from "styled-components";
import { device } from "../../common/devices.js";
import { Btn } from "../../common/CommonStyles.styles.js";

export const ButtonWrapper = styled.div`
  margin-right: 1rem;
  padding-right: 0.5rem;
  border-right: 1px solid #ccc;
  @media ${device.tablet} {
    border-right: none;
  }
`;
export const Button = styled(Btn)`
  color: ${({ $isActive }) => ($isActive ? "#000000" : "#5e5555")};
  @media ${device.tablet} {
    font-size: 2rem;
  }
`;