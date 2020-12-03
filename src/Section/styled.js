import styled from "styled-components";

export const StyledSection = styled.section`
  background: white;
  margin-bottom: 10px;
  box-shadow: 0 0 5px #EEEDEF;
`;

export const SectionHeader = styled.header`
  border-bottom: 1px solid #EEEDEF;
  padding: 20px;
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 20px;
  justify-content: space-between;
  align-items: center;

  @media(max-width: 767px){
    grid-template-columns: 1fr;
  }

`;

export const SectionTitle = styled.h2`
  margin: 0;
  font-size: 20px;
`;
export const SectionBody = styled.div`
  padding: 20px;
`;