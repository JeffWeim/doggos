import React from 'react';

import Container from '@@/components/_layout/Container';
import Grid from '@@/components/_layout/Grid';
import Card from '@@/components/_molecules/Card';
import { graphql } from 'gatsby';

interface IHomePageProps {
  data: {
    allContentfulDogBreed: {
      nodes: {
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
        slug: string;
      }[];
    };
  };
}

const HomePage = (props: IHomePageProps) => {
  const {
    data: {
      allContentfulDogBreed: { nodes: breeds },
    },
  } = props;

  return (
    <Container>
      <Grid min="230px">
        {breeds.map((breed) => (
          <Card key={breed.slug} breed={breed} />
        ))}
      </Grid>
    </Container>
  );
};

export default HomePage;

export const query = graphql`
  query AllBreedsQuery {
    allContentfulDogBreed(sort: { name: ASC }) {
      nodes {
        barkingTendencies
        goodForSmallHomes
        trainingNeeds
        updatedAt(locale: "")
        description {
          raw
        }
        energyLevel
        id
        image {
          url
        }
        name
        slug
      }
    }
  }
`;

export const Head = () => <title>Doggos</title>;
