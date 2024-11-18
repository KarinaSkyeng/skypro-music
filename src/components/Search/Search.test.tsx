import { render, screen } from "@testing-library/react";
import { Search } from "./Search";

describe("Search Component", () => {
  it("renders search input with placeholder", () => {
    render(<Search />);

    const inputElement = screen.getByPlaceholderText("Поиск");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("type", "search");
  });

  it("renders search icon", () => {
    render(<Search />);

    const svgElement = screen.getByRole("img", { hidden: true }); // Для SVG без aria-label
    expect(svgElement).toBeInTheDocument();
  });
});
