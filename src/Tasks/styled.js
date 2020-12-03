import styled, { css } from "styled-components";

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

`;

export const Item = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  grid-gap: 10px;
  padding: 10px;
  border-bottom: 1px solid #EEEDEF;

  ${({ hidden }) => hidden && css`
    display: none;
  `}
`;

export const Content = styled.p`
  overflow-wrap: anywhere;

  ${({ done }) => done && css`
  text-decoration: line-through;
  `}
`;

export const Button = styled.button`
    width: 25px;
    height: 25px;
    border: none;
    color: white;
    cursor: pointer;
    padding: 0;
    transition: background 0.5s;

    ${({ toggleDone }) => toggleDone && css`
      background: hsl(120, 61%, 35%);

      &:hover {
        background: hsl(120, 61%, 40%);
      }
      &:active {
        background: hsl(120, 61%, 45%);
      }
    `}

    ${({ remove }) => remove && css`
      background: hsl(348, 83%, 45%);

      &:hover{
        background: hsl(348, 83%, 50%);
      }
      &:active{
        background: hsl(348, 83%, 55%);
      }
    `}
`;