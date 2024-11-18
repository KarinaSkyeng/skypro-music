/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from 'jest';
import nextJest from "next/jest.js";
import "@testing-library/jest-dom/";

const createJestConfig = nextJest({
  dir: "./",
});

const config: Config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",

  moduleNameMapper: {
    "^@/components/(.*)$": "<rootDir>/components/$1",
  },
};
module.exports = {
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"], 
};

export default createJestConfig(config);
