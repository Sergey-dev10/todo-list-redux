import styled from "styled-components";
import { device } from "../../common/devices.js";
import { Btn } from "../../common/CommonStyles.styles.js";

export const TaskEditorWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  width: 95%;
`;
export const Button = styled(Btn)`
  @media ${device.tablet} {
    padding: 0.2rem;
    font-size: 1.5rem;
  }
`;

export const Input = styled.input`
  width: 60%;
  margin-top: 0.5rem;
  padding-left: 0.5rem;
  height: 1.8rem;
  border: 1px solid #cccccc;
 
  &:focus {
    border-color: #66afe9;
    outline: 0;
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102,175,233,.6);
`;

export const ButtonsWrapper = styled.div`
  margin-left: auto;
  @media ${device.tablet} {
    display: flex;
  }
`;
