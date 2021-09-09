module.exports = {
   preset: 'ts-jest/presets/js-with-babel',
   moduleNameMapper: {
      '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)$': '<rootDir>/__mocks__/jest.mock.js',
   },
   testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/assets/'],
   transformIgnorePatterns: [
      '/node_modules/',
      '^.+\\.module\\.(css|sass|scss)$',
   ],
   transform: {
      "^.+\\.js$": "babel-jest",
      "^.+\\.css$": "jest-transform-scss",
      "^.+\\.scss$": "jest-transform-scss"
   },
   setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"]
};