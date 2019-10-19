module.exports = {
    extends: [
        require.resolve('eslint-config-airbnb-typescript')
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
        }]
    },
    env: {
        browser: true,
        commonjs: true,
    }
};