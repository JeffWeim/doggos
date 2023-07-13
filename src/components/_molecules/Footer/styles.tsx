import styled from 'styled-components';

export const StyledFooter = styled.footer`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.blue1};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  height: 250px;
  padding: ${({ theme }) => theme.spacing.lg};
  position: sticky;
`;
