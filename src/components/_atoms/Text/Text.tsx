import React from 'react';

import { StyledText } from './styles';

export type TTextProps = {
  className?: string;
  children: React.ReactNode;
  variant?: 'body1' | 'body2' | 'body3' | 'caption';
  as?: 'p' | 'span';
};

const Text = (props: TTextProps) => {
  const { as = 'p', className, children, variant = 'body1' } = props;

  return (
    <StyledText as={as} className={className} variant={variant}>
      {children}
    </StyledText>
  );
};

export default Text;
