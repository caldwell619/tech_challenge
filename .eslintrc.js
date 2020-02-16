module.exports = {
	root: true,
	env: {
    node: true,
    es6: true
	},
	extends: ['eslint:recommended'],
	rules: {
    'no-console': 'off',
    // always use single quotes
    quotes: [2, 'single', { avoidEscape: true }],
    // errors when semi colon are used to close
    semi: ['error', 'never'],
    // requires commas after every available option
    'comma-dangle': [0, 'always']
  },
	parserOptions: {
    ecmaVersion: 10
	}
}
