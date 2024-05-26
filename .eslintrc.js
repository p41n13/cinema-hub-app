const ERROR = 2;

const PRETTIER_RULES = {
  'prettier/prettier': ERROR,
};

const TYPESCRIPT_RULES = {
  '@typescript-eslint/no-unused-vars': [
    ERROR,
    {
      argsIgnorePattern: '^_',
      varsIgnorePattern: '^_',
    },
  ],
  '@typescript-eslint/no-shadow': ERROR,
  '@typescript-eslint/no-explicit-any': ERROR,
  '@typescript-eslint/ban-ts-comment': ERROR,
};

module.exports = {
  rules: {
    ...PRETTIER_RULES,
    ...TYPESCRIPT_RULES,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['prettier', '@typescript-eslint'],
  extends: 'next/core-web-vitals',
};
