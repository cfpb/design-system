module.exports = {
  verbose: false,
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/packages/**/*.js'
  ],
  coveragePathIgnorePatterns: [
    '<rootDir>/gulpfile.js',
    '<rootDir>/.*.config.js',
    '<rootDir>/.*.min.js',
    '<rootDir>/node_modules/',
    '<rootDir>/config/',
    '<rootDir>/dist/',
    '<rootDir>/scripts/gulp/',
    '<rootDir>/packages/.?/node_modules/',
    '<rootDir>/packages/capital-framework.js',
    '<rootDir>/packages/cf-expandables/src/cf-expandables.js',
    '<rootDir>/packages/cf-tables/src/cf-tables.js',
    '<rootDir>/test/',
    '<rootDir>/tmp/',
    '<rootDir>/scripts/'
  ],
  coverageDirectory: '<rootDir>/test/unit-test-coverage',
  testURL: 'http://localhost'
};
