import React from 'react';

import { StyledAnchor, StyledText, StyledHeader } from './styles';

const Header = () => {
  return (
    <StyledHeader>
      <StyledAnchor href="/">🐶</StyledAnchor>
      <StyledText>The Doggo Index</StyledText>
    </StyledHeader>
  );
};

export default Header;
