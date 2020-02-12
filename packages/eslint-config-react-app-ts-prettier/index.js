module.exports = {
    extends: [
        require.resolve('eslint-config-react-app'),
        require.resolve('eslint-config-airbnb-typescript'),
        require.resolve('eslint-config-prettier'),
        require.resolve('eslint-config-prettier/@typescript-eslint'),
    ],
    plugins: [
        'prettier'
    ],
    rules: {
        // Should be handled by GIT
        'linebreak-style': 'off',

        // force named imports
        'import/prefer-default-export': 'off',
        'import/no-default-export': 'error',

        // Splitting each member to newline is too strict restriction.
        // The only think which should be checked is consistency between opening and closing brackets.
        'object-curly-newline': ['error', {
            'consistent': true
        }],

        // "++" should be IMHO allowed in for loops
        'no-plusplus': ['error', {
            'allowForLoopAfterthoughts': true,
        }],

        // assigning to property of parameter should be allowed - useful for example in .reduce
        'no-param-reassign': ['error', {
            'props': false,
        }],

        // IMHO lines between single-line class members should not be required
        'lines-between-class-members': ['error', 'always', {
            exceptAfterSingleLine: true,
        }],

        // support also "triple-slash" comments
        'spaced-comment': ['error', 'always', { 'markers': ['/'] }],

        // support Prettier
        'prettier/prettier': ['error']
    },
    env: {
        browser: true,
        commonjs: true,
    }
};
