import styled from "styled-components";
import {footerHeight} from '../spec'

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  height: ${footerHeight}px;
  width: 100%;
  background-color: #282c34;
  border-top: 1px solid white;
`;

export const FooterText = styled.div`
  color: #ffffff;
  margin: 40px;
`;
