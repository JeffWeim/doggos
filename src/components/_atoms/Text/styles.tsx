import styled, { css } from 'styled-components';

import type { TTextProps } from './Text';

type TStyledText = {
  variant: TTextProps['variant'];
};

export const StyledText = styled.p<TStyledText>`
  ${({ variant }) => {
    switch (variant) {
      case 'body1':
        return css`
          font-size: ${({ theme }) => theme.typography.body1};
          margin: 0 0 ${({ theme }) => theme.spacing.md};
        `;
      case 'body2':
        return css`
          font-size: ${({ theme }) => theme.typography.body2};
          margin: 0 0 ${({ theme }) => theme.spacing.sm};
        `;
      case 'body3':
        return css`
          font-size: ${({ theme }) => theme.typography.body3};
          margin: 0 0 ${({ theme }) => theme.spacing.sm};
        `;
      // caption
      default:
        return css`
          font-size: ${({ theme }) => theme.typography.caption};
          margin: 0 0 ${({ theme }) => theme.spacing.xs};
        `;
    }
  }};
`;
