module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  transformIgnorePatterns: [],
  moduleNameMapper: {
    '\\.(css|scss)$': '<rootDir>/tests/mocks/styleMock.js',
    // setupFiles: ['./jest.setup.js']
},
};