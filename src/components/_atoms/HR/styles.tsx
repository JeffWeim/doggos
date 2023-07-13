import styled from 'styled-components';

export const StyledHR = styled.hr`
  border: 1px solid ${({ theme }) => theme.colors.divider};
  margin: ${({ theme }) => theme.spacing.lg} 0;
`;
