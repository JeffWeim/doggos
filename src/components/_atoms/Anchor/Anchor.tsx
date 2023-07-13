import React from 'react';

import { StyledAnchor } from './styles';

export type TAnchorProps = {
  children: React.ReactNode;
  className?: string;
  $hasHoverUnderline?: boolean;
  href: string;
  margin?: string | null;
};

const Anchor = (props: TAnchorProps) => {
  const {
    children,
    className,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    $hasHoverUnderline = false,
    href,
    margin = null,
  } = props;

  return (
    <StyledAnchor
      $hasHoverUnderline={$hasHoverUnderline}
      className={className}
      href={href}
      margin={margin}
    >
      {children}
    </StyledAnchor>
  );
};

export default Anchor;
