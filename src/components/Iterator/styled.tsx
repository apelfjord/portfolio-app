import styled from "styled-components";

type OwnProps = {
  align: boolean;
}

export const IteratorUl = styled.ul`
  list-style: none;
  padding-left: 0px;
`;

export const IteratorLi = styled.li<OwnProps>`
  display: ${props => (props.align ? "inline" : "block")};
  padding: 10px;
`;
