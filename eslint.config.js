const prettierConfig = require('eslint-config-prettier');
const prettierPlugin = require('eslint-plugin-prettier');
const tsEslint = require('typescript-eslint');

/** @type {import('eslint').Linter.Config['files']} */
const files = ['**/*.ts'];

/** @type {import('eslint').Linter.Config} */
const nodeConfig = [
  ...[prettierConfig, ...tsEslint.configs.strictTypeChecked].map((config) => ({
    ...config,
    files
  })),
  {
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.json']
      }
    },
    files,
    linterOptions: {
      reportUnusedInlineConfigs: 'error',
      reportUnusedDisableDirectives: 'error'
    },
    plugins: {
      prettier: prettierPlugin
    },
    rules: {
      '@typescript-eslint/array-type': ['error', { default: 'generic' }],
      '@typescript-eslint/await-thenable': 'error',
      '@typescript-eslint/ban-ts-comment': [
        'error',
        {
          minimumDescriptionLength: 2,
          'ts-expect-error': 'allow-with-description'
        }
      ],
      '@typescript-eslint/consistent-indexed-object-style': 'error',
      '@typescript-eslint/consistent-type-definitions': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-deprecated': 'error',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-import-type-side-effects': 'error',
      '@typescript-eslint/no-shadow': 'error',
      '@typescript-eslint/no-unnecessary-template-expression': 'error',
      '@typescript-eslint/no-unnecessary-type-assertion': 'error',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/prefer-find': 'error',
      '@typescript-eslint/prefer-includes': 'error',
      '@typescript-eslint/prefer-optional-chain': 'error',
      '@typescript-eslint/prefer-readonly': 'error',
      '@typescript-eslint/prefer-string-starts-ends-with': 'error',
      '@typescript-eslint/require-await': 'error',
      '@typescript-eslint/restrict-template-expressions': ['error', { allowBoolean: true, allowNumber: true }],
      '@typescript-eslint/switch-exhaustiveness-check': ['error', { considerDefaultExhaustiveForUnions: true }],
      'arrow-parens': ['error', 'always'],
      camelcase: 'error',
      'comma-dangle': ['error', 'only-multiline'],
      curly: ['error', 'all'],
      'prettier/prettier': 'error'
    }
  },
  {
    ignores: ['typings/**']
  }
];

module.exports = nodeConfig;
