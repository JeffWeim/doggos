import React from 'react';

import Text from '@@/components/_atoms/Text';

import { Row, StyledRating, RatingCell, RatingCellContainer } from './styles';

type TRatingProps = {
  ratings: {
    label: string;
    ratingValue: number;
  }[];
};

const Rating = (props: TRatingProps) => {
  const { ratings } = props;

  const generateRating = (rating: number): React.ReactNode => {
    const array = [...Array(5).keys()].map((i) => i);

    return (
      <RatingCellContainer>
        {array.map((value, index) => (
          <RatingCell key={`rating-${index}`} isFilled={rating >= index + 1} />
        ))}
      </RatingCellContainer>
    );
  };

  return (
    <StyledRating>
      {ratings.map((rating, index) => (
        <Row key={`rating-row-${index}`}>
          <Text variant="body2">{rating.label}</Text>{' '}
          {generateRating(rating.ratingValue)}
        </Row>
      ))}
    </StyledRating>
  );
};

export default Rating;
