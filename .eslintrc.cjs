
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:react/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  overrides: [
    {
      files: ['*.tsx', '*.ts'],
      rules: {
        semi: ['error', 'always'],
        '@typescript-eslint/semi': ['error', 'always'],
        'react/react-in-jsx-scope': 'off',
        'react/jsx-uses-react': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        "@typescript-eslint/consistent-type-imports": "off"
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    "ecmaFeatures": {
      "jsx": true
    },
    sourceType: 'module',
    project: ['./tsconfig.json', '*', '*.*.*'],
    tsconfigRootDir: __dirname
  },
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  rules: {
    semi: ['error', 'always'],
    '@typescript-eslint/semi': ['error', 'always'],
    "@typescript-eslint/no-explicit-any": "off"
  }
};
