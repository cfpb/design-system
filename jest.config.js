export default {
  testEnvironment: 'jsdom',
  verbose: true,
  setupFiles: ['<rootDir>/test/util/simulate-event.js'],
  transform: {},
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/packages/**/*.js',
    '!<rootDir>/packages/**/dist/**/*.js',
    '!<rootDir>/packages/**/node_modules/**/*.js',
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
