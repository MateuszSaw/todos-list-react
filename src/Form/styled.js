import styled from "styled-components";

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 20px;

  @media(max-width: 767px){
    grid-template-columns: 1fr;
  }
`;

export const StyledInput = styled.input`
  padding: 10px;
  border: 1px solid #EEEDEF;
`;

export const Button = styled.button`
  background: hsl(180, 100%, 20%);
  color: #EEEDEF;
  border: none;
  padding: 10px;
  cursor: pointer;
  transition: 0.5s;

  &:hover{
    background: hsl(180, 100%, 25%);
    border: none;
    transform: scale(1.1);
  }

  &:active{
    background: hsl(180, 100%, 30%);
    border: none;
  }

`;