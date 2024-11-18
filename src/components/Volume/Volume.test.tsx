import { render, screen, fireEvent } from "@testing-library/react";
import { Volume } from "./Volume";
import '@testing-library/jest-dom/extend-expect';

describe('Volume Component', () => {
  it('renders correctly and handles value change', () => {
    const mockOnChange = jest.fn();
    const {container} = render(<Volume value={0.5} onChange={mockOnChange} />);

    const volumeInput = screen.getByRole('slider');
 
    expect(volumeInput).toHaveValue(0.5);

    fireEvent.change(volumeInput, { target: { value: '0.7' } });
    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith(expect.objectContaining({ target: { value: '0.7' } }));

    const svgIcon = container.querySelector('use[xlink\\:href="/img/icon/sprite.svg#icon-watch"]');
    expect(svgIcon).toBeInTheDocument();
  });
});
