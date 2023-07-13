import { styled } from 'styled-components';

type TStyledGridProps = {
  min: string;
};

export const StyledGrid = styled.div<TStyledGridProps>`
  display: grid;
  grid-column-gap: 25px;
  grid-row-gap: 25px;
  grid-template-columns: ${({ min }) =>
    `repeat(auto-fit, minmax(${min}, 1fr))`};
  margin-left: auto;
  margin-right: auto;
  position: relative;
`;
