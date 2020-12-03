import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Button = styled.button`
  border: none;
  color: hsl(180, 100%, 20%);
  background: none;
  cursor: pointer;
  transition: color 1s;

  @media(max-width: 767px){
    flex-basis: 100%;
        margin: 10px;
  }

  &:hover{
    color: hsl(180, 100%, 25%);
  }

  &:disabled{
    color: #EEEDEF;
  }

`;