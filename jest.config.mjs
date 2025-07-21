export default {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@config/(.*)$": "<rootDir>/config/$1",
    "^@database/(.*)$": "<rootDir>/database/$1"
  },
  rootDir: ".",
  roots: ["<rootDir>/src", "<rootDir>/tests"]
};
