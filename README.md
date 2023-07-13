## Running the project

1. Ensure you are using node version 18+. Install and use NVM otherwise to upgrade - [link to install](https://github.com/nvm-sh/nvm#installing-and-updating)
1. Paste in the environment variables (should have been included in my email) to the `.env.example` file and re-name the file to `.env`
1. ```
   yarn
   ```
1. ```
   yarn start
   ```
1. View project at http://localhost:8000

## Things I would do to improve / enhance the project

This is a list of things I would do with more time or if I was setting up a real project:

1. Extend some of the props and features that are available to the design system components. Some stuff is hardcoded in the styling that probably shouldn't be. I have kept things _very_ simple. In reality, a lot of the atoms would have more variants, props, functionality, etc
1. Add full set of integration tests using Cypress
1. Add full set of unit tests using Jest
1. Add more responsive styling
1. Make more atoms + molecules and make more use of these
1. Come up with better theme variable names. I quickly went with {color}{n + 1}. I'd work with design to make sure the naming works for both us and them
1. If starting from scratch on a design library I'd more likely consider a library like Chakra as a starting point. Using something like Chakra would be less boilerplate, would already be tested, and as a starting point easier to extend
1. Clean up some of TS types. I think I could have re-used the same typings more efficiently
1. I was a little rusty on how to get the fluid image graphql queries to work in the time I had. I'd definitely be using those in a real application
