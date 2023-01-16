module.exports = {
    globals: { defineOptions: 'writable' },
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        'airbnb-base',
        'plugin:vue/vue3-recommended',
        'plugin:prettier/recommended',
        'plugin:import/errors',
        'plugin:import/warnings'
    ],
    parserOptions: {
        ecmaVersion: 12,
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    plugins: ['vue', '@typescript-eslint', 'import'],
    rules: {
        'vue/multi-word-component-names': 'off',
        'import/extensions': 'off',
        'no-shadow': 'off',
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'import/newline-after-import': 'off',
        'import/no-extraneous-dependencies': 'off',
        'consistent-return': 'off',
        'no-undef': 'off'
    }
}
