import { render, screen } from "@testing-library/react";
import { Search } from "./Search";
import '@testing-library/jest-dom';
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { initialState } from "@/store/features/userSlice";

describe("Search component", () => {
  const mockStore = configureStore([]);
  let store = mockStore({ playlist: initialState });

  it("renders search input with placeholder", async () => {
    const component = render(
      <Provider store={store}>
      <Search />
    </Provider>
  );
  const text = await screen.findByPlaceholderText("Поиск");
  expect(text).toMatch;   
  });
});
