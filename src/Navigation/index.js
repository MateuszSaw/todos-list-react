import React from "react";
import { Item, List, StyledNavLink } from "./styled";
import { toAuthor, toTasks } from "../routes";

export default () => {
  return (
    <nav>
      <List>
        <Item>
          <StyledNavLink to={toTasks()}>Zadania</StyledNavLink>
        </Item>
        <Item>
          <StyledNavLink to={toAuthor()}>O autorze</StyledNavLink>
        </Item>
      </List>
    </nav>
  );
};