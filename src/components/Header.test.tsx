import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Header } from "./Header";

describe("Header Component", () => {
  it("应当正确渲染标题文本", () => {
    render(<Header />);
    expect(screen.getByText("赛博马年 · 2026")).toBeInTheDocument();
  });

  it("应当正确渲染副标题", () => {
    render(<Header />);
    expect(screen.getByText("AI 驱动 · 数字贺词")).toBeInTheDocument();
  });

  it("应当渲染 Sparkles 图标", () => {
    const { container } = render(<Header />);
    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();
  });
});
