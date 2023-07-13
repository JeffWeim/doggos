import React from 'react';

import { StyledContainer } from './styles';

type TContainerProps = {
  $maxWidth?: string;
  children: React.ReactNode;
  $isCentered?: boolean;
};

const Container = (props: TContainerProps) => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { $maxWidth = '1200px', children, $isCentered = true } = props;

  return (
    <StyledContainer $isCentered={$isCentered} $maxWidth={$maxWidth}>
      {children}
    </StyledContainer>
  );
};

export default Container;
