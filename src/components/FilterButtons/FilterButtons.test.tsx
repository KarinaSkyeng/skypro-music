import { render, screen } from "@testing-library/react";
import { FilterButtons } from "./FilterButtons";

describe("FilterButtons Component", () => {
  it("renders title and filter buttons", () => {
    render(<FilterButtons tracks={[]} />);

    // Проверяем наличие заголовка
    expect(screen.getByText("Искать по:")).toBeInTheDocument();

    // Проверяем наличие всех кнопок фильтров
    const filterButtons = ["исполнителю", "году выпуска", "жанру"];
    filterButtons.forEach((filter) => {
      expect(screen.getByText(filter)).toBeInTheDocument();
    });
  });
});
