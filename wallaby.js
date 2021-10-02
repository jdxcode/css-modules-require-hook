module.exports = function (wallaby) {
  return {
    files: [
      'src/**/*.js',

      'test/api/fixture/**',
      'test/env/fixture/**',
      'test/preset/js/*.js',
      'test/preset/fixture/**',
      'test/tokens/cases/**',
      'test/tokens/node_modules/**',
      'test/setup.js',
      'test/sugar.js',

      'package.json',
      'preset.js',
    ],
    tests: [
      'test/**/*.spec.js'
    ],

    testFramework: 'mocha',

    env: {
      type: 'node',
    },

    setup(w) {
      const mocha = w.testFramework;
      mocha.ui('tdd');
      require('./test/setup.js');
    },
  };
};
