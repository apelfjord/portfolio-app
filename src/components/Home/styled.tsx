import styled from "styled-components";
import { centerWithMenu } from "../../layout/spec";

export const HomeContainer = styled.div`
  background-color: #282c34;
  min-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  padding-left: ${centerWithMenu / 2}px;
  overflow-x: hidden;
  overflow-y: scroll;


`;
