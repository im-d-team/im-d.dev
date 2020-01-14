export default {
  globals: {
    __LINK_PREFIX__: '',
    __PREFIX_LINKS__: '',
  },
  transform: {
    '.(ts|tsx)': '<rootDir>/node_modules/ts-jest/preprocessor.js',
  },
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  testPathIgnorePatterns: ['/node_modules/', '/templates/', '/.cache'],
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  collectCoverage: true,
  coverageReporters: ['lcov', 'text', 'html'],
};
