import React from 'react';

import { StyledGrid } from './styles';

type TGridProps = {
  children: React.ReactNode;
  min: string;
};

const Grid = (props: TGridProps) => {
  const { min, children } = props;

  return <StyledGrid min={min}>{children}</StyledGrid>;
};

export default Grid;
