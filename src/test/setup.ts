import "@testing-library/jest-dom";
import { expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import * as matchers from "@testing-library/jest-dom/matchers";

// 扩展 vitest 的 expect
expect.extend(matchers as any);

// 每个测试用例结束后清理 DOM
afterEach(() => {
  cleanup();
});
