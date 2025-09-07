module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(t|j)sx?$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1", // maps "@/..." to "src/..."
    "\\.(css|less|scss|sass)$": "<rootDir>/jest.cssMock.js",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};
