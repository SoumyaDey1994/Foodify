import { fireEvent, render } from "@testing-library/react";
import Body from "../components/Body";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MOCK_RES_LIST from "./mocks/restaurantList_mock.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_RES_LIST);
    },
  });
});

describe("Test Body Component", () => {
  it("should render restaurant list", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      );
    });

    const restaurants = screen.getAllByTestId("res-card");
    expect(restaurants.length).toBe(20);
  });

  it("should render search input & search button", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      );
    });

    const searchInput = screen.getByRole("textbox");
    expect(searchInput).toBeInTheDocument();

    const searchBtn = screen.getByRole("button", { name: "Search" });
    expect(searchBtn).toBeInTheDocument();
  });

  it("should be able to search a restaurant by name", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      );
    });

    const searchInput = screen.getByRole("textbox");
    fireEvent.change(searchInput, { target: { value: "pizza" } });

    const searchBtn = screen.getByRole("button", { name: "Search" });
    fireEvent.click(searchBtn);

    const restaurants = screen.getAllByTestId("res-card");
    expect(restaurants.length).toBe(4);
  });

  it("should render all restaurants if search string is empty", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      );
    });

    const searchInput = screen.getByRole("textbox");
    fireEvent.change(searchInput, { target: { value: "" } });

    const searchBtn = screen.getByRole("button", { name: "Search" });
    fireEvent.click(searchBtn);

    const restaurants = screen.getAllByTestId("res-card");
    expect(restaurants.length).toBe(20);
  });

  it("should be able to find Top Rated Restaurants by button click", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      );
    });

    const findBtn = screen.getByRole("button", {
      name: "Find Top Rated Restaurants",
    });
    fireEvent.click(findBtn);

    const restaurants = screen.getAllByTestId("res-card");
    expect(restaurants.length).toBe(6);
  });
});
