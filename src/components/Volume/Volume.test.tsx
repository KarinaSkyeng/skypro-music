import { render, screen, fireEvent } from "@testing-library/react";
import React, { useState } from "react";
import { Volume } from "./Volume";
import "@testing-library/jest-dom";

describe("Volume Component", () => {
  it("renders correctly and handles value change", () => {
    const TestWrapper = () => {
      const [value, setValue] = useState(0.5);
      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(Number(event.target.value));
      };
      return <Volume value={value} onChange={handleChange} />;
    };

    const { container } = render(<TestWrapper />);

    const volumeInput = screen.getByRole("slider");

    // Проверяем начальное значение
    expect(volumeInput).toHaveValue("0.5");

    // Эмулируем изменение значения
    fireEvent.change(volumeInput, { target: { value: "0.7" } });

    // Проверяем, что значение обновилось
    expect(volumeInput).toHaveValue("0.7");

    // Проверяем наличие SVG-иконки
    const svgIcon = container.querySelector(
      'use[xlink\\:href="/img/icon/sprite.svg#icon-volume"]'
    );
    expect(svgIcon).toBeInTheDocument();
  });
});
