const path = require('path');
const { GatsbyNode } = require('gatsby');

exports.onCreateWebpackConfig = ({ actions }) => {
  const { setWebpackConfig } = actions;

  setWebpackConfig({
    resolve: {
      alias: {
        '@@': path.resolve(__dirname, 'src'),
      },
    },
  });
};

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  return graphql(`
    query allBreedsQuery {
      allContentfulDogBreed {
        edges {
          node {
            slug
            name
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach((error: Error) => console.error(error.toString()));
      return Promise.reject(result.errors);
    }

    const breeds = result.data.allContentfulDogBreed.edges;

    breeds.forEach((breed) => {
      createPage({
        path: breed.node.slug,
        component: path.resolve(`./src/templates/breed.tsx`),
        // additional data can be passed via context
        context: {
          slug: breed.node.slug,
          name: breed.node.name,
        },
      });
    });
  });
};
