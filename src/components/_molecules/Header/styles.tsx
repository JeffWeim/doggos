import Anchor from '@@/components/_atoms/Anchor';
import Text from '@@/components/_atoms/Text';
import styled from 'styled-components';

export const StyledAnchor = styled(Anchor)`
  font-size: 25px;
`;

export const StyledText = styled(Text)`
  margin: 0 0 0 ${({ theme }) => theme.spacing.md};
`;

export const StyledHeader = styled.header`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: ${({ theme }) => theme.colors.shadow} 0px 4px 4px;
  display: flex;
  height: 75px;
  padding: ${({ theme }) => theme.spacing.lg};
  position: sticky;
  top: 0;
  z-index: 1;
`;
