import { Nav } from "./Nav";
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

describe("Navigation component", () => {
    //@ts-ignore
  const mockStore = configureStore([]);
  const initialState = { user: { user: null } };
  let store = mockStore(initialState);

  it("render Navigation", () => {
    render(
      <Provider store={store}>
        <Nav />
      </Provider>
    );
    expect(screen.getByAltText("logo")).toBeInTheDocument();
  });
});