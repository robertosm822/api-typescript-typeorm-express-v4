module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: 'tsconfig.json',
      sourceType: 'commonjs',
    },
    plugins: ['@typescript-eslint/eslint-plugin', 'prettier'],
    extends: [
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
    ],
    root: true,
    env: {
      node: true,
      jest: true,
    },
    ignorePatterns: ['.eslintrc.js'],
    rules: {
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/ban-types': 'off',
      "@typescript-eslint/no-unused-vars": [
        "warn", // ou "error" se quiser falhar o lint
        {
          "argsIgnorePattern": "^_",  // Ignora parâmetros que começam com _
          "varsIgnorePattern": "^_",  // Ignora variáveis que começam com _
          "caughtErrorsIgnorePattern": "^_"  // Ignora erros em catch que começam com _
        }
      ],
    },
  }
