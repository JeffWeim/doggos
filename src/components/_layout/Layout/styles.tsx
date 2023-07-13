import BackgroundIcon from '@@/assets/background-icon.svg';
import styled from 'styled-components';

export const Main = styled.main`
  background-image: url(${BackgroundIcon});
  background-repeat: no-repeat;
  background-size: 200% 100%;
  min-height: 100vh;

  @media screen and (min-width: ${({ theme }) => theme.mediaQueries.tablet}) {
    background-size: cover;
    /* prettier-ignore */
    height: calc(
      100vh - ${({ theme }) =>
      `${theme.constants.navAndFooterCombinedHeight}px`}
    );
    min-height: 100%;
  }
`;
