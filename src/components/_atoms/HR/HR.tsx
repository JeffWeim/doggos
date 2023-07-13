import React from 'react';

import { StyledHR } from './styles';

export type THRProps = {
  className?: string;
};

const HR = (props: THRProps) => {
  const { className } = props;

  return <StyledHR className={className} />;
};

export default HR;
