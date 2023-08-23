import styled from "styled-components";
import { device } from "../../common/devices.js";

export const MessageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export const Message = styled.p`
  width: 90%;
  padding: 0.4rem 0.5rem;
  background: #f2f2f2;
  border-radius: 0;
  border: 1px solid hsla(0, 0%, 90%, 0.5);
  @media ${device.tablet} {
    width: 83%;
  }
  @media ${device.mobileS} {
    width: 80%;
  }
`;
