module.exports = {
  verbose: true,
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
    '<rootDir>/test/',
    '<rootDir>/tmp/',
    '<rootDir>/scripts/'
  ],
  coverageDirectory: '<rootDir>/test/unit-test-coverage',
  testURL: 'http://localhost'
};
