import styled, { css } from 'styled-components';

import type { TButtonProps } from './Button';

type TStyledButton = {
  variant: TButtonProps['variant'];
};

const buttonStyles = css<TStyledButton>`
  border-radius: ${({ theme }) => theme.border.radius};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  text-decoration: none;

  ${({ variant }) => {
    switch (variant) {
      case 'primary':
        return css`
          background-color: ${({ theme }) => theme.colors.blue1};
          font-size: ${({ theme }) => theme.typography.body1};
          margin: 0 0 ${({ theme }) => theme.spacing.md};
          border: 1px solid ${({ theme }) => theme.colors.blue1};
          color: ${({ theme }) => theme.colors.white};

          &:hover {
            background-color: ${({ theme }) => theme.colors.blue4};
            border-color: ${({ theme }) => theme.colors.blue4};
          }
        `;
      // secondary
      default:
        return css`
          background-color: ${({ theme }) => theme.colors.white};
          font-size: ${({ theme }) => theme.typography.body3};
          margin: 0 0 ${({ theme }) => theme.spacing.sm};
          border: 1px solid ${({ theme }) => theme.colors.blue1};
          color: ${({ theme }) => theme.colors.blue1};

          &:hover {
            background-color: ${({ theme }) => theme.colors.blue1};
            border-color: ${({ theme }) => theme.colors.blue1};
            color: ${({ theme }) => theme.colors.white};
          }
        `;
    }
  }};
`;

export const StyledButton = styled.button<TStyledButton>`
  ${buttonStyles};
`;

export const StyledButtonLink = styled.a<TStyledButton>`
  ${buttonStyles};
`;
