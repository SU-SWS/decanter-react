module.exports = {
  "verbose": true,
  "roots": [
    "<rootDir>/node_modules",
    "<rootDir>/src"
  ],
  "testPathIgnorePatterns": [
    "/node_modules/",
    "/docs/"
  ],
  "testRegex": "(/test/.*|\\.(test|spec))\\.(js|jsx)$",
  "moduleFileExtensions": [
    "js",
    "jsx",
    "json"
  ],
  "moduleDirectories": [
    "node_modules",
    "src"
  ]
}
