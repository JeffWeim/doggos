module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    sourceType: 'module',
    project: './tsconfig.eslint.json',
  },
  plugins: ['@typescript-eslint'],
  env: {
    'cypress/globals': true,
    browser: true,
    node: true,
    jest: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  extends: [
    // Base AirBnb ESLint config
    'airbnb',
    // Rules for React hooks
    'airbnb/hooks',
    // Decorates base AirBnb with TypeScript support
    'airbnb-typescript',
    // Adds rules for Cypress files
    'plugin:cypress/recommended',
    // Add module resolution rules
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    // Prevent expressions such as 'expect(true).to.be.true;' from triggering
    // 'No unused expression' error.
    'plugin:chai-friendly/recommended',
    // Disables ESLint rules that would otherwise conflict with Prettier
    'prettier',
    // Enables eslint-plugin-prettier and eslint-config-prettier.
    // This will display prettier errors as ESLint errors.
    'plugin:prettier/recommended',
  ],
  settings: {
    react: {
      // Tells eslint-plugin-react to automatically detect the version of React to use
      version: 'detect',
    },
    'import/resolver': {
      typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
    },
  },
  rules: {
    /**
     * @typescript-eslint rules
     * https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules
     */
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/consistent-indexed-object-style': 'error',
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'typeAlias',
        format: ['PascalCase'],
        prefix: ['T', 'E'],
      },
      {
        selector: 'interface',
        format: ['PascalCase'],
        prefix: ['I'],
      },
      {
        selector: 'variable',
        types: ['boolean'],
        format: ['PascalCase'],
        prefix: [
          'are',
          'can',
          'did',
          'does',
          'has',
          'have',
          'is',
          'should',
          'was',
          'will',
        ],
      },
    ],
    '@typescript-eslint/no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
    'consistent-return': 'off',
    'no-shadow': 'off',
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    'react/function-component-definition': 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
      },
    ],

    /**
     * eslint-plugin-import rules
     * https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules
     */
    'import/no-cycle': ['error', { maxDepth: 1, ignoreExternal: true }],
    'import/no-extraneous-dependencies': ['error', { packageDir: './' }],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          ['external', 'internal'],
          'parent',
          ['sibling', 'index'],
        ],
        pathGroups: [
          {
            pattern: 'react+(|-dom)',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'import/prefer-default-export': 'off',

    /**
     * eslint-plugin-react rules
     * https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules
     */
    'react/jsx-no-bind': 'off',
    'react/default-props-match-prop-types': 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-key': 'error',
    'react/jsx-props-no-spreading': ['off', { explicitSpread: 'ignore' }],
    'react/jsx-sort-props': [
      'error',
      {
        ignoreCase: true,
        reservedFirst: true,
      },
    ],
    'react/jsx-uses-react': 'off', // Projects using React ^17 don't need to import React
    'react/no-array-index-key': 'off',
    'react/react-in-jsx-scope': 'off', // Projects using React ^17 don't need to import React
    'react/require-default-props': 'off',

    /**
     * ESLint rules
     * https://eslint.org/docs/rules/
     */
    camelcase: 'off',
    curly: ['error', 'all'],
    'max-len': 'off', // let prettier handle this
    'no-console': 'off',
    'no-underscore-dangle': 'off',
    'no-debugger': 'warn',
    'no-unused-expressions': 'off',
    'chai-friendly/no-unused-expressions': [
      'error',
      { allowShortCircuit: true, allowTernary: true },
    ],
  },
};
