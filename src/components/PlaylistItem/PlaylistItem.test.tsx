import { render, screen } from "@testing-library/react";
import { PlaylistItem } from "./PlaylistItem";
import "@testing-library/jest-dom";

describe("PlaylistTitle", () => {
  it("render PlaylistTitle", () => {
    render(<PlaylistItem />);
    const text = screen.getByText("Трек");
    expect(text).toBeInTheDocument();
  });
});