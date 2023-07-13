import styled, { css } from 'styled-components';

import type { THeadingProps } from './Heading';

type TStyledHeading = {
  variant: THeadingProps['variant'];
};

export const StyledHeading = styled.p<TStyledHeading>`
  color: inherit;

  ${({ variant }) => {
    switch (variant) {
      case 'h1':
        return css`
          font-size: ${({ theme }) => theme.typography.display1};
          margin: 0 0 ${({ theme }) => theme.spacing.lg};
        `;
      case 'h2':
        return css`
          font-size: ${({ theme }) => theme.typography.display2};
          margin: 0 0 ${({ theme }) => theme.spacing.lg};
        `;
      case 'h3':
        return css`
          font-size: ${({ theme }) => theme.typography.display3};
          margin: 0 0 ${({ theme }) => theme.spacing.md};
        `;
      case 'h4':
        return css`
          font-size: ${({ theme }) => theme.typography.display4};
          margin: 0 0 ${({ theme }) => theme.spacing.md};
        `;
      case 'h5':
        return css`
          font-size: ${({ theme }) => theme.typography.display5};
          margin: 0 0 ${({ theme }) => theme.spacing.sm};
        `;
      // h6
      default:
        return css`
          font-size: ${({ theme }) => theme.typography.display6};
          margin: 0 0 ${({ theme }) => theme.spacing.sm};
        `;
    }
  }};
`;
