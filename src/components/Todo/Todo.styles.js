import styled from "styled-components";
import { device } from "../../common/devices.js";
export const TodoWrapper = styled.div`
  width: 40%;
  margin: 10% auto;
  padding-top: 1rem;
  background-color: white;

  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    margin: 0;
    overflow: auto;
  }
`;
