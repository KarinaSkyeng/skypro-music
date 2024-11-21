/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from 'jest';
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  coverageProvider: 'v8',
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/src/components/$1', // Исправьте путь, если папка компонентов находится в src
    '^@/(.*)$': '<rootDir>/src/$1', // Общий алиас для src
  },
};

export default createJestConfig(config);
