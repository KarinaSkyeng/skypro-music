import { render, screen } from "@testing-library/react";
import { FilterButtons } from "./FilterButtons";
import '@testing-library/jest-dom';
import configureStore  from "redux-mock-store";
import { initialState } from "@/store/features/userSlice";
import { Provider } from "react-redux";

describe("FilterButtons Component", () => {
  const mockStore = configureStore([]);
  let store = mockStore({ playlist: initialState });
  it("renders title and filter buttons", () => {
    const component = render(
      <Provider store={store}>
        <FilterButtons />
      </Provider>
    );

    expect(screen.getByText("Искать по:")).toBeInTheDocument();

    const text = screen.getAllByAltText("Искать по:");
    expect(text.length).toBeGreaterThan(0);
  });
});
