import styled from "styled-components";
import { device } from "../../common/devices.js";

export const FilterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  @media ${device.tablet} {
    justify-content: center;
    margin-left: 0;
  }
  @media ${device.mobileS} {
    flex-direction: column;
    justify-content: center;
  }
`;
export const Button = styled.button`
  margin: 3px;
  padding: 4px 8px;
  background: none;
  border: ${({ $isSelected }) =>
    $isSelected ? "1px solid rgb(175, 47, 39)" : "none"};
  border-radius: ${({ $isSelected }) => ($isSelected ? "3px" : "none")};
  @media ${device.tablet} {
    margin: 1px;
    padding: 4px 4px;
    font-size: 2rem;
    border: ${({ $isSelected }) =>
      $isSelected ? "1px solid rgb(248, 158, 158)" : "none"};
  }
`;