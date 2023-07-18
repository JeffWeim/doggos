import React from 'react';

import Button from '@@/components/_atoms/Button';
import Heading from '@@/components/_atoms/Heading';
import type { TBreed } from '@@/interfaces/breed.interface';
import Img from 'gatsby-image';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

import { Container, Description } from './styles';

type TCardProps = {
  breed: TBreed;
};

const Card = (props: TCardProps) => {
  const { breed } = props;

  return (
    <Container>
      <Heading variant="h3">{breed.name}</Heading>
      <Img
        alt={`The dog breed: ${breed.name}`}
        fixed={{
          src: breed.image.url,
          srcSet: breed.image.url,
          width: 120,
          height: 120,
        }}
      />
      <Description>
        {renderRichText(breed.description, {
          renderText: (text: string) =>
            text.length > 200 ? `${text.slice(0, 200 - 1).trim()}...` : text,
        })}
      </Description>
      <Button as="a" href={`/${breed.slug}`}>
        Learn more
      </Button>
    </Container>
  );
};

export default Card;
