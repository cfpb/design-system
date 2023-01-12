export default {
  testEnvironment: 'jsdom',
  verbose: true,
  transform: {},
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/packages/**/*.js'],
  coveragePathIgnorePatterns: [
    '<rootDir>/.*.config.js',
    '<rootDir>/.*.min.js',
    '<rootDir>/node_modules/',
    '<rootDir>/config/',
    '<rootDir>/dist/',
    '<rootDir>/packages/.?/node_modules/',
    '<rootDir>/test/',
    '<rootDir>/tmp/',
    '<rootDir>/scripts/',
  ],
  coverageDirectory: '<rootDir>/test/unit-test-coverage',
  moduleNameMapper: {
    '\\.(svg)$': '<rootDir>/test/unit-test/mocks/fileMock.js',
  },
  testEnvironmentOptions: {
    url: 'http://localhost',
  },
};
