import React from "react";
import "./style.css";
import { StyledSection, SectionHeader, SectionTitle, SectionBody } from "./styled"

const Section = ({ title, body, extraHeaderContent }) => (
  <StyledSection>
    <SectionHeader>
      <SectionTitle>
        {title}
      </SectionTitle>
      {extraHeaderContent}
    </SectionHeader>
    <SectionBody>
      {body}
    </SectionBody>
  </StyledSection>
)

export default Section;