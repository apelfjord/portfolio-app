import styled from "styled-components";
import {
  footerHeight,
  theme
} from '../spec'

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  height: ${footerHeight}px;
  width: 100%;
  border-top: 1px solid ${theme.border};
  background-color: ${theme.highlight};
`;

export const FooterText = styled.div`
  margin: 40px;
`;
