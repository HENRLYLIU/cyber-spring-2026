import { describe, it, expect } from "vitest";
import { getRandomGreeting, GREETING_DATABASE } from "./greetings";

describe("getRandomGreeting", () => {
  it("应当返回指定类型的祝福语", () => {
    const type = "elder";
    const greeting = getRandomGreeting(type);
    expect(GREETING_DATABASE.elder.templates).toContain(greeting);
  });

  it("当类型不存在时应当 fallback 到 junior", () => {
    const greeting = getRandomGreeting("non-existent-type" as any);
    expect(GREETING_DATABASE.junior.templates).toContain(greeting);
  });

  it("应当在祝福语中包含关键词", () => {
    const keyword = "发财";
    const greeting = getRandomGreeting("friend", keyword);
    expect(greeting).toContain(`ps: 特别祝福包含关键词【${keyword}】`);
  });

  it("如果没有关键词，不应包含 ps 部分", () => {
    const greeting = getRandomGreeting("friend");
    expect(greeting).not.toContain("ps:");
  });
});
