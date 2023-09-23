import { render, screen } from "@testing-library/react";
import { Icon } from "./Icon";
import "@testing-library/jest-dom";

describe("Icon", () => {
  it("レンダリング確認", () => {
    render(<Icon />);
    expect(screen.getByText("テスト1")).toBeInTheDocument();
  });
});
