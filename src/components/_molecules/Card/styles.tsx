import styled from 'styled-components';

export const Anchor = styled.a`
  color: inherit;
  text-decoration: none;
  padding: ${({ theme }) => theme.spacing.lg};
`;

export const Container = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.border.radius};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: none;
  color: ${({ theme }) => theme.colors.blue2};
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* prettier-ignore */
  padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) =>
    theme.spacing.sm} ${({ theme }) => theme.spacing.sm};
  text-align: center;
  transform: none;
  transition: all 0.2s ease-in 0s;

  &:hover,
  &:focus {
    transform: scale(1.01);
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
`;

export const Description = styled.div`
  margin: 0 0 ${({ theme }) => theme.spacing.md};
`;

export const Image = styled.img`
  height: 120px;
  object-fit: cover;
`;
