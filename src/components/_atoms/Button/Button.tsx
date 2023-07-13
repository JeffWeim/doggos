import React from 'react';

import { StyledButton, StyledButtonLink } from './styles';

export type TButtonProps = {
  as?: 'button' | 'a';
  children: React.ReactNode;
  href: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
};

const Anchor = (props: TButtonProps) => {
  const {
    as = 'button',
    children,
    href,
    onClick = () => {},
    variant = 'primary',
  } = props;

  if (as === 'a') {
    return (
      <StyledButtonLink href={href} variant={variant}>
        {children}
      </StyledButtonLink>
    );
  }

  return (
    <StyledButton onClick={onClick} variant={variant}>
      {children}
    </StyledButton>
  );
};

export default Anchor;
