import styled from "styled-components";
import { centerWithMenu } from "../../layout/spec";

export const HomeContainer = styled.div`
  background-color: #282c34;
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  padding-right: ${centerWithMenu} px;
`;
