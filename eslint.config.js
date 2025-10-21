// import js from '@eslint/js';
// import stylistic from '@stylistic/eslint-plugin';
// import reactHooks from 'eslint-plugin-react-hooks';
// import reactRefresh from 'eslint-plugin-react-refresh';
// import { defineConfig, globalIgnores } from 'eslint/config';
// import globals from 'globals';
// import tseslint from 'typescript-eslint';

// export default defineConfig([
//   globalIgnores(['dist']),
//   {
//     files: ['**/*.{ts,tsx}'],
//     extends: [
//       js.configs.recommended,
//       tseslint.configs.recommended,
//       reactHooks.configs['recommended-latest'],
//       reactRefresh.configs.vite,
//     ],
//     languageOptions: {
//       ecmaVersion: 2020,
//       globals: globals.browser,
//     },
//     plugins: {
//       '@stylistic': stylistic,
//     },
//     rules: {
//       '@stylistic/indent': ['error', 2],
//       '@stylistic/quotes': ['error', 'single', { 'avoidEscape': true }],
//       '@stylistic/semi': ['error', 'always'],
//       '@stylistic/comma-dangle': ['error', 'always-multiline'],
//       '@stylistic/object-curly-spacing': ['error', 'always'],
//       '@stylistic/array-bracket-spacing': ['error', 'never'],
//       '@stylistic/space-before-function-paren': ['error', {
//         'anonymous': 'always',
//         'named': 'never',
//         'asyncArrow': 'always',
//       }],
//       '@stylistic/space-infix-ops': 'error',
//       '@stylistic/space-in-parens': ['error', 'never'],
//       '@stylistic/key-spacing': ['error', { 'beforeColon': false, 'afterColon': true }],
//       '@stylistic/space-before-blocks': 'error',
//       '@stylistic/eol-last': ['error', 'always'],
//       '@stylistic/arrow-parens': ['error', 'always'],
//       '@stylistic/max-len': ['error', {
//         'code': 80,
//         'tabWidth': 2,
//         'ignoreUrls': true,
//         'ignoreStrings': true,
//         'ignoreTemplateLiterals': true,
//       }],
//       '@stylistic/jsx-quotes': ['error', 'prefer-double'],
//       '@stylistic/jsx-indent-props': ['error', 2],
//       'no-console': 'warn',
//       'no-unused-vars': 'off',
//       '@typescript-eslint/no-unused-vars': ['error', {
//         'argsIgnorePattern': '^_',
//         'ignoreRestSiblings': true,
//       }],
//       '@typescript-eslint/explicit-function-return-type': 'off',
//     },
//   },
// ]);