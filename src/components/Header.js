import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  text-align: center;
  padding-top: 70px;
  margin-bottom: 100px;
`;

const Header = () => {
  return(
    <StyledHeader>
      <h1>Socket Client Demo</h1>
    </StyledHeader>
  );
};

export default Header;