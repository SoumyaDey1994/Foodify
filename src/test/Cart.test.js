import { fireEvent, render, screen } from "@testing-library/react";
import Cart from "../components/Cart";
import RestaurantMenu from "../components/RestaurantMenu";
import MOCK_MENU from "./mocks/restaurantMenu_mock.json";
import { act } from "react";
import { Provider } from "react-redux";
import appStore from "../Store/appStore";
import Header from "../components/Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_MENU),
  });
});

describe("Test Add-to-Cart feature", () => {
  it("Should load restaurant menu item categories", async () => {
    await act(async () => {
      render(<RestaurantMenu />);
    });

    const menuCategories = screen.getAllByTestId("menuCategory");
    expect(menuCategories.length).toBe(5);
  });

  it("Should open/close item category on click & display individual items when opened", async () => {
    await act(async () => {
      render(
        <Provider store={appStore}>
          <RestaurantMenu />
        </Provider>
      );
    });
    // Open menu
    const targetCategory = screen.getByText(/Dessert/);
    fireEvent.click(targetCategory);
    // Assert item count
    const menuItems = screen.getAllByTestId("menu-item");
    expect(menuItems.length).toBe(4);
    // Close the menu
    fireEvent.click(targetCategory);
    const itemsAfterClose = screen.queryAllByTestId("menu-item");
    expect(itemsAfterClose.length).toBe(0);
  });

  it("Should be able to add item to cart", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
            <RestaurantMenu />
          </Provider>
        </BrowserRouter>
      );
    });
    // Open menu
    const targetCategory = screen.getByText(/Dessert/);
    fireEvent.click(targetCategory);

    // Add item using button
    const addBtns = screen.getAllByRole("button", { name: "ADD" });
    expect(addBtns.length).toBe(4);

    fireEvent.click(addBtns[0]);
    fireEvent.click(addBtns[1]);

    // Asset count in Cart tab from header
    const cartTab = screen.getByTestId("cart");
    expect(cartTab.textContent).toContain("Cart (2 Items)");
  });

  it("Should load items in Cart componet when selected", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
            <RestaurantMenu />
            <Cart />
          </Provider>
        </BrowserRouter>
      );
    });
    // Open menu
    const targetCategory = screen.getByText(/Dessert/);
    fireEvent.click(targetCategory);

    //Close menu category
    fireEvent.click(targetCategory);

    const menuItems = screen.getAllByTestId("menu-item");
    expect(menuItems.length).toBe(2);
  });

  it("Should increas/decrease item count on clicking corresponding buttons", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Cart />
          </Provider>
        </BrowserRouter>
      );
    });

    expect(screen.getByText("Checkout")).toBeInTheDocument();

    const items = screen.getAllByTestId("menu-item");
    expect(items.length).toBe(2);

    const itemIncreaseCounterBtn = screen.getAllByTestId("increase-count")?.[0];
    const itemDecreaseCounterBtn = screen.getAllByTestId("decrease-count")?.[0];
    const itemCountBefore = screen.getAllByTestId("item-count")?.[0];
    expect(itemCountBefore.textContent).toBe("1");

    fireEvent.click(itemIncreaseCounterBtn); // add 1 - total 2
    fireEvent.click(itemIncreaseCounterBtn); // add 1 - total 3
    fireEvent.click(itemDecreaseCounterBtn); // remove 1 - total 2

    const itemCountAfter = screen.getAllByTestId("item-count")?.[0];
    expect(itemCountAfter.textContent).toBe("2");
  });

  it("Should remove item from cart if count is 0", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Cart />
          </Provider>
        </BrowserRouter>
      )
    );

    const itemsBeforeDecr = screen.getAllByTestId("menu-item");
    expect(itemsBeforeDecr.length).toBe(2);

    const itemDecreaseCounterBtn = screen.getAllByTestId("decrease-count")?.[1];
    const itemCountBefore = screen.getAllByTestId("item-count")?.[1];
    expect(itemCountBefore.textContent).toBe("1");

    fireEvent.click(itemDecreaseCounterBtn);
    const itemsAfterDecr = screen.getAllByTestId("menu-item");
    expect(itemsAfterDecr.length).toBe(1);
  });

  it("Should clear cart items on click", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Cart />
          </Provider>
        </BrowserRouter>
      );
    });

    expect(screen.getByText("Checkout")).toBeInTheDocument();

    const clearBtn = screen.getByRole("button", { name: "Clear Cart" });
    expect(clearBtn).toBeInTheDocument();

    const itemsBeforeClear = screen.getAllByTestId("menu-item");
    expect(itemsBeforeClear.length).toBe(1);

    fireEvent.click(clearBtn);

    const itemsAfterClear = screen.queryAllByTestId("menu-item");
    expect(itemsAfterClear.length).toBe(0);
    expect(screen.getByTestId("empty-cart")).toBeInTheDocument();
  });
});
