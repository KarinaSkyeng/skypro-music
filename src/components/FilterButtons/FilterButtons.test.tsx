import { render, screen } from "@testing-library/react";
import { FilterButtons } from "./FilterButtons";
import '@testing-library/jest-dom';
import configureStore  from "redux-mock-store";
import { initialState } from "@/store/features/authSlice";
import { Provider } from "react-redux";

describe("FilterButtons component", () => {
  const mockStore = configureStore([]);
  let store = mockStore({ playlist: initialState });
  it("renders title and filter buttons", () => {
    const component = render(
      <Provider store={store}>
        <FilterButtons />
      </Provider>
    );

    expect(component.container).toBeInTheDocument();
    expect(screen.getByText("Искать по:")).toBeInTheDocument();

    const text = screen.getAllByText("Искать по:");
    expect(text.length).toBeGreaterThan(0);
  });
});
