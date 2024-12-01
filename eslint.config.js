// @ts-check

const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');
const angular = require('angular-eslint');
const prettier = require('eslint-plugin-prettier');
const prettierConfig = require('eslint-config-prettier');

module.exports = tseslint.config(
  {
    files: ['**/*.ts'],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
      prettierConfig, // Add Prettier config to override conflicting rules
    ],
    processor: angular.processInlineTemplates,
    plugins: {
      prettier, // Add Prettier plugin
    },
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'app',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'app',
          style: 'kebab-case',
        },
      ],
      'prettier/prettier': 'error', // Treat Prettier issues as errors
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'none', // Ignore unused function arguments
          ignoreRestSiblings: true, // Ignore rest sibling variables (like in destructuring)
          varsIgnorePattern: '^_', // Allow variables starting with underscore to be unused
        },
      ],
      '@typescript-eslint/no-inferrable-types': 'off', // Disable the 'no-inferrable-types' rule
    },
  },
  {
    files: ['**/*.html'],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
      prettierConfig, // Include Prettier config for HTML if desired
    ],
    rules: {},
  },
);
