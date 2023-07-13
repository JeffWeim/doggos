import React from 'react';

import { StyledFooter } from './styles';

const Footer = () => {
  return <StyledFooter>© Doggos Inc {new Date().getFullYear()}</StyledFooter>;
};

export default Footer;
