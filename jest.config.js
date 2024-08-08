export default {
  testEnvironment: 'jsdom',
  verbose: true,
  setupFiles: ['<rootDir>/test/util/simulate-event.js'],
  transform: {},
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/packages/**/*.js'],
  coveragePathIgnorePatterns: [
    '<rootDir>/.*.config.js',
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
    '\\.(svg)$': '<rootDir>/test/util/mocks/file-mock.js',
    '\\.(scss)$': '<rootDir>/test/util/mocks/file-mock.js',
  },
  testEnvironmentOptions: {
    url: 'http://localhost',
  },
};
