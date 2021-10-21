module.exports = {
    root: true,
    extends: 'airbnb-base',
    rules: {
        indent: ['error', 4],
        'no-param-reassign': 0,
        'no-var': 'error',
        'comma-dangle': ["error", "never"],
        'no-plusplus': 0
    },
    env: {
        jasmine: true
    },
    globals: {
      window: true,
    }
}
