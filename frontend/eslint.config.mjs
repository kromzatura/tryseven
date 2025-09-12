import next from 'eslint-config-next'

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  ...next,
  {
    files: ['test/**/*.{ts,tsx}', '**/*.spec.{ts,tsx}', '**/*.test.{ts,tsx}'],
    rules: {
      // Relax common rules in test files if needed
      'import/no-extraneous-dependencies': 'off',
    },
    languageOptions: {
      globals: {
        // Vitest globals
        describe: 'readonly',
        it: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        vi: 'readonly',
      },
    },
  },
]
