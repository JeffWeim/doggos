import styled, { css } from 'styled-components';

type TStyledAnchorProps = {
  $hasHoverUnderline: boolean;
  margin?: string | null;
};

export const StyledAnchor = styled.a<TStyledAnchorProps>`
  text-decoration: none;
  color: inherit;
  ${({ margin }) =>
    margin &&
    css`
      margin: ${margin};
      display: inline-block;
    `};

  ${({ $hasHoverUnderline }) =>
    $hasHoverUnderline &&
    css`
      &:hover {
        text-decoration: underline;
      }
    `};
`;
