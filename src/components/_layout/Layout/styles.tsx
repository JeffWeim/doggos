import BackgroundIcon from '@@/assets/background-icon.svg';
import styled from 'styled-components';

export const Main = styled.main`
  background-image: url(${BackgroundIcon});
  background-repeat: no-repeat;
  background-size: 200% 100%;
  min-height: 100vh;

  @media screen and (min-width: ${({ theme }) => theme.mediaQueries.tablet}) {
    background-size: cover;
    height: auto;
    padding-bottom: 300px;
  }
`;
