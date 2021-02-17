module.exports = {
  "verbose": true,
  "roots": [
    "<rootDir>",
    "/opt/build/repo",
    "/opt/buildhome"
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
