import type { GatsbyConfig } from 'gatsby';
import path from 'path';

require('dotenv').config({
  path: `.env`,
});

const config: GatsbyConfig = {
  siteMetadata: {
    title: `doggos`,
    siteUrl: `https://localhost:8000`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        host: process.env.CONTENTFUL_HOST,
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: path.resolve(__dirname, './src/components/_layout/Layout'),
      },
    },
  ],
};

export default config;
