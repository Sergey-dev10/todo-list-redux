import styled from "styled-components";
import { device } from "../../common/devices.js";
import { Btn } from "../../common/CommonStyles.styles.js";

export const TaskWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.2rem 0.5rem;
  @media ${device.tablet} {
    padding: 0;
  }
`;

export const TaskItem = styled.div`
  display: flex;
  align-items: center;
  width: 95%;
  padding-top: 0.5rem;
`;
export const Title = styled.p`
  width: 15rem;
  margin-left: 0.5rem;
  word-wrap: break-word;
  text-decoration: ${({ $isCompleted }) =>
    $isCompleted ? "line-through" : "none"};
  @media ${device.tablet} {
    width: 40%;
    margin-left: 0.1rem;
    font-size: 1.5rem;
  }
`;
export const Button = styled(Btn)`
  @media ${device.tablet} {
    padding: 0.2rem;
    font-size: 1.5rem;
  }
`;
export const ButtonsWrapper = styled.div`
  margin-left: auto;
  @media ${device.tablet} {
    display: flex;
  }
`;
