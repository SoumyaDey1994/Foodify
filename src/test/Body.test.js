import { render } from "@testing-library/react";
import Body from "../components/Body";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MOCK_RES_LIST from "./mocks/restaurantList_mock.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_RES_LIST);
    },
  });
});

describe("Test Body Component", () => {
  it.skip("should render restaurant list", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      );
    });

    const resCards = screen.getByTestId("res-card");
    expect(resCards.length).toBe(20);
  });
});
