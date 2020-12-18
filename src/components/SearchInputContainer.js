import React from 'react';
import styled from 'styled-components';

const StyledInputContainer = styled.div`
  border-bottom: 3px solid lightgray;
  margin: 0 auto;
  width: 70%;
  padding: 30px 0;

  #search-text, #matches-text {
    font-weight: 600;
    margin-right: 12px;
    padding: 10px 0;
    font-size: 18px;
  }

  #matches-text {
    display: inline-block;
    
    #matches-number {
      color: #4c00e6;
    }
  }
  
  #search-input {
    width: 130px;
    padding: 10px;
    font-size: 16px;
    border-radius: 7px;
    color: #29a329;
    font-weight: 600;
    margin-right: 12px;
  }
`;

const SearchInputContainer = ({ handleChange, searchInputValue, matchesQuantity }) => {
  const showMatches = searchInputValue !== undefined && searchInputValue !== '';

  return(
    <StyledInputContainer>
      <span id="search-text">Search by price:</span>
      <input id="search-input" type="text" onChange={handleChange} value={searchInputValue} placeholder="0.00" />
      {showMatches && <div id="matches-text">Matches found: <span id="matches-number">{matchesQuantity}</span></div>}
    </StyledInputContainer>
  );
};

export default SearchInputContainer;