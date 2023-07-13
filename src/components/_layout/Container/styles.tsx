import styled, { css } from 'styled-components';

type TStyledGridProps = {
  $maxWidth: string;
  $isCentered: boolean;
};

export const StyledContainer = styled.div<TStyledGridProps>`
  max-width: ${({ $maxWidth }) => $maxWidth};
  padding: ${({ theme }) => theme.spacing.lg};
  width: 100%;

  ${({ $isCentered }) =>
    $isCentered &&
    css`
      margin: 0 auto;
    `};
`;
