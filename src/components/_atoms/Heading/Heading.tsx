import React from 'react';

import { StyledHeading } from './styles';

export type THeadingProps = {
  children: React.ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

const Heading = (props: THeadingProps) => {
  const { children, variant = 'h1' } = props;

  return (
    <StyledHeading as={variant} variant={variant}>
      {children}
    </StyledHeading>
  );
};

export default Heading;
