// This file contains test setup code that will run before each test

import { vi } from "vitest";

// Mock global objects if needed
// global.fetch = vi.fn()

// Add any custom test matchers if needed
// expect.extend({})

// Reset mocks between tests
beforeEach(() => {
  vi.resetAllMocks();
});
