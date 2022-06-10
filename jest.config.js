module.exports = {
  roots: ["<rootDir>/src"],
  collectCoverage: true,
  "collectCoverageFrom": [
    "**/*.{ts,tsx}",
  ],
  coveragePathIgnorePatterns: ["<rootDir>/src/types"],
  transform: {
    "\\.[jt]sx?$": "babel-jest",
    "^.+\\.svg$": "jest-svg-transformer",
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/(?!blip-ds)"],
  moduleNameMapper: {
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less|scss)$": "<rootDir>/__mocks__/fileMock.js",
    "@contexts/(.*)": "<rootDir>/src/contexts/$1",
    "@reducers/(.*)": "<rootDir>/src/reducers/$1",
    "@components/(.*)": "<rootDir>/src/components/$1",
    "@pages/(.*)": "<rootDir>/src/pages/$1",
    "@hooks/(.*)": "<rootDir>/src/hooks/$1",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
