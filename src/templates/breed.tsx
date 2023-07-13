import React from 'react';

import Anchor from '@@/components/_atoms/Anchor';
import Heading from '@@/components/_atoms/Heading';
import HR from '@@/components/_atoms/HR';
import Text from '@@/components/_atoms/Text';
import Container from '@@/components/_layout/Container';
import Rating from '@@/components/_molecules/Rating';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

interface IBreedPageProps {
  data: {
    allContentfulDogBreed: {
      edges: {
        node: {
          barkingTendencies: number;
          description: {
            raw: string;
            references: [];
          };
          energyLevel: number;
          goodForSmallHomes: number;
          id: string;
          image: {
            url: string;
          };
          name: string;
          trainingNeeds: number;
          updatedAt: string;
          shedLevel: number;
          lifeExpectancy: string;
          originationLocation: string;
        };
      }[];
    };
  };
}

const HomePage = (props: IBreedPageProps) => {
  const {
    data: {
      allContentfulDogBreed: {
        edges: [{ node: breed }],
      },
    },
  } = props;

  const { name, description } = breed;

  return (
    <Container>
      <Anchor $hasHoverUnderline href="/" margin="10px 0 20px">
        Go back
      </Anchor>

      <Heading variant="h1">{name}</Heading>

      <Img
        alt={`The dog breed: ${breed.name}`}
        fixed={{
          src: breed.image.url,
          srcSet: breed.image.url,
          width: 600,
          height: 350,
        }}
        style={{ maxWidth: '100%' }}
      />

      <Text as="span">{renderRichText(description)}</Text>

      <HR />

      <Heading variant="h2">Doggo Stats</Heading>

      <Heading variant="h3">Life expectancy: {breed.lifeExpectancy}</Heading>
      <Heading variant="h3">
        Origination location: {breed.originationLocation}
      </Heading>

      <Rating
        ratings={[
          { label: 'Shed level', ratingValue: breed.shedLevel },
          { label: 'Training needs', ratingValue: breed.trainingNeeds },
          { label: 'Barking Tendencies', ratingValue: breed.barkingTendencies },
          { label: 'Energy level', ratingValue: breed.energyLevel },
          {
            label: 'Good for small homes',
            ratingValue: breed.goodForSmallHomes,
          },
        ]}
      />
    </Container>
  );
};

export default HomePage;

export const query = graphql`
  query BreedBySlugQuery($slug: String!) {
    allContentfulDogBreed(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          barkingTendencies
          description {
            raw
          }
          energyLevel
          goodForSmallHomes
          id
          image {
            url
          }
          name
          slug
          trainingNeeds
          updatedAt
          shedLevel
          lifeExpectancy
          originationLocation
        }
      }
    }
  }
`;

type THeadProps = {
  pageContext: {
    name: string;
  };
};

export const Head = (props: THeadProps) => (
  <title>Doggo - {props.pageContext.name}</title>
);
