import React from "react";
import Input from "../../Input";
import searchQueryParamName from "../searchQueryParamName";
import { Wrapper } from "./styled";
import { useQueryParameter, useReplaceQueryParameter } from "./queryParameters"

const Search = () => {

  const query = useQueryParameter(searchQueryParamName);
  const replaceQueryParameter = useReplaceQueryParameter();

  const onInputChange = ({ target }) => {
    replaceQueryParameter({
      key: searchQueryParamName,
      value: target.value.trim() !== "" ? target.value : undefined
    })
  };

  return (
    <Wrapper>
      <Input
        placeholder="filtruj zadania"
        value = {query || ""}
        onChange={onInputChange}
    />
    </Wrapper>
  )
};

export default Search;