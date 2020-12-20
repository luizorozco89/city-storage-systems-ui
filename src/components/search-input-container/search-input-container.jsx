import React from 'react';

import StyledInputContainer from './search-input-container.style';

const SearchInputContainer = ({ handleChange, searchInputValue, matchesQuantity }) => {
  const showMatches = searchInputValue !== undefined && searchInputValue !== '';

  return(
    <StyledInputContainer data-testid="search-input-container">
      <span id="search-text">Search by price:</span>
      <input
        data-testid="search-input"
        id="search-input"
        type="text"
        onChange={handleChange}
        value={searchInputValue}
        placeholder="0.00"
      />
      {showMatches &&
        <div 
          data-testid="matches-text"
          id="matches-text"
        >
          Matches found: <span data-testid="matches-number" id="matches-number">{matchesQuantity}</span>
        </div>}
    </StyledInputContainer>
  );
};

export default SearchInputContainer;