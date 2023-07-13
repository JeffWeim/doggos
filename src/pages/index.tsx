import React from 'react';

import Container from '@@/components/_layout/Container';
import Grid from '@@/components/_layout/Grid';
import Card from '@@/components/_molecules/Card';
import { graphql } from 'gatsby';

interface IHomePageProps {
  data: {
    allContentfulDogBreed: {
      nodes: {
        description: {
          raw: string;
          references: [];
        };
        image: {
          url: string;
        };
        name: string;
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
        description {
          raw
        }
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
