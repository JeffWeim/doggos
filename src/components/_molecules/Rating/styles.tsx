import styled from 'styled-components';

type TRatingCellProps = {
  isFilled: boolean;
};

export const StyledRating = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 275px;
`;

export const RatingCell = styled.div<TRatingCellProps>`
  border-radius: ${({ theme }) => theme.border.radius};
  background-color: ${({ isFilled, theme }) =>
    isFilled ? theme.colors.green : ''};
  border: 1px solid ${({ theme }) => theme.colors.green};
  height: 20px;
  margin: 0 ${({ theme }) => theme.spacing.xs};
  width: 12px;
`;

export const RatingCellContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 0 ${({ theme }) => theme.spacing.sm};
`;
