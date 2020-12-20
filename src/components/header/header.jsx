import React from 'react';

import StyledHeader from './header.style';

const Header = ({ titleText }) => {
  return(
    <StyledHeader>
      <h1>{titleText}</h1>
    </StyledHeader>
  );
};

export default Header;