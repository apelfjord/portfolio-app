import styled from "styled-components";

export const IteratorUl = styled.ul`
  list-style: none;
  padding-left: 0px;
`;

export const IteratorLi = styled.li`
  display: ${props => (props.alignRow ? "inline" : "block")};
  padding: 10px;
`;
